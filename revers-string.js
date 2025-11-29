
const str = "murad";

const reversString = (str) =>{
    let reversStr = "";
    // console.log(str.length)
    for(let i = (str.length - 1); i >= 0; i--){
        reversStr = reversStr + str[i];
    }
    return reversStr;
}

const result = reversString(str);
console.log("Revers string is", result);