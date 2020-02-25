import React from 'react'
import classes from './Glicko.module.css'
import TASK_3 from '../../components/Task_3/Task_3'

class Glicko extends React.Component {
    state = {

    }

    render() {
        return(
            <div className={classes.Glicko}>
                <div>
                    <h1 style={{textAlign: 'center'}}>Расчёт рейтинга через Glicko</h1>
                    <TASK_3/>
                </div>
               
            </div>
        )
    }
}

export default Glicko