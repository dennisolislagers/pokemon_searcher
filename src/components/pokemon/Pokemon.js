import React, { useEffect, useState } from 'react';
import axios from "axios";

function Pokemon ({datapoint}) {

    const[pokemonData, setPokemonData] = useState ('');

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(datapoint);
                console.log(result.data);
                setPokemonData(result.data)
            } catch (e) {
                console.error(e);
            }
        }

        fetchData()
    }, [datapoint])

    return (
        <div className="pokemon-items">
            {/*Checken met Sate of er data in pokemonData zit zodat er geen foutmelding krijgt bij het renderen, checken komt vaak voor bij life cycle, vervolgens de elementen bundelen in 1 Fragment element*/}
            {pokemonData && <>
                <h1>{pokemonData.name}</h1>
                <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <p>Heigth: {pokemonData.height} inches</p>
                <p>Weigth: {pokemonData.weight} ounces</p>

                <h3>Abilities:</h3>

                {/*Omdat de gegevens die we willen hebben 'te diep' staan moeten we de map methode gebruiken om de gegevens te kunnen zien*/}
                {pokemonData.abilities.map((pokemon) => {
                    return (
                        //een <li> element maken waar de gegevens in komen te staan
                        <li>
                            {pokemon.ability.name}
                        </li>
                    )
                })}
            </> }
        </div>
    );
}
export default Pokemon;