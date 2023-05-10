import React, {useEffect, useState} from 'react'
import {Pagination, PokemonCard} from "../../components";
import {fetchPokemons} from "../../api/getPokemons";
const MainPage = () => {
    const [ pokemonList, setPokemonList ] = useState([])
    const [ offset, setOffset ] = useState(1);

    const [ count, setCount ] = useState(1);

    const [ page, setPage ] = useState(1);



    const limit = 10;


    useEffect(() => {
        fetchPokemons({ limit, offset}).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [ offset ])


    const handleNext  = ( ) => {
        if(page === count) return
        setOffset(prev => prev + limit);
        setPage(prev => prev + 1)
    }

    const handlePrev = () => {
        if(page === 1) return
        setOffset(prev =>  prev - limit);
        setPage(prev => prev - 1)
    }
    return (
        <div>
            <Pagination
                page={page}
                count={count}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
            <div className='pokemonList'>
                {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </div>
        </div>
    )
}

export default MainPage