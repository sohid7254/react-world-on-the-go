import React, { useState } from 'react';
import './countri.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const [visited, setVisited] = useState(false);

    const handleClicked = () => {
        // Bassic Operator
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // Second MEthod
        // setVisited(visited ? false ; true);

        setVisited(!visited);
        handleVisitedCountries(country);
    };
    return (
        // Conditionally class added
        // <div className={`countri ${visited? "countri-visited": "countri-not-visited"}`}>
        <div className={`countri ${visited && "countri-visited"}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>
                Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}
            </p>
            <p>Language: {Object.values(country.languages.languages).join(", ")}</p>
            <p>Region: {country.region.region}</p>
            {Object.values(country.currencies.currencies).map((currency, index) => (
                <div key={index}>
                    <p>
                        Currency: {currency.name}, Symble: {currency.symbol}
                    </p>
                </div>
            ))}
            <button onClick={handleClicked}>{visited ? "Visited" : "Not Visited"}</button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;