// sleep time expects milliseconds
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let i = 0;
(async function() {
    while (true) {
        console.log("This is the infinity loop");
        await sleep(1000);
        i++;
        if (i === 100) {
            break;
        }
    }
})();
