const strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
    for (let i = 0; i <= strs.length; i++) {
        const word = strs[i];
        // console.log("word", word?.length);
        let prefix = word?.[0];
        console.log("prefix", prefix)
        let j = 0;
        while(j <= word?.length){
            if(prefix === word[j]){
                prefix = prefix + word[j];
                j++
            }
            j++
        }
    }
};

const result = longestCommonPrefix(strs);
console.log("Result", result)