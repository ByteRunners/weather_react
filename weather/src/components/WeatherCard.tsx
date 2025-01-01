import React, { useState } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import WeekWeather from "./WeekWeather";



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
  // const [currentDate, setCurrentDate] = useState<string>("");
  const currentDate = new Date().toLocaleDateString("en-YE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const weekData = [
    { day: "Mon", icon: faSun, temperature: 15 },
    { day: "Tue", icon: faCloud, temperature: 17 },
    { day: "Wed", icon: faCloudRain, temperature: 14 },
    { day: "Thu", icon: faSun, temperature: 18 },
    { day: "Fri", icon: faCloud, temperature: 16 },
    { day: "Sat", icon: faCloudRain, temperature: 13 },
    { day: "Sun", icon: faSun, temperature: 19 },
  ];
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

      {selectedOption === "Today" && (
        <div className="temperature-wrapper">
          <div className="temperature"></div>
        </div>
      )}

      {selectedOption === "Week" && <WeekWeather weekData={weekData} />}

        <div className="temperature">
        </div>
        <div className="temperature-options">
          <span className="degree-toggle">°C</span> | <span className="degree-toggle">°F</span>
        </div>
        <div className="profile-circle">
          <img src="\src\assets\f.jpg" alt="Profile" className="profile-image" />
        </div>
        <div className="sun-image">
        <img src="\src\assets\1.png" alt="sun " className="sun-image" />
        </div>
        <div className="temp">
        {temperature}°C
      </div>
      <div className="date-time">
        {currentDate}
      </div>
      <hr className="divider" />
      <div className="weather-condition-wrapper">
        <div className="weather-condition">
          <div className="condition-item">
            <FontAwesomeIcon icon={faCloud} className="weather-icon" />
            <span className="condition-text">Mostly Cloudy</span>
          </div>
          <div className="condition-item">
            <FontAwesomeIcon icon={faCloudRain} className="weather-icon" />
            <span className="condition-text">Rain -30%</span>
          </div>
        </div>
      </div>
      


      

      {/* <div>{temperature}°C</div>
      <div>{condition}</div>
      <div>
        <div>City: {city}</div>
        <div>Time: {time}</div>
        <div>Humidity: {humidity}%</div>
        <div>Wind Speed: {windSpeed} km/h</div>
        <div>UV Index: {uvindex}</div>
        <div>Air Quality: {airQuality}</div>
      </div> */}
    </section>
  );
};

export default WeatherCard;
