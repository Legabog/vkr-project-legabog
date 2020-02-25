import React from 'react'
import classes from '../Results3/Results3.module.css'

const Results3 = props => {
    return(
        <div className={classes.Results3}>
            <h3>Показатель q:</h3>
            <p>{props.valueq}</p>
            <hr/>
            <h3>Показатели gj:</h3>
            <h4>gj1:</h4>
            <p>{props.resultgj1}</p>
            <h4>gj2:</h4>
            <p>{props.resultgj2}</p>
            <h4>gj3:</h4>
            <p>{props.resultgj3}</p>
            <h4>gj4:</h4>
            <p>{props.resultgj4}</p>
            <hr/>
            <h3>Показатели Ej:</h3>
            <h4>E1:</h4>
            <p>{props.resultE1}</p>
            <h4>E2:</h4>
            <p>{props.resultE2}</p>
            <h4>E3:</h4>
            <p>{props.resultE3}</p>
            <h4>E4:</h4>
            <p>{props.resultE4}</p>
            <hr/>
            <h3>Показатель d2:</h3>
            <p>{props.resultd2}</p>
            <hr/>
            <h3>RD`:</h3>
            <p>{props.resultRD}</p>
            <hr/>
            <h3>Результирующий рейтинг:</h3>
            <p>{props.resultvalue}</p>
            <hr/>
        </div>
    )
}

export default Results3