import React, { useState } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


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
  const [selectedOption, setSelectedOption] = useState<string>("today");
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <section className="card">
      <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search for places" className="search-input" />
      </div>
      <div className="options">
        {["Today", "Week", "Month"].map((option) => (
          <span
            key={option}
            className={`option ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </span>
        ))}
      </div>
      <div>{temperature}°C</div>
      <div>{condition}</div>
      <div>
        <div>City: {city}</div>
        <div>Time: {time}</div>
        <div>Humidity: {humidity}%</div>
        <div>Wind Speed: {windSpeed} km/h</div>
        <div>UV Index: {uvindex}</div>
        <div>Air Quality: {airQuality}</div>
      </div>
    </section>
  );
};

export default WeatherCard;
