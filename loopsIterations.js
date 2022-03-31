// level {1/2/3}


//level 2

function fib(num){
    if(num <= 1) 
    return num;
    return fib(num-1) + fib(num-2);
}

let num = 6
let sum = 0;
for(let i = num; i >=0 ;i--){
    sum+=fib(i)
}
console.log(sum);

