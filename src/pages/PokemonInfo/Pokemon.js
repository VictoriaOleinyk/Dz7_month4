import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { getPokemonByName } from '../../api/getPokemons';

const Pokemon = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const navigate = useNavigate()

    const back = () => navigate(-1)

    useEffect(() => {
        getPokemonByName(name)
            .then(res => setPokemon(res))
    }, [name]);

    if (!pokemon) {
        return <div>Loading...</div>;
    }

    // const { name: pokemonName, sprites = {}, abilities = [], height, weight } = pokemon;

    return (
        <div>
            <button onClick={back}>back</button>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt='' />
            <p>Abilities: </p>
            <p>Height: {pokemon?.height}</p>
            <p>Weight: {pokemon?.weight}</p>
        </div>
    );
};

export default Pokemon;