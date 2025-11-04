var carPooling = function (trips, carCapacity) {
    let loc = Array(1001).fill(0);
    for (let i = 0; i < trips.length; i++) {
        let [passengers, from, to] = trips[i];
        loc[from] += passengers;   // Pick up passengers
        loc[to] -= passengers;     // Drop off passengers
    }
    let usedCapacity = 0;
    for (let i = 0; i < 1001; i++) {
        usedCapacity += loc[i];
        if (usedCapacity > carCapacity) {
            return false;
        }
    }
    return true;
};