function maxTasks(tasks) {
    const sortedTasks = [...tasks].sort((a, b) => a[1] - b[1]);

    let count = 0;
    let lastFinish = -Infinity;

    for (const task of sortedTasks) {
        const [start, finish] = task;

        if (start >= lastFinish) {
            count++;
            lastFinish = finish;
        }
    }

    return count;
}

console.log(maxTasks([[1, 4], [2, 3], [3, 5], [7, 9]]))