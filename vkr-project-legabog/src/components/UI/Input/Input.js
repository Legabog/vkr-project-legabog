import React from 'react'
import classes from '../Input/Input.module.css'



const Input = props => {
    
    const cls = [classes.Input]

    return (
        <div className={cls.join(' ')}>
            <input 
            // className={cls.push('invalid')}
            onChange={props.onChange}
            value={props.inputvalue}
            />
            
        </div>
    )
}

export default Input