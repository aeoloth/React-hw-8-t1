import React, { useState } from "react";

export default function City(props) {
  const [cities, setCities] = useState([
    { name: "Москва", description: "Столица России" },
    { name: "Зеленоград", description: "Научный спутник Москвы" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const city = cities[currentIndex];

  const handlerChange = (e) => {
    setCities(
      cities.map((city, index) => {
        if (index === currentIndex) {
          return {
            ...city,
            description: e.target.value,
          };
        }
        return city;
      })
    );
  };

  return (
    <div>
      <h3>{city.name}</h3>
      <textarea value={city.description} onChange={handlerChange} />
    </div>
  );
}
