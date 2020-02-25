import React from 'react'
import classes from './Task_3_PLAYERS.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const TASK_3_PLAYER_2 = props => {
    return(
        <div className={classes.Task_3_PLAYERS}>
            <ul>
                <li>Введите рейтинг игрока</li>
                <Input
                    inputvalue={props.inputvalue4}
                    onChange={props.onChange4}
                ></Input>
                <Button type={'success'}
                    onClick={props.onClick1}
                >Set default rating</Button>  
                <li>Введите отклонение рейтинга</li>
                <Input
                    inputvalue={props.inputvalue5}
                    onChange={props.onChange5}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick2}
                >Set default RD</Button>
                <li>Введите исход матча</li>
                <Input
                    inputvalue={props.inputvalue6}
                    onChange={props.onChange6}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick3}
                >Set default Nones</Button>  
            </ul>
        </div>
    )
}

export default TASK_3_PLAYER_2