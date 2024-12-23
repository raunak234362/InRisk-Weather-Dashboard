import Service from "../../api/api";
import {Input} from "../index";
import { useForm } from "react-hook-form";
const InputForm = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async(inputData) => {
    console.log(inputData);
    try {
        const data = await Service.fetchWeather(inputData);
        // setWeatherData(data);
        console.log(data);
      } catch (error) {
        alert("Error fetching data!",error);
      } 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 bg-gray-100 rounded">
      <Input
        type="text"
        placeholder="Latitude"
        label="Latitude"
        {...register("latitude")}
        className="p-2 border rounded"
        required
      />
      <Input
        type="text"
        placeholder="Longitude"
        label="Longitude"
        {...register("longitude")}
        className="p-2 border rounded"
        required
      />
      <Input
        type="date"
        placeholder="Start Date"
        label="Start Date"
        {...register("startDate")}
        className="p-2 border rounded"
        required
      />
      <Input
        type="date"
        placeholder="End Date"
        label="End Date"
        {...register("endDate")}
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Fetch Weather
      </button>
    </form>
  );
};

export default InputForm;
