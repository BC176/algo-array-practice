const newArr = [2,3,4,5];

//push front

// const pushFront = (arr, newFirstNum) => {
//     for (var x = arr.length - 1; x >= 0; x--)
//         arr[x + 1] = arr[x];
//     arr[0] = newFirstNum;
// }

// pushFront(newArr, 2);
// console.log(newArr);

//pop front
//this works but hardly seems like an algorithm and I think delete is a built-in function too??
//my head is spinning xD

// const popFront = (arr) => {
//     const tempNum = arr[0];
//     delete arr[0];   
//     return(tempNum);
// }

// const num = popFront(newArr);

//Insert At

const insertAt = (arr,i,val) => {
    for (var i = 0; i < arr.length-1; i++) {
        arr[i + 1] = arr[i]
    }
    arr[i] = val;
}

// const insertAtArr = insertAt(newArr, 1, 3);


console.log(newArr);