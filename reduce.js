const reduces = [1,2,3,4,5,6];
const newreduce = reduces.reduce((acce,currentItem) => {
    return acce + currentItem;
});
console.log(newreduce);


//The reduce method is a powerful tool in JavaScript for transforming arrays into a single value.. It is particularly useful when you need to perform cumulative operations on an array, such as summing values, flattening nested arrays, or counting occurrences.

/*
There is two value accumulator and currentValue 

accumulator is the value that is passed to the callback function in each iteration of the reduce method.Imagine you're adding numbers in a list. The accumulator is the sum you keep as you add each number one by one.
*/