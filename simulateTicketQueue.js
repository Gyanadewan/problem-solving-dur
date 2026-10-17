function simulateTicketQueue(commands) {
    const queue = [];
    const served = [];

    for (const command of commands) {
        if (command === "serve") {
            if (queue.length > 0) {
                const person = queue.shift();
                served.push(person);
            }
        } else {
            const parts = command.split(" ");
            const action = parts[0];
            const name = parts[1];

            if (action === "join") {
                if (!queue.includes(name)) {
                    queue.push(name);
                }
            } else if (action === "leave") {
                const index = queue.indexOf(name);

                if (index !== -1) {
                    queue.splice(index, 1);
                }
            }
        }
    }

    return {
        queue,
        served
    };
}

const commands = [
    "serve",
    "join Bob",
    "join Bob",
    "leave Alice",
    "join Alice",
    "serve"
];

console.log(simulateTicketQueue(commands));
