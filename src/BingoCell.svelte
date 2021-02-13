<script lang="ts">
    export let value: boolean;
</script>

<div class:marked={value} on:click>
    <slot />
</div>

<style>
    div {
        width: 100%;
        height: 5em;
        padding: 1em;
        border: 1px solid black;
        transition: all 0.2s ease-out;
        cursor: pointer;
        user-select: none;
    }

    .marked {
        background-color: rgba(0, 255, 0, 0.5);
    }
</style>
