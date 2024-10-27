<script>
    import Container from "$lib/containers/Container.svelte";
    import Button from "$lib/buttons/BaseButton.svelte";
     import Crown from "$lib/icons/Crown.svelte"
    import {players} from "../../stores/data";
    import { goto } from '$app/navigation';
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: -200, duration: 400 }}>
    <Container>
        <h1 class="mb-4 flex flex-row gap-1"><Crown color="#000"/>Winners</h1>
        <div class="overflow-y-scroll max-h-[600px] scrollbar-hide mb-6">
            <div class="flex flex-col gap-2">
                {#each $players.sort((a, b) => b.Points - a.Points) as player, index}
                    <div class="flex items-center gap-2">
                        <p class="font-header text-xl p-2">{index+1}</p>
                        <div>
                            <p class="font-bold -mb-2">{player.Name}</p>
                            <p>Points: {player.Points}</p>
                        </div>  
                    </div> 
            
                {/each}
            </div>
        </div> 
        <Button css="px-6 py-4 hover:bg-green hover:text-white w-full" text="play again"
         on:click={goto("/")}></Button>
    </Container>
</div>
