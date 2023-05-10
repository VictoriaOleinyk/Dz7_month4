import React, { useEffect, useState } from 'react'
import { getPokemonByName } from '../../api/getPokemons';
import {Link} from "react-router-dom";
const PokemonCard = ({ pokemon }) => {
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        getPokemonByName(pokemon.name)
            .then((data) => {
                setPokemonInfo(data)
            })
    }, [ pokemon.name ])
    return (
        <div className='pokemonCard'>
            <Link to={`/pokemon/${pokemon?.name}`}>
                <h2>{pokemon.name}</h2>
                <div className='img'>
                    <img src={pokemonInfo &&  pokemonInfo.sprites.other.dream_world.front_default} alt="" />
                </div>
            </Link>
        </div>
    )
}

export default PokemonCard