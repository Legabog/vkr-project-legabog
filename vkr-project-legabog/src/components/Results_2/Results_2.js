import React from 'react'
import classes from './Results.module.css'

const RESULTS_2 = props => {
    return(
        <div className={classes.Results_2}>
            {/* <Button type={'success'}
            >Подсчитать первый уровень performance</Button>
            <Button type={'cleanup'}
            >Отчистить все поля ввода рейтинговых значений</Button> */}
            <h3>Первый уровень подсчета показателей силы игроков Pi (performance) : </h3>
            <h4>First Property : p11</h4>
            <h4>Second Property : {props.valuesp11 === '' ? 0 : props.valuesp11} </h4>
            <h4>Third Property : {props.valuetp11 === 0 ? 0 : props.valuetp11} </h4>
            <hr/>
            <h4>First Property : p12</h4>
            <h4>Second Property : {props.valuesp12 === '' ? 0 : props.valuesp12}</h4>
            <h4>Third Property : {props.valuetp12 === 0 ? 0 : props.valuetp12}</h4>
            <hr/>
            <h4>First Property : p21</h4>
            <h4>Second Property : {props.valuesp21 === '' ? 0 : props.valuesp21}</h4>
            <h4>Third Property : {props.valuetp21 === 0 ? 0 : props.valuetp21}</h4>
            <hr/>
            <h4>First Property : p22</h4>
            <h4>Second Property : {props.valuesp22 === '' ? 0 : props.valuesp22} </h4>
            <h4>Third Property : {props.valuetp22 === 0 ? 0 : props.valuetp22}</h4>
            <hr/>
            <h3>Второй уровень подсчета показателей силы команды ti (performance) : </h3>
            <h4>First Property : pij</h4>
            <h4>Second Property : {props.resultlvl2_1}</h4>
            <h4>Third Property : {props.resultlvl2tp1}</h4>
            <hr/>
            <h4>First Property : pij</h4>
            <h4>Second Property : {props.resultlvl2_2}</h4>
            <h4>Third Property : {props.resultlvl2tp2}</h4>
            <hr/>
        </div>
    )
}

export default RESULTS_2