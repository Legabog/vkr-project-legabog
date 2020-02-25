import React from 'react'
import classes from './Teamfortrueskill.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const Teamfortrueskill = props => {
    return(
        <div className={classes.Teamfortrueskill}>
            <h3>Введите рейтинг команды</h3>
            <ul>
                <li>Рейтинг первого игрока</li>
                <Input 
                    inputvalue={props.inputvalue11}
                    onChange={props.onChange11}
                    
                ></Input>
                <li>Значение sigma первого игрока</li>
                <Input 
                    inputvalue={props.inputvalue12}
                    onChange={props.onChange12}
                ></Input> 
                <Button
                    type={'success'}
                    onClick={props.onClick11}
                >Set default rating</Button>
                <Button
                    type={'success'}
                    onClick={props.onClick12}
                >Set default sigma</Button>  
                <li>Рейтинг второго игрока</li>
                <Input 
                    inputvalue={props.inputvalue21}
                    onChange={props.onChange21}
                ></Input>
                <li>Значение sigma второго игрока игрока</li>
                <Input 
                    inputvalue={props.inputvalue22}
                    onChange={props.onChange22}
                ></Input>    
                <Button
                    type={'success'}
                    onClick={props.onClick21}
                >Set default rating</Button>
                <Button
                    type={'success'}
                    onClick={props.onClick22}
                >Set default sigma</Button>
            </ul>            
        </div>
    )
}

export default Teamfortrueskill