import React from "react";
import style from '../styles/welcome.module.css'


export default function Welcome() {
    return (
        <div className={style.welcomeContainer}>
        <h1>Welcome!</h1>
        <p>We're working hard to get clubhouse ready for everyone! While we wrap up the finishing touches, we're adding people gradually</p>
        <div className={style.WelcomeInfo}>
            <p>
            Anyone can join with an invite from an exisiting user or reserve your username and we'll text you if you have a friend on the app who can let you in. 
            we are so grateful you're here and can't wait to have you join !
            </p>
            <p>The ClubHouse team</p>
        </div>
        </div>
    );
}

