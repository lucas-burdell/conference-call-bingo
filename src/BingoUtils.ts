export function CheckForBingo(state: boolean[][]) {
    nextColumn: for (let y = 0; y < state.length; y++) {
        for (let x = 0; x < state.length; x++) {
            if (!state[x][y]) {
                continue nextColumn;
            }
        }
        return true;
    }

    nextRow: for (let x = 0; x < state.length; x++) {
        for (let y = 0; y < state.length; y++) {
            if (!state[x][y]) {
                continue nextRow;
            }
        }
        return true;
    }

    return (
        (state[0][0] &&
            state[1][1] &&
            state[2][2] &&
            state[3][3] &&
            state[4][4]) ||
        (state[4][0] &&
            state[3][1] &&
            state[2][2] &&
            state[1][3] &&
            state[0][4])
    );
}
