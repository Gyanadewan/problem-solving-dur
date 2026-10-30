function findFreeTime(bookedIntervals, workingHours) {
    const [workStart, workEnd] = workingHours;

    const bookings = bookedIntervals
        .map(([start, end]) => [
            Math.max(start, workStart),
            Math.min(end, workEnd)
        ])
        .filter(([start, end]) => start < end)
        .sort((a, b) => a[0] - b[0]);

    const merged = [];

    for (const booking of bookings) {
        const last = merged[merged.length - 1];

        if (last && booking[0] <= last[1]) {
            last[1] = Math.max(last[1], booking[1]);
        } else {
            merged.push([...booking]);
        }
    }

    const freeTime = [];
    let currentTime = workStart;

    for (const [start, end] of merged) {
        if (currentTime < start) {
            freeTime.push([currentTime, start]);
        }

        currentTime = Math.max(currentTime, end);
    }

    if (currentTime < workEnd) {
        freeTime.push([currentTime, workEnd]);
    }

    return freeTime;
}

console.log(findFreeTime([[10, 12], [14, 16]], [9, 17]))