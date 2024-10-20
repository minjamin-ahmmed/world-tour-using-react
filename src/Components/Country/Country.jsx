import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {

    console.log(country)

    const {name, flags, capital, population, region, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisitedButton = () => {
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)

    return (
        <div className={`country ${visited? 'visited' : 'country'}`} >

            <h3>Name of the Country: {name.common} </h3>
            <img style={{borderRadius: '15px'}} src={flags.png} alt="" />
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Country Code: {cca3} </p>


            <button>{visited?"Already Visited" : "Going Soon"}</button>
            {/* <div>
            {visited?'I have Visited this Country' : 'I want to Visit'}
            </div> */}

            <br />
            <br />
            <button onClick={handleVisitedButton} >Mark as Visited</button>
            
        </div>
    );
};

export default Country;