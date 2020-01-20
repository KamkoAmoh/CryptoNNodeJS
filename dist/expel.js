//CLI Test:

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'cipher> '
});
rl.prompt();
rl.on('line', (line) => {
    let memory = [];
    let input = line.split(" ");
    switch (input[0]) {
        case '-e': 
            if (input[1]) {
                storeInMemory(input[1]);
                break;
            }
            console.log('Enter Argv'); break;
    }
    rl.prompt();
}).on('close', () => {
    console.log('cipher: Closed, all data removed.');
    process.exit(0);
})