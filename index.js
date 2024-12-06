//console.log("This is the Github Action Test Project")


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


while (true) {
    console.log("This is the infinity loop")
    sleep(1500)
}
