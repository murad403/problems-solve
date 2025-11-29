
const s = "III";

var romanToInt = function (s) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let sum = 0;

    let i = 0;
    while (i < s.length) {
        if(romanNumerals[s[i]] < romanNumerals[s[i+1]]){
            sum = sum + (romanNumerals[s[i+1]] - romanNumerals[s[i]]);
            i+=2
        }else{
            sum = sum + romanNumerals[s[i]];
            i++
        }
    }
    return sum;
};

const result = romanToInt(s);
console.log(result);