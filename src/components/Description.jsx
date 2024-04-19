import React from 'react';
import './description.css';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

const Description = ({ weather, units }) => {
  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: units === 'metric' ? weather.temp_min.toFixed() : ((weather.temp_min * 9) / 5 + 32).toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: units === 'metric' ? weather.temp_max.toFixed() : ((weather.temp_max * 9) / 5 + 32).toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: 'feels like',
      data: units === 'metric' ? weather.feels_like.toFixed() : ((weather.feels_like * 9) / 5 + 32).toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: weather.pressure,
      unit: 'hPa',
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'humidity',
      data: weather.humidity,
      unit: '%',
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'wind speed',
      data: units === 'metric' ? weather.speed.toFixed() : (weather.speed * 2.23694).toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className='section section__descriptions'>
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className='card'>
          <div className='description__card-icon'>
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
