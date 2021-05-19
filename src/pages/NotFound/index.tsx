import React from 'react';
import Button from '../../components/Button';

import s from './style.module.scss'
import {navigate} from "hookrouter";

import Team from './assets/Team_Rocket_trio_OS 1.png'
import {LinkEnum} from "../../routes";

const NotFound = () => {
    return (
        <div className={s.root}>
           <div className={s.wrap}>
               <div className={s.text}>
                   404
               </div>
               <div className={s.layer}>
                   <img src={Team} alt="Team Rocket"/>
                   <div className={s.subTitle}>
                       <span>The rocket team</span> has won this time.
                   </div>
                   <Button
                       onClick={() => navigate(LinkEnum.HOME)}
                       buttonColor={'yellow'}
                       buttonSize={'normal'}>
                       Home
                   </Button>
               </div>
           </div>
        </div>
    );
};

export default NotFound;