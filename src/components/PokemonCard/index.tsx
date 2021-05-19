import React from 'react';
import cn from "classnames";
import Heading from "../Heading";

import s from './style.module.scss';
import {RootObject} from "../../pages/Pokedex";

const PokemonCard: React.FC<RootObject> = ({name, stats, types, id, img}) => {
    return (
        <div className={s.root} data-id={id}>
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
                        types.map((item, id) => (
                            <span key={id} className={cn(s.label, s[item as keyof typeof s])}>{item}</span>
                        ))
                    }
                </div>
            </div>
            <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
                <img src={img} alt={name}/>
            </div>
        </div>
    );
};

export default PokemonCard;