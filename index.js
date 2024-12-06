console.log("This is the Github Action Test Project")

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/*
while (true) {
    console.log("This is the infinity loop")
    sleep(1500)
}
*/