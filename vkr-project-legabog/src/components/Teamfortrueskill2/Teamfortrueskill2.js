import React from 'react'
import classes from './Teamfortrueskill2.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'

const Teamfortrueskill2 = props => {
    return(
        <div className={classes.Teamfortrueskill2}>
            <h3>Введите рейтинг команды</h3>
            <ul>
                <li>Рейтинг первого игрока</li>
                <Input 
                    inputvalue={props.inputvalue31}
                    onChange={props.onChange31}
                    
                ></Input>
                <li>Значение sigma первого игрока</li>
                <Input 
                    inputvalue={props.inputvalue32}
                    onChange={props.onChange32}
                ></Input> 
                <Button
                    type={'success'}
                    onClick={props.onClick31}
                >Set default rating</Button>
                <Button
                    type={'success'}
                    onClick={props.onClick32}
                >Set default sigma</Button>  
                <li>Рейтинг второго игрока</li>
                <Input 
                    inputvalue={props.inputvalue41}
                    onChange={props.onChange41}
                ></Input>
                <li>Значение sigma второго игрока игрока</li>
                <Input 
                    inputvalue={props.inputvalue42}
                    onChange={props.onChange42}
                ></Input>    
                <Button
                    type={'success'}
                    onClick={props.onClick41}
                >Set default rating</Button>
                <Button
                    type={'success'}
                    onClick={props.onClick42}
                >Set default sigma</Button>
            </ul>            
        </div>
    )
}

export default Teamfortrueskill2