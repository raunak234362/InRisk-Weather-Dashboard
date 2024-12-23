/* eslint-disable no-unused-vars */
import { useState } from "react";
import {InputForm, Graph, Table, Loader} from "./components/index";
import Service  from "./api/api";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (inputs) => {
    setLoading(true);
    try {
      const data = await Service.fetchWeather(inputs);
      setWeatherData(data);
    } catch (error) {
      alert("Error fetching data!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Dashboard</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {weatherData && (
        <>
          <Graph data={weatherData} />
          <Table data={weatherData.daily} />
        </>
      )}
    </div>
  );
};

export default App;
