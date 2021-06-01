import React, {useEffect} from 'react';
import useData from "../../hook/getData";
import {IPokemons} from "../../interface/pokemons";
import cn from 'classnames'

import s from './style.module.scss'
import Heading from "../../components/Heading";

export interface PokemonProps {
    id: string | number
}

const Pokemon: React.FC<PokemonProps> = ({id}) => {

    const {data, isLoading} = useData<IPokemons>('getPokemon', {id}, [])

    if (isLoading) {
        return (<div>Loading...</div>)
    }

    return data ? (
        <div className={s.root}>
            <div className={s.wrapper}>
                <span className={s.close}/>
                <div className={s.card}>
                    <div className={cn(s.image, data.types[0])}>
                        <img src={data.img} alt={data.name}/>
                        <div className={s.types}>
                            {
                                data.types.map((item, index) => (
                                    <span key={index} className={cn(s.label, item)}>{item}</span>
                                ))
                            }
                        </div>
                    </div>

                    <div className={s.text}>
                        <div className={s.title_row}>
                            <Heading size={'m'} className={cn(s.title, s.title_primary)}>{data.name}</Heading>
                            <div className={s.title_right}>
                                <Heading size={'s'} className={cn(s.title, s.title_secondary)}>Generation {data.order}</Heading>
                                <span className={s.title_id}>{data.id}</span>
                            </div>
                        </div>

                        <div className={s.info}>
                            <div className={cn(s.abilities, s.whiteBlock)}>
                                <p>Abilities</p>
                                <div className={s.abilities_items}>
                                    {
                                        data.abilities && data.abilities.map((item, index) => (
                                            <p key={index}>{item}<span className={s.divider}>&nbsp;-&nbsp;</span></p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={cn(s.health, s.whiteBlock)}>
                                <div className={s.progress}>
                                    <p>Healthy Points</p>
                                    <strong>{data.stats.hp}</strong>
                                </div>
                                <div className={s.progress}>
                                    <p>Experience</p>
                                    <strong>1 000 000</strong>
                                </div>
                            </div>
                            <div className={s.stats}>
                                <div className={cn(s.stats_block, s.whiteBlock)}>
                                    <p className={s.stats_number}>{data.stats.defense}</p>
                                    <p className={s.stats_text}>Defense</p>
                                </div>

                                <div className={cn(s.stats_block, s.whiteBlock)}>
                                    <p className={s.stats_number}>{data.stats.attack}</p>
                                    <p className={s.stats_text}>Attack</p>
                                </div>

                                <div className={cn(s.stats_block, s.whiteBlock)}>
                                    <p className={s.stats_number}>{data.stats["special-attack" as keyof typeof data.stats]}</p>
                                    <p className={s.stats_text}>Sp Attack</p>
                                </div>

                                <div className={cn(s.stats_block, s.whiteBlock)}>
                                    <p className={s.stats_number}>{data.stats["special-defense" as keyof typeof data.stats]}</p>
                                    <p className={s.stats_text}>Sp Defense</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Pokemon;