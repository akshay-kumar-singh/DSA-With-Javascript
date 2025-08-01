var largestOddNumber = function(s) {
      let n = s.length - 1;
      while (n >= 0) {
          if (Number(s[n]) % 2 == 1) {
            // Found the last odd digit
            // Return the substring from the start to this digit
              return s.substring(0, n + 1);
          }
          --n;
      }
      return "";
  };