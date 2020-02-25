import React from 'react'
import classes from './Task_3_PLAYERS.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const TASK_3_PLAYER_1 = props => {
    return(
        <div className={classes.Task_3_PLAYERS}>
            <ul>
                <li>Введите рейтинг игрока</li>
                <Input
                    inputvalue={props.inputvalue1}
                    onChange={props.onChange1}
                ></Input>
                <Button type={'success'}
                    onClick={props.onClick1}
                >Set default rating</Button>  
                <li>Введите отклонение рейтинга</li>
                <Input
                    inputvalue={props.inputvalue2}
                    onChange={props.onChange2}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick2}
                >Set default RD</Button>
                <li>Введите исход матча</li>
                <Input
                    inputvalue={props.inputvalue3}
                    onChange={props.onChange3}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick3}
                >Set default Nones</Button>  
            </ul>
        </div>
    )
}

export default TASK_3_PLAYER_1