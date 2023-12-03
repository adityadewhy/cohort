console.log("hello world")

// cluster module to run programs parallely
// google above line and subroutines

// let fname ="aditya"
// let lname = "sharma"
// console.log(fname+lname);

// let gender = "m"
// if(gender == "m"){
//     console.log("hello male");
// } else{
//     console.log("hello girl");
// }

// for(let i = 0 ; i<= 10; i++){
//     console.log(i);
// }


//complex primitives
// let arr = [1,2,3,4,5,6,7,8,9];
// let onlyeven
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         console.log(arr[i]);   
//     }
// }

//biggest number in an array - print max number

// const user1 = {
//     fname: "aditya",
//     gender: "m"
// }
// console.log(user1["gender"])

//fn to find sum of 2 numbers

// function sum2(a,b){
//     // console.log(a+b);
//     return a+b;
// }
// let sum = sum2(23,3);
// console.log(sum);

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
displayResult(sum(5,10));
