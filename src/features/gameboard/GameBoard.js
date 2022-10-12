import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GameSquare } from '../gamesquare/GameSquare'
import styles from './GameBoard.module.css';


export function GameBoard() {


    return (
        <>
            <section class="top-section">
                <h1>Tic Tac Toe</h1>
            </section>
            <section class="gameboard-section">
                <div className={styles.row}>
                    <GameSquare squareNumber="square-1"/>
                    <GameSquare squareNumber="square-2"/>
                    <GameSquare squareNumber="square-3"/>
                </div>
                <div className={styles.row}>
                    <GameSquare squareNumber="square-4"/>
                    <GameSquare squareNumber="square-5"/>
                    <GameSquare squareNumber="square-6"/>
                </div>
                <div className={styles.row}>
                    <GameSquare squareNumber="square-7"/>
                    <GameSquare squareNumber="square-8"/>
                    <GameSquare squareNumber="square-9"/>   
                </div>         
            </section>
            
        </>
    )
}