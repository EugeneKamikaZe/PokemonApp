import React, {useEffect, useState} from 'react';
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";
import useData from "../../hook/getData";

import s from './style.module.scss'

import {IPokemons} from "../../interface/pokemons";
import useDebounce from "../../hook/useDebounce";
import stringToCapitalize from "../../utils/stringToCapitalize";

interface IQuery {
    name?: string,
    limit?: number,
}

const Pokedex: React.FC = () => {
    const [searchValue, setSearchValue] = useState('')
    const [query, setQuery] = useState<IQuery>({
        limit: 12
    })

    const debouncedValue = useDebounce(searchValue, 500)

    const {
        data,
        isLoading,
        isError,
    } = useData<IPokemons>('getPokemons', query, [debouncedValue])

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
                        <input className={s.input} type="text" name="name" placeholder="Encuentra tu pokémon..." value={searchValue} onChange={handleSearchChange}/>
                    </label>
                </div>
                <div className={s.cards}>
                    {!isLoading && data && data.pokemons.map((item) => <PokemonCard key={item.id} {...item} />)}
                </div>
            </Layout>
        </div>
    );
};

export default Pokedex;