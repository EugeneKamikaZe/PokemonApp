import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import s from './style.module.scss'

import {IPokemons} from "../../interface/pokemons";
import {configEndpoint} from "../../config";

import useData from "../../hook/getData";
import useDebounce from "../../hook/useDebounce";
import {getPokemonsTypes, getPokemonsTypesLoading, getTypesAction} from "../../store/pokemons";
import {getItemsAction, getPokemonsItems} from "../../store/pokemonsItem";

interface IQuery {
    name?: string,
    limit?: number,
}

const Pokedex: React.FC = () => {
    const dispatch = useDispatch()

    const types = useSelector(getPokemonsTypes)
    const isPokemonsLoading = useSelector(getPokemonsTypesLoading)
    console.log(types)

    const pokemons = useSelector(getPokemonsItems)
    console.log(pokemons)

    const [searchValue, setSearchValue] = useState('')
    const [query, setQuery] = useState<IQuery>({
        limit: 12
    })

    const debouncedValue = useDebounce(searchValue, 500)

    const {
        data,
        isLoading,
        isError,
    } = useData<IPokemons>(configEndpoint.getPokemons, query, [debouncedValue])

    useEffect(() => {
        dispatch(getTypesAction())
        dispatch(getItemsAction())
    }, [])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
        setQuery((state: IQuery) => ({
            ...state,
            name: e.target.value
        }))
    }

    if (isError) {
        return <div>Something went wrong</div>
    }

    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.search}>
                    <Heading size={'m'} className={s.title}>
                        {!isLoading && data && data.total} <strong>Pokemons</strong> for you to choose your favorite
                    </Heading>
                    <label>
                        <input className={s.input} type="text" name="name" placeholder="Encuentra tu pokémon..."
                               value={searchValue} onChange={handleSearchChange}/>
                    </label>
                </div>
                <div>
                    {
                        isLoading ? <>Loading</>: types?.map(item => <div>{item}</div>)
                    }
                </div>
                {/*<div>*/}
                {/*    {*/}
                {/*        isPokemonsLoading ? <>Loading</>: pokemons?.map(item => <div>{item}</div>)*/}
                {/*    }*/}
                {/*</div>*/}
                <div className={s.cards}>
                    {!isLoading && data && data.pokemons && data.pokemons.map(({name, stats, types, id, img}) =>
                        <PokemonCard key={id} name={name} stats={stats} types={types} img={img}/>)}
                </div>
            </Layout>
        </div>
    );
};

export default Pokedex;