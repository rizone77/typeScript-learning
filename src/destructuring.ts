// object  destructuring 
// array destructuring


const user = {
    id: 123,
    name: {
        firstName: 'Md Rizone',
        middleName: 'Ahmed',
        lastName: 'Rakib'
    },
    gender: 'male',
    favoriteColor :'black'
}

// const myFavouriteColor = user.favoriteColor
// const MyMiddleName = user.name.middleName


const { favoriteColor, name: {middleName : MyMiddleName} } = user;
// console.log(MyMiddleName)


const friends = ['karim', 'rahim', 'mahim']

// const myBestFriend = friends[1];
const [A,myBestFriend,C] = friends
console.log(myBestFriend)