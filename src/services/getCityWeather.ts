import axios from "axios";

const getCityWeather = async (cityName: string) => {
    const endpoint = process.env.REACT_APP_ENDPOINT;
    const apikey = process.env.REACT_APP_API_KEY;
    const params = {
        appid: apikey,
        q: cityName
    }

    const { data } = await axios.get(`${endpoint}`, { params });
    return data;
};

export default getCityWeather;
