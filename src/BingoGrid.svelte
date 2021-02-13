<script lang="ts">
    import { fly } from "svelte/transition";
    import BingoCell from "./BingoCell.svelte";
    import { BingoLabels } from "./BingoLabels";
    import { CheckForBingo } from "./BingoUtils";
    const size = 5;

    let state: boolean[][] = [];
    setupState();
    $: bingo = CheckForBingo(state);

    function setupState() {
        for (let i = 0; i < size; i++) {
            const newValue: boolean[] = [];
            for (let j = 0; j < size; j++) {
                newValue[j] = false;
            }
            state[i] = newValue;
        }
    }

    function updateState(x: number, y: number, value: boolean) {
        state[x][y] = value;
        state = state; //inform of state change
    }
</script>

<button
    on:click={() => {
        state = [];
        setupState();
    }}>Clear board</button
>
<div class="bingo-grid">
    {#if bingo}
        <div class="bingo-display" transition:fly={{ duration: 1000, y: -100 }}>
            BINGO!
        </div>
    {/if}
    {#each state as row, x}
        <div class="bingo-row">
            {#each row as value, y}
                <BingoCell {value} on:click={() => updateState(x, y, !value)}>
                    {BingoLabels[x][y]}
                </BingoCell>
            {/each}
        </div>
    {/each}
</div>

<style>
    .bingo-grid {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .bingo-row {
        display: flex;
        flex-direction: row;
    }

    .bingo-display {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        z-index: 999;
        font-size: 5em;
        font-weight: bold;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
