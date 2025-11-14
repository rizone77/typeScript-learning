 type User = {
    id:number,
    name: {
        firstName: string;
        lastName: string

    },
    gender: 'male' | 'female', 
    contractNo: string,
    address: {
        division: string;
        city: string
    }
}
 
 const user1 : User = {
    id: 123,
    name:{
        firstName: 'Mr',
        lastName: 'X'
    },
    gender: 'male',
    contractNo: '0177',
    address: {
        division: 'Chottogram',
        city: 'Chottogram'
    },
}

const user2 : User = {
    id: 123,
    name:{
        firstName: 'Mr',
        lastName: 'Y'
    },
    gender: 'female',
    contractNo: '01999',
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    },
}
// console.log(user1)

type isAdmin = true;
const isAdmin: isAdmin = true
type Name = string

const myName : Name = 'Me, X';

type AddFunc = (num1: number,num2: number) => number;

const add: AddFunc = (num1, num2) =>  num1 + num2