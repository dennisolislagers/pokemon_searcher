import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "../../frontend-react-pokemon_searcher/src/components/pokemon/Pokemon";
import Button from "../../frontend-react-pokemon_searcher/src/components/button/Button";

function App() {

//State maken om de gegevens op te slaan en de gegevens te veranderen bij het klikken van de button

    const [pokemonData, setPokemonData] = useState('');
    const [endPoint, setEndPoint] = useState("https://pokeapi.co/api/v2/pokemon");

//Lifecycle maken om de niet gebruikte gegevens weg te doen

    useEffect(() => {

//De asynchrone functie maken om de gegevens uit de api te halen

        async function fetchData() {
            try {
                const result = await axios.get(endPoint);
                console.log(result.data.results);
                setPokemonData(result.data)
            } catch (e) {
                console.error(e);
            }
        }
        fetchData()

    }, [endPoint])
    return (
        // <Pokemon endpoint={endPoint}/>
        <>
            <header>
                <Button
                    onClick={() => setEndPoint (pokemonData.previous)}
                    title="VORIGE"
                />
                <Button
                    onClick={() => setEndPoint (pokemonData.next)}
                    title="VOLGENDE"
                />
            </header>
            <div className="pokemon-container">
                {/*Checken of er inhoud aanwezig is die gevraagd wordt*/}
                {pokemonData && <>
                    {pokemonData.results.map((pokemon) => {
                        return (
                            <Pokemon key={pokemon.name} datapoint={pokemon.url} />
                        )
                    })}
                </>}
            </div>
        </>

    );
}

export default App;
