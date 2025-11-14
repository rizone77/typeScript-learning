// dynamically generalize: generic




type GenericArray<T> = Array<T>

// const friends : string [] = ['Mr. x', 'Mr. y', 'Mr.Z'];
const friends : GenericArray<string> = ['Mr. x', 'Mr. y', 'Mr.Z'];

// const rollNumbers : number[] = [4, 7, 11];
const rollNumbers : GenericArray<number> = [4, 7, 11];

// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean>= [true, false, true];


type User = {name: string; age: number}


const userList: GenericArray<User> = [
    {
        name: 'Mr. X',
        age: 22
    },
    {
        name: 'Mr Y',
        age: 25
    },
    
]



const swrFunc = (value: number) => {
    return value * value;
};

swrFunc(2)

type Coodinates<X, Y> = [X, Y]

const coordinates1 : Coodinates<number, number> = [20, 30];
const coordinates2 : Coodinates<string, string> = ['20', '30'];