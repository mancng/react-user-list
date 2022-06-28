export interface Doctor {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postcode: number;
    email: string;
    dob: string;
    age: number;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    avatar: string;
    speciality: string;
    yearsInPractice: number;
}

export interface OriginalDoctor {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        }
    };
    email: string;
    dob: {
        date: string;
        age: number;
    };
    phone: string;
    cell: string;
    id: {
        name: string;
        value: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    nat: string;
}