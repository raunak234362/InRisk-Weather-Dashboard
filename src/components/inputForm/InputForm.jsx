import Service from "../../api/api";
import {Input} from "../index";
import { useForm } from "react-hook-form";
const InputForm = () => {
  const {register, handleSubmit} = useForm();

  const onSubmit = async(inputs) => {
    try {
        const data = await Service.fetchWeather(inputs);
        // setWeatherData(data);
        console.log(data);
      } catch (error) {
        alert("Error fetching data!",error);
      } finally {
        // setLoading(false);
      };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4 bg-gray-100 rounded">
      <Input
        type="number"
        placeholder="Latitude"
        label="Latitude"
        {...register("latitude")}
        className="p-2 border rounded"
        required
      />
      <Input
        type="number"
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
