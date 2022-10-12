import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './GameSquare.module.css';

export function GameSquare({squareNumber}) {


    return(
        <>
            <div className={styles.square}>
                {squareNumber}
            </div>
        </>
    )
}