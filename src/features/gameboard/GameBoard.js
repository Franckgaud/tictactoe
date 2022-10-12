import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './GameBoard.module.css';


export function GameBoard() {
    const [ currentPlayer, setCurrentPlayer ] = useState("X")
    const [ gameResult, setGameResult ] = useState()
    const [boardState, setBoardState] = useState([
    {id:0,
    value:"",
    clicked:false},
    {id:1,
    value:"",
    clicked:false},
    {id:2,
    value:"",
    clicked:false},
    {id:3,
    value:"",
    clicked:false},
    {id:4,
    value:"",
    clicked:false},
    {id:5,
    value:"",
    clicked:false},
    {id:6,
    value:"",
    clicked:false},
    {id:7,
    value:"",
    clicked:false},
    {id:8,
    value:"",
    clicked:false}])


    const clickSquare = (squareNumber) => {

        if(boardState[squareNumber].clicked === false){
            setBoardState(
                boardState.map((square) =>{
                    return square.id === squareNumber?{...square, value:currentPlayer, clicked:true}: {...square}
                })
            )
            changePlayer()
        }
    }
    const changePlayer = () =>{
        if(currentPlayer === "X"){
            setCurrentPlayer("O")
        }if(currentPlayer === "O"){
            setCurrentPlayer("X")

        }
    }
    const checkMatchConclusion = () =>{

    }

    return (
        <>
            <section className="top-section">
                <h1>Tic Tac Toe</h1>
                <h1>{}</h1>
                <h2>It's {currentPlayer}'s turn</h2>
            </section>
            <section className="gameboard-section">
                <div className={styles.row} >
                    <button onClick={() => clickSquare(0)}>{boardState[0].value}</button>
                    <button onClick={() => clickSquare(1)}>{boardState[1].value}</button>
                    <button onClick={() => clickSquare(2)}>{boardState[2].value}</button>
                </div>
                <div className={styles.row}>
                    <button onClick={() => clickSquare(3)}>{boardState[3].value}</button>
                    <button onClick={() => clickSquare(4)}>{boardState[4].value}</button>
                    <button onClick={() => clickSquare(5)}>{boardState[5].value}</button>
                </div>
                <div className={styles.row}>
                    <button onClick={() => clickSquare(6)}>{boardState[6].value}</button>
                    <button onClick={() => clickSquare(7)}>{boardState[7].value}</button>
                    <button onClick={() => clickSquare(8)}>{boardState[8].value}</button>   
                </div>         
            </section>
            
        </>
    )
}