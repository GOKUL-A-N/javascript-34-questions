//problem 1 -> array creation and initialization
//creation of array
let cars = ["BMW","BENZ","Rolls Royce"];
// initialization of array
let numbers =[]

// problem 2 -> array manipulation
// push element to array 
numbers.push(2);
numbers.push(3);
numbers.push(4);
numbers.push(5);
numbers.push(6);
numbers.push(3);
// shift element
numbers.shift(2);
// unshift element
numbers.unshift(2);
// pop element
numbers.pop();


// problem 3 -> array searching
// index of a particular element
console.log(numbers.indexOf(2))
// finding last occuring index of a particular element
console.log(numbers.lastIndexOf(2))
//checking whether a particular element is present in the array
console.log(numbers.includes(2))
// searching elements using index
console.log(numbers[3]);

// Problem 4 ->array filtering
// filtering array elements to another array 
const num = numbers.filter((x) => x % 2 === 0);
console.log(num)

// Problem 5 -> array mapping
const mapNum = numbers.map((x) => x*2)
console.log(mapNum)

// Problem 6 -> Sorting and reversing
// sorting
console.log(numbers.sort())
// reverse an array
console.log(numbers.reverse())

// Problem 7 -> finding minimun and maximum
let min = numbers[0];
let max = numbers[0];
for(let i = 1; i < numbers.length; i++){
    if(min > numbers[i]) min = numbers[i];
    if(max < numbers[i]) max = numbers[i];
}
console.log(min + " " + max); 


// Problem 8 -> deduplicating the array
const numWithoutDuplicates = []
numbers.forEach((x) => {
    if(!numWithoutDuplicates.includes(x)) numWithoutDuplicates.push(x);
})

console.log(numWithoutDuplicates)

//Problem 9 -> intersection of two arrays
let arr1=[1,2,3,4,5,6,7,8]
let arr2=[1,2,4,5,6,]
let res = []
arr1.forEach(element => {
    if(arr2.includes(element)) res.push(element)
});

console.log(res)

// Problem 10 -> Implementing stack with array
let stack = []
function isEmptyStack(){
    return stack.length === 0;
}
function pushStack(element){
    stack.push(element);
    return val;
}
function popStack(){
    let val = stack[stack.length - 1];
    stack.pop();
    return val;
}
function peekStack(){
    return stack[stack.length - 1];
}

// Problem 11 -> creating array of array
let nums = []
nums.push([1,2,3,4])
nums.push([5,6,7,8])
nums.push([9,10,11,12])

console.log(nums)

// Problem 12 -> implementing queue with array
let queue = []
function isEmptyQueue(){
    return queue.length === 0;
}
function pushQueue(element){
    queue.unshift(element);
    return element;
}
function popQueue(){
    let val = queue[0];
    queue.pop();
    return val;
}
function peekQueue(){
    return queue[queue.length - 1];
}

// problem 13 -> merging two arrays
function mergeArrays(arr1, arr2){
    const newMergeArrays = arr1.concat(arr2);
    return newMergeArrays;
}
let mergeArr1 = [1,2,3]
let mergeArr2 = [4,5,6]

console.log(mergeArrays(mergeArr1,mergeArr2))


// problem 14 -> flattenning an array
function flettenArray(arrToFlat){
    const newFlatArray = arrToFlat.flat()
    return newFlatArray;
} 

arrToFlat = [[1,2,3],[4,5,6],[7,8,9]]

console.log(flettenArray(arrToFlat))

// problem 15 -> array spreading
function arraySpreading(spreadArray , resultArray){
    resultArray = [...spreadArray , ...resultArray]
    return resultArray;
}

console.log(arraySpreading([1,2,3],[4,5,6]));

// problem 16 -> check to arrays are equal
function arrayEquality(array1, array2){
    if(array1.length !== array2.length) return false;
    array1.sort();
    array2.sort();
    for(let i=0; i<array1.length; i++){
        if(array1[i] !== array2[i]) return false;
    }
    return true;
}

console.log(arrayEquality([1,2,3],[3,2,1]));
