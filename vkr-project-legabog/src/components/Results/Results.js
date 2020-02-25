import React from 'react'
import classes from './Results.module.css'

const Results = props => {
    return (
        <div className={classes.Results}>
            <h3>Побеждает первый игрок</h3>
    <p>Рейтинг первого игрока становится: <strong>{props.resultValue1}</strong></p>
    <p>Рейтинг второго игрока становится: <strong>{props.resultValue2}</strong></p>
            <h3>Побеждает второй игрок</h3>
    <p>Рейтинг второго игрока становится: <strong>{props.resultValue3}</strong></p>
    <p>Рейтинг первого игрока становится: <strong>{props.resultValue4}</strong></p>
            <h3>Ничья</h3>
            <p>Рейтинг первого игрока становится: <strong>{props.resultValue5}</strong></p>
            <p>Рейтинг второго игрока становится: <strong>{props.resultValue6}</strong></p>  
        </div>
        
    )
}

export default Results