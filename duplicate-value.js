
const arr = [3, 5, 7, 3, 5, 4, 6];

const duplicateValue = (arr) =>{
    const duplicateArr = [];
    for(let i = 0; i < arr.length; i++){
        console.log(!duplicateArr.includes(arr[i]))
        if(arr.indexOf(arr[i]) !== i && !duplicateArr.includes(arr[i])){
            duplicateArr.push(arr[i]);
        }
    }
    return duplicateArr;
}

const result = duplicateValue(arr);
console.log("Result", result);