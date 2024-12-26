import React from "react";

interface WeatherCardProps {
    temperature: number;
    condition:string;
    city:string;
    time:string;
    humidity:number;
    windSpeed:number;
    uvindex:number;
    airQuality: string;
                                                
}

const WeatherCard:React.FC<WeatherCardProps> = ({
    temperature,
    condition,
    city,
    time,
    humidity,
    windSpeed,
    uvindex,
    airQuality
}) => {
    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <div className="text-3xl font-bold">{temperature}C</div>
            <div className="text-gray-500">{condition}</div>
            <div className="mt-4">
                <div>City:{city}</div>
                <div>Time:{time}</div>
                <div>Humidity:{humidity}%</div>
                <div>WindSpeed:{windSpeed}km/h</div>
                <div>Uv Index:{uvindex}</div>
                <div>Air Quality:{airQuality}</div>

            </div>
        </div>
    );
};

export default WeatherCard;