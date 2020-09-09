import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '42f43db229167bf2380b0111e93868ca';

export const FetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metrics',
            APPID: API_KEY,
        }
    });
    return data;
}

