<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    export let text = "";    
    export let css = "px-8 py-2 hover:bg-green hover:text-white";
    export let ariaLabel = "";
    
    function onClick(event) {
        dispatch('click', {
            value: event.target.value,
        });
    }
</script>

<button aria-label={ariaLabel} class={"rounded-2xl bg-white border-2 border-black shadow-[4px_4px_0px_#000] text-black relative " + css }
    on:click={onClick}>
    <slot />
    {text}
</button>
