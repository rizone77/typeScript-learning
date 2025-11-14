// ? : ternary opearator : decision making
// ?? : nullish coalescing operator// ? . optional chaining


const userAge = 21

const biyerJonnoEligible = (age: number) => {
    // if(age >= 21 ){
    //     console.log('You are eligible')
    // } else {
    //     console.log('you are not eligible')
    // }

    const result = age >= 21 ?  'You are eligible' : 'you are not eligible'
    console.log(result)
};

// biyerJonnoEligible(21)


const userTheme = undefined;

const selectedTheme = userTheme ?? 'Light theme';

// console.log(selectedTheme)

const isAuthenticate = ''
const resultWithTernary = isAuthenticate ? isAuthenticate : 'you are gust';
const resultWithNulish = isAuthenticate ?? 'You are gust!';

// console.log({resultWithTernary, resultWithNulish})


// optional chaining

const user : {
    address: {
        city: string;
        town: string;
        postalCode? :string;
    };
} = {
    address: {
        city: 'Dhaka',
        town: 'Banani',

    }
}

const postalCode = user?.address?.postalCode;
console.log(postalCode)
