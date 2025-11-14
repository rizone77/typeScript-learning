type User = {
    name: string;
    age: number;
};

// interface : object tyupe: array, object, funtion,

interface IUser {
    name: string;
    age: number;
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

interface IUserwithRole  extends IUser{
    role: 'admin' | 'user'
}

const user1 : IUserwithRole = {
    name: 'Mr x',
    age: 100,
    role: 'admin'
};

const user2: IUser = {
    name: 'Mr Y',
    age: 102,
}

type IsAdmin = boolean;

const isAdmin: IsAdmin = false;


// funtion
type Add = (num1: number, num2: number) => number;


interface IAdd {
     (num1: number, num2: number) : number
}

const add: IAdd = (num1, num2) => num1 + num2;

type Friends = string[];



interface IFriends {
    [index: number] : string
}
const friends: IFriends = ['a', 'b', 'c']