import axios from "axios";


class Service {
  static async fetchWeather({ latitude, longitude, startDate, endDate }) {
    console.log(latitude, longitude, startDate, endDate);
    try {
      const response = await axios.get(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Service;
