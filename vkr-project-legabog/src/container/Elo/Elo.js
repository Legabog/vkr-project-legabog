import React from 'react'
import classes from './Elo.module.css'
import Task from '../../components/Task/Task'

class Elo extends React.Component {

    state = {
   
    }

    render() {

        return(
            <div className={classes.Elo}>
                <div>
                    <h1 style={{textAlign: 'center'}}>Расчёт рейтинга через Elo</h1>
                    <Task></Task>
                </div>
            </div>
        )
    }

}

export default Elo