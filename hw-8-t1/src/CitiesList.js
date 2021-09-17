import React, {useState} from "react";

export default function CitiesList(props) {
    const [cities, setCities] = useState([
        { name: 'Москва', description: "Столица России" },
        { name: 'Зеленоград', description: "Научный спутник Москвы" },

    ]);

    return (
        <ul>
            {cities.map(city =>(
                <li key={city.name}>{city.name} ({city.description})</li>
            ))}
        </ul>
    )
}
