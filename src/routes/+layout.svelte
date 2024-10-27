<script>
  import { onMount } from "svelte";
    import "../app.css";
    import { scale } from 'svelte/transition';

    let playMusic = false;
    let audio;

    onMount(() => {
      audio = new Audio('electric-drinkin.mp3');
    });

    function toggleMusic() {
      playMusic = !playMusic;

      if(playMusic) audio.play();
      else audio.pause();
    }
</script>

  <div class="font-body text-lg">
    <button aria-label="toggle music on/off" on:click={toggleMusic} class="flex gap-1 items-center absolute right-8 top-4 h-min md:bottom-8 rounded-full bg-white border-2 border-black px-2 py-4 md:px-4 md:py-6 w-min shadow-[4px_4px_0px_#000] hover:bg-green hover:text-white">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26" height="26"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/></svg>
      {#if playMusic}
        <svg aria-hidden="true" in:scale xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18" height="18"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
      {:else}
        <svg aria-hidden="true" in:scale xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="18" height="18"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
      {/if}
    </button>
    <slot />
  </div>
