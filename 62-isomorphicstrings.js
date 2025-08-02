var isIsomorphic = function (s, t) {
  // Map to store mapping from s -> t
  let mapStoT = {};
  // Map to store mapping from t -> s
  let mapTtoS = {};

  // Iterate through all characters of the strings
  for (let i = 0; i < s.length; i++) {
    // If neither character has been mapped yet
    if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
      // Create the mapping in both directions
      mapStoT[s[i]] = t[i];
      mapTtoS[t[i]] = s[i];
    } 
    // If mapping exists but doesn't match the current characters
    else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
      return false; // Not isomorphic
    }
  }

  // If all characters followed the mapping, strings are isomorphic
  return true;
};
