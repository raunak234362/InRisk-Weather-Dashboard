import axios from "axios";

// export const fetchWeatherData = async ({ latitude, longitude, startDate, endDate }) => {
//   const API_URL = `https://api.open-meteo.com/v1/history?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&timezone=auto`;
//   const response = await axios.get(API_URL);
//   return response.data;
// };

class Service {
  static async fetchWeather({ latitude, longitude, startDate, endDate }) {
    console.log(latitude, longitude, startDate, endDate);
    try {
      const response = await axios.get(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m`
        // `https://api.open-meteo.com/v1/history?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&timezone=auto`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Service;
