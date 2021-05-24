import React, {useEffect, useState} from 'react';
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";

import s from './style.module.scss'
import PokemonCard, {RootObject} from "../../components/PokemonCard";
import req from "../../utils/request";

interface Items {
    total: string,
    count: number,
    pokemons: RootObject[]
}

const usePokemons = () => {
    const [data, setData] = useState<Items>({} as Items)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const getPokemons = async () => {
            setIsLoading(true)

            try {
                const result = await req('getPokemons')

                setData(result)
            } catch (e) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getPokemons()
    }, [])

    return {
        data,
        isLoading,
        isError,
    }
}

const Pokedex: React.FC = () => {

    const {
        data,
        isLoading,
        isError,
    } = usePokemons()

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Something went wrong</div>
    }

    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.search}>
                    <Heading tag={'h3'} classname={s.title}>
                        {data.total} <strong>Pokemons</strong> for you to choose your favorite
                    </Heading>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                </div>
                <div className={s.cards}>
                    {
                        data.pokemons.map((item) => <PokemonCard key={item.id} {...item} />)
                    }
                </div>
            </Layout>
            {/*TO DO fix*/}
        </div>
    );
};

export default Pokedex;