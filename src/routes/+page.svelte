


<script>

    import Button from "$lib/components/BaseButton.svelte";
    import Cross from "$lib/icons/Cross.svelte";
    import Container from "$lib/components/Container.svelte";
    import { players, rounds } from "../stores/data";
    import { goto } from '$app/navigation';
    import { fly } from 'svelte/transition';

    let newPlayerName = "";

    function addPlayer () {
        if(!newPlayerName || $players.find(p => p.Name.toLowerCase() == newPlayerName.toLowerCase())) return;
        if(newPlayerName.includes("<script")) newPlayerName = "l33t_haxx0r";

        $players.push({Name: newPlayerName, Points: 0})
        $players = $players;
        newPlayerName = "";
    }

    function removePlayer(playerName) {
        $players = $players.filter(p => p.Name != playerName)    
    }

    function resetPlayerPoints() {
        for(let i = 0; i < $players.length; i++){
            $players[i].Points = 0;
        }
    }

    function startGame() {
        resetPlayerPoints();
        goto("/play");
    }
</script>

<div in:fly={{ y: 200, duration: 400 }} class="flex flex-row gap-8">
    <Container>
        <h1 class="mb-4">Add players</h1>
        <div class="flex flex-col md:flex-row gap-2">
            <input aria-label="add players" maxlength="10" minlength="2" bind:value={newPlayerName} type="text" class="rounded-xl border-2 border-black px-4 py-2"
            on:keyup={(event) => {if(event.key == "Enter") addPlayer()}}>
            <Button text="Add" on:click={addPlayer}/>
        </div>

        <div class="my-6 flex flex-col gap-4 overflow-y-scroll max-h-96 scrollbar-hide border-b-2 pb-4">
            {#each $players as player}
              <div class="flex items-center gap-2 border-2 rounded-2xl justify-between p-4">
                <p class="font-header">{player.Name}</p> 
                <Button ariaLabel ="remove player" css="px-4 py-2 hover:bg-pink hover:color-white" on:click={() => {removePlayer(player.Name)}}> <Cross></Cross></Button>
              </div>
            {/each}
        </div>

        <h1 class="mb-4">Set number of rounds</h1>
        <div class="flex gap-4 mb-6">
            <button on:click={$rounds = 5} class={"rounded-2xl border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#000] hover:bg-green hover:text-white " + ($rounds == 5 ? "bg-green text-white" : "")}>5</button>
            <button on:click={$rounds = 10} class={"rounded-2xl border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#000] hover:bg-green hover:text-white " + ($rounds == 10 ? "bg-green text-white" : "")}>10</button>
            <button on:click={$rounds = 25} class={"rounded-2xl border-2 border-black px-4 py-2 shadow-[4px_4px_0px_#000] hover:bg-green hover:text-white " + ($rounds == 25 ? "bg-green text-white" : "")}>25</button>
        </div>

        {#if $players.length > 1}
            <Button text="play" on:click={startGame} css="px-6 py-4 hover:bg-green hover:text-white w-full"></Button>
        {/if}
    </Container>
</div>
    
