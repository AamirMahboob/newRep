import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Loc = () => {
  const [locations, setLocations] = useState('');
  const [weather, setWeather] = useState({});
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=1c592dbd3144dab2c347db42b7273635`
      );
      console.log(res.data)
      setWeather(res.data);

      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${locations}&client_id=07J2X2gWE7ekpmC5yaR_ND7l20Iw8CE4GHpO3mFJA5o`
      );
      setPhotos(response.data.results);
    } catch (error) {
      alert('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter location"
        className=" border-[5px]"
        value={locations}
        onChange={(e) => setLocations(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
      <p className="temp">Current Temperature: {weather?.main?.temp ? `${(weather.main.temp - 273.15).toFixed(2)} °C` : 'Loading...'}</p>
      {photos.length > 0 && <img src={photos[0]?.urls?.regular} width={200} height={500} alt="Location" />}
      <p>Humidity: {weather.main.humidity}</p>
      <p>Humidity: {weather.main.pressure}</p>
      <p>Humidity: {weather.main.seaLevel}</p>
    </div>
  );
};

export default Loc;
