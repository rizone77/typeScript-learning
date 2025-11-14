// key of : type operator

type RichPeoplesVehicle = {
    car: string; // key: value
    bike: string;
    cng: string;
}

type MyVehicle1 = 'bike' | 'car' | 'cng';

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = 'bike';


type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}


const user  : User = {
    id: 222, // key: value
    name: 'Mezba',
    address: {
        cuty: 'ctg'
    }
}

// const myname = user.name;
// const myId = user['id'];
// const myname = user['name']
// const address = user['address']

// console.log({myId, myname, address})



const getPropertryFromObj = <X> (obj: X, key: keyof X) => {
    return obj[key]
}

// const result1 = getPropertryFromObj(user, 'emni')
// console.log(result)

const product = {
    brand: 'HP'
}


const student = {
    id: 123,
    class: 'four'
}



const result2 = getPropertryFromObj(product, 'brand');
const result3 = getPropertryFromObj(student,'id')
