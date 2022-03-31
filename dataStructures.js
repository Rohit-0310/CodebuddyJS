// level {1/2/3}


// level 2

//1 Write a function to remove all even numbers from an Array.
let arr = [1, 3, 4, 6, 7, 8];

let odd= []
for(let i = 0; i< arr.length; i++) {
    if(arr[i] % 2 != 0){
        odd.push(arr[i]);
    }
}
console.log(odd);

//2 Replace all the vowels in a string with uppercase vowels.

let str = "Elie" //'ElIE'
let str1 = "aeiou";
let str2 = "AEIOU";
let out = "";
for(let i = 0; i < str.length; i++){
    let inp = false;
    for(let j = 0; j < str2.length; j++){
        if(str[i] === str1[j]){
            out+=str2[j];
            inp = true;
            break;
        }
    }
    if(inp === false){
        out+=str[i]
        }
}
console.log(out)



//3 Write a function to find the maximum number in an array.


maxnum = [1, 3, 4, 6, 7, 8, 2, 5];
maxnum.sort((a,b) =>b-a)
console.log(maxnum[0])

