import React, { useState, useEffect } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

import CreateRow from './Row.js';

const Search = () => {
    const [information, setInformation] = useState({
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        homeworld: "",
        starships: [],
    });

    const [formValue, setFormValue] = useState("");
    const [isLoading, setLoading] = useState(false);

    const getHomeworld = (homeworld) => {
        fetch(homeworld, {
            method: 'GET',
          })
          .then((res) => res.json())
          .then((data) => {
            setInformation((information) => ({
                ...information, 
                homeworld: data.name
            }));
            setLoading(false);
          })
          .catch((err) => console.log("Unable to fetch data"))
    }

const getStarships = (starshipsUrl) => {
    Promise.all(
        starshipsUrl.map(url =>
            fetch(url)
            .then(res => res.json())
            .then(res => res.name))
    ).then(name => {
        setInformation((information) => ({
            ...information,
            starships: name
        }))
    })
}

    const fetchInformation = (value) => {
      setLoading(true);
      fetch('https://swapi.dev/api/people/' + value, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((information) => {
        setInformation({
            name: information.name,
            height: information.height,
            mass: information.mass,
            hair_color: information.hair_color,
            homeworld: getHomeworld(information.homeworld),
            starships: getStarships(information.starships)
        });
      })
      .catch((err) => console.log("Unable to fetch data"))
    }
    
    const onSubmit = function(event) {
      event.preventDefault();
      fetchInformation(formValue);
    }
  
    return (
      <div>
        <form className="searchbar" onSubmit={onSubmit}>
            <input
            placeholder="Insert number from 1 to 82"
            type="text"
            value={formValue}
            onChange={e => setFormValue(e.target.value)}
            />
            <button
            type="submit"
            className="SearchButton">
            Search
            </button>
        </form>
        {isLoading ? <Loader className="loading" type="ThreeDots" color="#FFE81F" height={100} width={100} /> : CreateRow(information)}
      </div>
    );
  }
  
  export default Search