import React from 'react';
import cn from "classnames";
import Heading from "../Heading";

import s from './style.module.scss';
import {navigate} from "hookrouter";

export interface RootObject {
    name_clean: string;
    abilities: string[];
    stats: Stats;
    types: string[];
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    order: number;
    weight: number;
}
export interface Stats {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
}

const PokemonCard: React.FC<RootObject> = ({name, stats, types, id, img}) => {
    const handleClick = () => {
        navigate(`/pokedex/${id}`)
    }

    return (
        <div className={s.root} data-id={id} onClick={handleClick}>
            <div className={s.infoWrap}>
                <Heading tag={'h4'} classname={s.titleName}>{name}</Heading>
                <div className={s.statWrap}>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.attack}
                        </div>
                        Attack
                    </div>
                    <div className={s.statItem}>
                        <div className={s.statValue}>
                            {stats.defense}
                        </div>
                        Defense
                    </div>
                </div>
                <div className={s.labelWrap}>
                    {
                        types.map((item, index) => (
                            <span key={index} className={cn(s.label, item)}>{item}</span>
                        ))
                    }
                </div>
            </div>
            <div className={cn(s.pictureWrap, types[0])}>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export default PokemonCard;