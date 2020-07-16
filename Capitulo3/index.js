// let numbers = [0,1,2,3,4,5,6,7,8,9];
// //numbers.unshift(-3,-2,-1);
// numbers.splice(5,3);
// console.log(numbers);
// numbers.splice(5, 0, 2, 3, 4);
// console.log(numbers);

// let averageTemp = [];
//  averageTemp[0] = [72, 75, 79, 79, 81, 81];
//  averageTemp[1] = [81, 79, 75, 75, 73, 72];

// function printMatrix(myMatrix){
//     for(let i = 0; i < myMatrix.length; i++){
//         for(let j = 0; j < myMatrix[i].length; j++){
//             console.log(myMatrix[i][j]);
//         }
//     }
// }
// printMatrix(averageTemp);
// console.table(averageTemp);
// const matrix3x3x3 = []

// for(let i = 0; i < 3; i++){
//     matrix3x3x3[i] = [] //necessario inicializar cada array 
//     for(let j = 0; j < 3; j++){
//         matrix3x3x3[i][j] = [];
//         for(let z = 0; z < 3; z++){
//             matrix3x3x3[i][j][z] = i + j + z;
//         }
//     }
// }

// let[i, j, z] = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

// for(let i = 0; i < matrix3x3x3.length; i++){
//     for(let j = 0; j < matrix3x3x3[i].length; j++){
//         for(let z = 0; z < matrix3x3x3[i][j].length; z++){
//             console.table(matrix3x3x3[i][j][z]);
//         }
//     }
// }


// const zero = 0;
// const positiveNums = [1, 2 ,3 ];
// const negativeNums = [-3,-2, -1];

// let numbers = negativeNums.concat(zero, positiveNums);
// console.log(numbers);

// const isEven = x => x % 2 === 0;

const meuArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// console.log(meuArray);
//console.log(meuArray.some(isEven));

// const evenNums = meuArray.filter(isEven);
// const myMap = meuArray.map(isEven);

// const reduce = meuArray.reduce((previous, current) => previous + current);
// console.log(reduce)



let averageTemp = [];
 averageTemp[0] = [72, 75, 79, 79, 81, 81];
 averageTemp[1] = [81, 79, 75, 75, 73, 72];
 averageTemp[2] = [82, 80, 75, 65, 73, 72];
//console.table(averageTemp);

// let evens = Array.from(numbers, x =>( x % 2 == 0));

// console.log(evens);

// let numbersCopy  = Array.of(...numbers);
// console.log(numbersCopy);

// let copyArray = [1, 2, 3, 4, 5, 6];

// const copia = copyArray.copyWithin(0, 3);
// console.log(copia);
let numbers = Array.from(meuArray);

// numbers.reverse();
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
// numbers.sort((a, b) => (a -b));
// console.log(numbers);

const friends = [
    {name: 'john', age:30},
    {name:'Ana', age:20},
    {anme:'Chris', age:25}
];

function comparePerson(a, b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age < b.age){
        return 1;
    }
    return 0;
}
// console.log(friends.sort(comparePerson));

// let names = ['Ana','ana', 'john', 'John'];
// console.log(names.sort());

// names.sort((a, b) => a.localeCompare(b));
// console.log(names);

// console.log(numbers.indexOf(10));
// console.log(numbers.lastIndexOf(100));

console.log(numbers.toString());

const numbersString = numbers.join('-');
console.log('join', numbersString);


let length = 5;
let int16 = new Int16Array(length);
let array16 = [];

array16.length = length;

for(let i = 0; i < length; i++){
    int16[i] = i + 1;
}
console.log(int16);