// spread operator


const friends = ['Rohim', 'karim']

const schoolFriends = ['pintu', 'chintu', 'bulbul'];

const collageFriends = ["Mr. Smart", "Mr very very smart"]

friends.push(...schoolFriends);
friends.push(...collageFriends)

// console.log(friends)

const user = {
    name: "Mezba", PhoneNo: '0406147337'
};

const otherInfo = {hobby: 'outing', favouriteColor: "Black"};

const useInfo = {...user, ...otherInfo}

// console.log(useInfo)

// rest operator

const sendInvite = (...friends: string[]) => {
   friends.forEach((friend: string) => console.log(`Send invaitation to ${friend}`))
}

sendInvite('pintu', 'chintu', 'bulbul', 'rakib md rizone ahmed')