import axios from "axios";

const getDoctorList = () => {
    let config = {
        method: "GET",
        url: `https://randomuser.me/api/?results=50&nat=us&exc=login,registered&fmt=json&seed=${process.env.SEED}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return axios(config)
        .then((result) => {
            return result.data
        })
        .catch();
}
export { getDoctorList };