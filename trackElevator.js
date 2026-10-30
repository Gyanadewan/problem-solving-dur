function trackElevator(startFloor, minFloor, maxFloor, commands) {
    let currentFloor = startFloor;

    for (const command of commands) {
        if (command === "UP") {
            currentFloor++;
        } else if (command === "DOWN") {
            currentFloor--;
        }

        currentFloor = Math.max(minFloor, Math.min(maxFloor, currentFloor));
    }

    return currentFloor;
}

console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]));
