import React from 'react'
import classes from './Task_3_PLAYERS.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const TASK_3_PLAYER_4 = props => {
    return(
        <div className={classes.Task_3_PLAYERS}>
            <ul>
                <li>Введите рейтинг игрока</li>
                <Input
                    inputvalue={props.inputvalue10}
                    onChange={props.onChange10}
                ></Input>
                <Button type={'success'}
                    onClick={props.onClick1}
                >Set default rating</Button>  
                <li>Введите отклонение рейтинга</li>
                <Input
                    inputvalue={props.inputvalue11}
                    onChange={props.onChange11}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick2}
                >Set default RD</Button>
                <li>Введите исход матча</li>
                <Input
                    inputvalue={props.inputvalue12}
                    onChange={props.onChange12}
                ></Input>
                <Button 
                    type={'success'}
                    onClick={props.onClick3}
                >Set default Nones</Button>  
            </ul>
        </div>
    )
}

export default TASK_3_PLAYER_4