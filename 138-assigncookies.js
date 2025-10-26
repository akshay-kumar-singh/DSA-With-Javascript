var findContentChildren = function(g, s) {
    s.sort((a, b) => a - b);
    g.sort((a, b) => a - b);

    let i = 0; // child index
    let j = 0; // cookie index

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            ++i;
            ++j;
        } else {
            ++j;
        }
    }
    return i;
};