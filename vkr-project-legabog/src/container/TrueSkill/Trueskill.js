import React from 'react'
import classes from './Trueskill.module.css'
import TASK_2 from '../../components/Task_2/Task_2'

class Trueskill extends React.Component {
    state = {
    
   
    }

    render() {
        return(
            <div className={classes.Trueskill}>
                <div>
                    <h1 style={{textAlign: 'center'}}>Расчёт рейтинга через Trueskill</h1>
                    <TASK_2/>
                </div>
            </div>
        )
    }    
}

export default Trueskill