const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.output,
    propmt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
    switch (line.trim()) {
        case 'hello':
            console.log('world!');
            break;
        default:
            console.log('Whaaaat?');
            break;
    }

    rl.prompt();
}).on('close', () => {
    console.log('chauu');
    process.exit(0);
});