import React from 'react';

interface CurrentWeather {
  uvindex: number;
  windSpeed: number;
  sunrise: string;
  sunset: string;
  humidity: number;
  visibility: string;
  airQuality: string;
}

interface HighlightsProps {
  currentWeather: CurrentWeather;
}

const Highlights: React.FC<HighlightsProps> = ({ currentWeather }) => {
  return (
    <div className="highlights">
      <h2>Today's Highlights</h2>
      <div className="highlights-grid">
        <div className="highlight-item">
          <span>UV Index</span>
          <span>{currentWeather.uvindex}</span>
        </div>
        <div className="highlight-item">
          <span>Wind Status</span>
          <span>{currentWeather.windSpeed} km/h</span>
        </div>
        <div className="highlight-item">
          <span>Sunrise & Sunset</span>
          <span>{currentWeather.sunrise} / {currentWeather.sunset}</span>
        </div>
        <div className="highlight-item">
          <span>Humidity</span>
          <span>{currentWeather.humidity}%</span>
        </div>
        <div className="highlight-item">
          <span>Visibility</span>
          <span>{currentWeather.visibility}</span>
        </div>
        <div className="highlight-item">
          <span>Air Quality</span>
          <span>{currentWeather.airQuality}</span>
        </div>
      </div>
    </div>
  );
};

export default Highlights;