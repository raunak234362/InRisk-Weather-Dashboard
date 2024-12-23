import axios from "axios";

class Service {
  static async fetchWeatherApi(url, params) {
    try {
      const response = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      throw error;
    }
  }

  static processWeatherData(response) {
    try {
      const utcOffsetSeconds = response.utcOffsetSeconds;
      const hourly = response.hourly;

      // Helper function to form time ranges
      const range = (start, stop, step) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

      const weatherData = {
        hourly: {
          time: range(Number(hourly.time[0]), Number(hourly.timeEnd), hourly.interval).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
          ),
          temperature2m: hourly.variables[0].valuesArray,
        },
      };

      return weatherData;
    } catch (error) {
      console.error("Error processing weather data:", error);
      throw error;
    }
  }
}

export default Service;
