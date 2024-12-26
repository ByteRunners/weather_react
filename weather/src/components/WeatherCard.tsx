import React from "react";
import "../styles/App.css";

interface WeatherCardProps {
  temperature: number;
  condition: string;
  city: string;
  time: string;
  humidity: number;
  windSpeed: number;
  uvindex: number;
  airQuality: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  condition,
  city,
  time,
  humidity,
  windSpeed,
  uvindex,
  airQuality,
}) => {
  return (
    <section className="card">
      <div>{temperature}C</div>
      <div>{condition}</div>
      <div>
        <div>City:{city}</div>
        <div>Time:{time}</div>
        <div>Humidity:{humidity}%</div>
        <div>WindSpeed:{windSpeed}km/h</div>
        <div>Uv Index:{uvindex}</div>
        <div>Air Quality:{airQuality}</div>
      </div>
    </section>
  );
};

export default WeatherCard;
