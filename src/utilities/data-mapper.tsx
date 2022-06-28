import { Doctor, OriginalDoctor } from "../models/doctor-model";
import { generateRandomItem } from "../utilities/helpers";

var specialities = ["Internal medicine", "Pediatrics", "Sugery", "Family medicine", "Emergency medicine", "Dermatology", "Psychiatry", "Cardiology"];

var years = ["2", "3", "5", "8", "10", "12", "15", "22", "23", "26", "32"];

const DoctorListMapper = (docList: OriginalDoctor[]) => {
    let newDoctorList: Doctor[] = [];
    let generateId = 0;
    
    docList.forEach(d => {
        const newDoc = {
                id: generateId + 1,
                firstName: d.name.first,
                lastName: d.name.last,
                address: `${d.location.street.number} ${d.location.street.name}`,
                city: d.location.city,
                state: d.location.state,
                country: d.location.country,
                postcode: d.location.postcode,
                email: d.email,
                dob: d.dob.date,
                age: d.dob.age,
                picture: {
                    large: d.picture.large,
                    medium: d.picture.medium,
                    thumbnail: d.picture.thumbnail
                },
                avatar: d.picture.thumbnail,
                speciality: generateRandomItem(specialities),
                yearsInPractice: parseInt(generateRandomItem(years))
            } as Doctor

        generateId++
        newDoctorList.push(newDoc)
    })
    return newDoctorList;
}

export { DoctorListMapper }