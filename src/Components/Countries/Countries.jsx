import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountries(data)
        )
    }, [])



    const handleVisitedCountry = (country) => {
        console.log("Add this to visited Country");
        
        // console.log(country);
        
    }


    return (
        <div>
            <h2>Total Countries: {countries.length} </h2>
            <div>
                <h2>Total Visited Countries: </h2>
                <div>

                </div>
            </div>
            <div className="countries-container">
            {
                countries.map(country => <Country 
                    key={country.cca2}  
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}

                    >
                    </Country>)
            }
            </div>

            
            
        </div>
    );
};

export default Countries;