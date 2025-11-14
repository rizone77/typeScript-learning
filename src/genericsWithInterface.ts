


interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;


    };

    smartWatch: T;
    bike?: X
}

interface BrandCharaWatch  {
    heartRate: string;
    stopWatch: boolean;

}

interface AppleWtch {
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}




const poorDeveloper : Developer<BrandCharaWatch, {brand:'Yamaha',  engineCapacity: '200c'}> = {
    name:'Mr Poor',
    salary: 20,
    device: {

       brand: 'lenevo',
       model: 'A21',
       releasedYear: '2010'

    },
    smartWatch: {
        heartRate: '200',
        stopWatch: true,
    }

}

const richDeveloper : Developer<AppleWtch> = {
    name:'Mr Rich',
    salary: 20,
    device: {

       brand: 'HP',
       model: 'A34',
       releasedYear: '2050'

    },
    smartWatch: {
        heartRate: '200',
        callSupport: true,
       calculator: true,
       AiFeature: true
    },
    bike: null

}