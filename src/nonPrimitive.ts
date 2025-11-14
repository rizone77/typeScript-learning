// array , object

// ts- tuple

let bazxarList : string[] = ['eggs', 'maito', 'sugar']

bazxarList.push(true)


let mixedArr: (string | number)[] = ['eggs', 12, 'milk', 1, 'sugar', 2];

mixedArr.push(true);

let coordinates : [number, number] = [ 20, 30, 50];

let couple : [string, string] =  ['Huband', 'wife']

let RakibNameAndRoll : [string, number] = [ 'Mezba', 79];

RakibNameAndRoll[0] = 70;

let destination : [string, string, number] = ['Dhaka', 'Chattogram', 3]


// reference type: object

// const user : {
//     organization : 'Programming hero',// value => type : litaral types
//     firstName : string;
//     middleName?: string; // optional type
//     lastName: string;
//     isMarried: boolean
// } = {
//     organization: 'Programming hero', 
//     firstName: 'Rakib Md',
//     middleName: 'Rizone',
//     lastName: 'Ahmed',
//     isMarried: true
// }


// user.organization = 'Programming hero fire';

// console.log(user)


const user : {
    readonly organization : string,// access modifire
    firstName : string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean
} = {
    organization: 'Programming hero', 
    firstName: 'Rakib Md',
    middleName: 'Rizone',
    lastName: 'Ahmed',
    isMarried: true
}


user.organization = 'Programming hero fire';

console.log(user)


