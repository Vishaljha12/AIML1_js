// let text='{"employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]}';
// let obj=JSON.parse(text);
// document.getElementById("demo").innerHTML=obj.employees[1].firstName+" "+obj.employees[1].lastName;
//when function is passed as an argument to another function, it is called higher order function
    
//mapmethod is used to create a new array from an existing array by applying a function to each element of the array

    // let numbers=[1,2,3,4,5];
    // let result=numbers.map(n=>n*2);
    // console.log(result);

//filter method is used to create a new array from an existing array by filtering out the elements that do not satisfy a certain condition
    // let numbers1=[10,20,30,40,50];
    // let result1=numbers1.filter(n=>n>20);
    // console.log(result1);

//reduce method is used to reduce an array to a single value by applying a function to each element of the array
    // let numbers2=[1,2,3,4,5];
    // let result2=numbers2.reduce((acc,n)=>acc+n,0);
    // console.log(result2);

//asyncronous programming is a programming paradigm that allows the program to run without blocking the main thread. It is used to perform tasks that take a long time to complete, such as fetching data from a server or reading a file from the disk.
//promises are used to handle asynchronous operations in JavaScript. A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It has three states: pending, fulfilled, and rejected.
//promise states:
//pending: the initial state of a promise, before the asynchronous operation has completed.
//fulfilled: the state of a promise when the asynchronous operation has completed successfully.
//rejected: the state of a promise when the asynchronous operation has completed with an error.
// let promise=new Promise((resolve,reject)=>{
//     let success=true;
//     if(success){
//         resolve("data loaded");
//     } else {
//         reject("error occured");
//     }
// });
// //then method works when the promise is fulfilled and catch method works when the promise is rejected
// promise.then(result=>{
//     console.log(result);
// }).catch(error=>{
//     console.error(error);
// });

//async/await is a syntactic sugar for promises. It allows us to write asynchronous code in a synchronous manner. It is used to handle asynchronous operations in a more readable and maintainable way.
// async function fetchData(){
//     let response=await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data=await response.json();
//     console.log(data);
// }

//error handling is the process of handling errors that occur during the execution of a program. It is used to prevent the program from crashing and to provide a better user experience. In JavaScript, we can use try/catch blocks to handle errors.
try {    let x=y+10;;

 }catch(error){
    console.error(error.message);
}