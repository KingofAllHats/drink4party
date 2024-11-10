

<script>
    import {players,rounds} from "../../stores/data";
    import {challenges} from "$lib/data/challenges.js";
    import Crown from "$lib/icons/Crown.svelte"
    import Container from "$lib/components/Container.svelte"
    import BaseButton from "../../lib/components/BaseButton.svelte";
    import { fly, scale } from 'svelte/transition';
    import { goto } from '$app/navigation';
    
    $: currentPlayerIndex = 0;
    $: currentChallengeIndex = 0;
    $: sortedPlayers = $players.toSorted((a, b) => b.Points - a.Points);

    let shuffledChallenges = shuffle(challenges);
    let showPointsAnimation = false;
    let roundsPlayed = 0;

    async function addPointsToActivePlayerAndGoNext() {
        $players[currentPlayerIndex].Points++;
        $players = $players;
        showPointsAnimationAsync();
        goNext();
    }
    function goNext() {
        if(currentPlayerIndex == $players.length - 1)
            roundsPlayed++;

        if(roundsPlayed == $rounds)
            goto("/winner");

        currentPlayerIndex = ((currentPlayerIndex + 1) % $players.length);
        currentChallengeIndex = ((currentChallengeIndex + 1) % challenges.length)
    }

    async function showPointsAnimationAsync() {
        showPointsAnimation = true;
        await new Promise(r => setTimeout(r, 800));
        showPointsAnimation = false;
    }

    function shuffle(array) { 
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]; 
        } 
        return array; 
    }; 
 </script>


<div class="h-full flex flex-col md:flex-row justify-center items-center text-black gap-8">
    <div in:fly={{ y: -200, duration: 400 }}>
        <Container>
            <div class="flex text-center flex-col gap-4 w-full md:w-[350px] h-[350px]">
                <p class="text-3xl font-header">{$players[currentPlayerIndex].Name}</p>
                <p class="h-[40%]">{shuffledChallenges[currentChallengeIndex]}</p>
                <BaseButton on:click={addPointsToActivePlayerAndGoNext} text="accept challenge" css="px-6 py-4 md:hover:bg-green md:hover:text-white w-full">
                    {#if showPointsAnimation}
                        <p in:scale out:scale class="text-2xl border-2 border-black absolute -right-[25px] -top-4 rounded-full bg-white text-black h-min px-2 py-1 self-center">+1</p>
                    {/if}
                </BaseButton>
                <BaseButton on:click={goNext} text="drink" css="px-6 py-4 md:hover:bg-pink md:hover:text-white"></BaseButton>
            </div>
        </Container>
    </div>
   
  <div in:fly={{ y: 200, duration: 400 }}>
    <Container css="w-full md:w-auto p-6 md:p-10">
        <div class="overflow-y-scroll max-h-[600px] scrollbar-hide ">
            <h1 class=" mb-4 flex flex-row gap-1"><Crown color="#000"/>Leaderboard</h1>
            <div class="flex flex-col gap-2">
                {#each sortedPlayers as player, index}
                <div>
                    <div class="flex items-center gap-2">
                        <p class="font-header text-xl p-2">{index+1}</p>
                        <div>
                            <p class="font-bold -mb-2">{player.Name}</p>
                            <p>Points: {player.Points}</p>
                        </div>  
                    </div> 
                </div>
                {/each}
            </div>
        </div>      
</Container>
</div>   
</div>

  

