import React from 'react';

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

import s from './style.module.scss';

import {LinkEnum} from "../../routes";
import {navigate} from "hookrouter";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag={'h1'} ><strong>Find</strong> all your favorite <strong>Pokemon</strong></Heading>
                    <Heading tag={'h3'} >You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
                    <Button
                        onClick={() => navigate(LinkEnum.POKEDEX)}
                        buttonSize={'normal'}
                        buttonColor={'green'}>
                        See pokemons
                    </Button>
                </div>
                <div className={s.contentParallax}>
                    <Parallax/>
                </div>
            </Layout>
        </div>
    );
};

export default HomePage;