export const BingoLabels = [
    "Hi, who just joined?",
    "Can you e-mail that to everyone?",
    "X? Are you there?",
    "Uh, X, you're still sharing!",
    "Guys, I have to jump to another call.",
    "(Sound of someone typing... ...possibly with a hammer.",
    "(Loud, painful echo)",
    "(Child noises)",
    "Hi, can you hear me?",
    "No, it's still loading.",
    "Next slide please.",
    "Can everyone go on mute, please?",
    "Sorry, I was talking on mute.",
    "Sorry, go ahead...",
    "Sorry, my dog is really excited about this call.",
    "So (fades out) I can (cuts out) by (unintelligible) ok?",
    "Sorry, I am double booked.",
    "X, your screen just greyed out.",
    "Sorry, you cut out there.",
    "Can we take this offline?",
    "I'll have to get back to you on that.",
    "Can everyone see my screen?",
    "Sorry, I was having connection issues.",
    "Sorry, I think there's a lag.",
    "Sorry, the other call ran over.",
];

export function GetStateLabels() {
    const labels = [...BingoLabels];
    const stateLabels: string[][] = [];
    for (let x = 0; x < 5; x++) {
        const newArray = [];
        for (let y = 0; y < 5; y++) {
            const selected = Math.floor(Math.random() * labels.length);
            newArray[y] = labels[selected];
            labels.splice(selected, 1);
        }
        stateLabels[x] = newArray;
    }
    return stateLabels;
}
