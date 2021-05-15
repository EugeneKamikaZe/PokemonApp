import React from 'react';

import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

import s from './style.module.scss';
import Parallax from "../../components/Parallax";
import Heading from "../../components/Heading";

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header/>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <Heading tag={'h1'} ><strong>Find</strong> all your favorite <strong>Pokemon</strong></Heading>
                    <Heading tag={'h3'} >You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
                    <Button onClick={() => console.log('Click')} buttonSize={'normal'} buttonColor={'green'}>
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