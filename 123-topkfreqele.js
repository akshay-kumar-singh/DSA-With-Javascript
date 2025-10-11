var topKFrequent = function(arr, k) {
    // create a map of freq 0(n)
    let map = {};
    for(let i=0; i < arr.length; ++i) {
        if(!map[arr[i]]) map[arr[i]] = 0;
            ++map[arr[i]];
    }
// add elements to MinPQ and restrict size tok O(n log k)
    let pq = new MinPriorityQueue(x => x.freq);
    for(key in map) {
        pq.push({val: key, freq: map [key]}); // log k
        if(pq.size() > k) {
            pq.pop(); // removing smallest element // log k
        }
    }
    // retrun remaining k element in PQ
    return pq. toArray().map(x=> Number(x.val))
};