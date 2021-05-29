import React from 'react';
import cn from "classnames";
import Heading from "../Heading";

import s from './style.module.scss';
import {navigate} from "hookrouter";
import {IPokemons} from "../../interface/pokemons";

const PokemonCard: React.FC<IPokemons> = ({name, stats, types, id, img}) => {
    const handleClick = () => {
        navigate(`/pokedex/${id}`)
    }

    return (
        <div className={s.root} data-id={id} onClick={handleClick}>
            <div className={s.infoWrap}>
                <Heading size={'s'} className={s.titleName}>{name}</Heading>
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