import React from 'react'
import classes from './Task_2.module.css'
import RESULT_2 from '../Results_2/Results_2'
import Teamfortrueskill from '../Teamfortrueskill/Teamoftrueskill'
import Teamfortrueskill2 from '../Teamfortrueskill2/Teamfortrueskill2'
import Button from '../UI/Button/Button'

class TASK_2 extends React.Component {

    state = {
        inputValue11: '',
        inputValue12: '',
        inputValue21: '',
        inputValue22: '',
        inputValue31: '',
        inputValue32: '',
        inputValue41: '',
        inputValue42: '',
        secondpropp11: '',
        secondpropp12: '',
        secondpropp21: '',
        secondpropp22: '',
        thirdpropp11: '',
        thirdpropp12: '',
        thirdpropp21: '',
        thirdpropp22: '',
        resultlvl2sp11_sp12: '',
        resultlvl2sp21_sp22: '',
        resultlvl2tp1: '',
        resultlvl2tp2: '',
        errorMessage: 'Введите корректные числовые значения'

        
    }
    
    // Block of handlers onChange for inputs

    changeHandler11 = (event) => {
        this.setState({
            inputValue11: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler12 = (event) => {
        this.setState({
            inputValue12: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler21 = (event) => {
        this.setState({
            inputValue21: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler22 = (event) => {
        this.setState({
            inputValue22: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler31 = (event) => {
        this.setState({
            inputValue31: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler32 = (event) => {
        this.setState({
            inputValue32: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler41 = (event) => {
        this.setState({
            inputValue41: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler42 = (event) => {
        this.setState({
            inputValue42: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    // 

    // Button cleanup

    cleanUp = () => {
        this.setState({
        inputValue11: '',
        inputValue12: '',
        inputValue21: '',
        inputValue22: '',
        inputValue31: '',
        inputValue32: '',
        inputValue41: '',
        inputValue42: '',
        })
    }

    //

    // Buttons Default sigma values

    setSigmaValues12 = () => {
        this.setState({
            inputValue12: 100/3
        })
    }

    setSigmaValues22 = () => {
        this.setState({
            inputValue22: 100/3
        })
    }

    setSigmaValues32 = () => {
        this.setState({
            inputValue32: 100/3
        })
    }

    setSigmaValues42 = () => {
        this.setState({
            inputValue42: 100/3
        })
    }

    // 

    // Buttons Default rating values

    setDefaultsValues11 = () => {
        this.setState({
            inputValue11: 100
        })
    }

    setDefaultsValues21 = () => {
        this.setState({
            inputValue21: 100
        })
    }

    setDefaultsValues31 = () => {
        this.setState({
            inputValue31: 100
        })
    }

    setDefaultsValues41 = () => {
        this.setState({
            inputValue41: 100
        })
    }

    // 

    // Results
    getPointsTrueSkill = () => {
        const beta = 3
        // const e = 1/2

        if(this.state.inputValue11 === '' || this.state.inputValue12 === '' || this.state.inputValue21 === '' || this.state.inputValue22 === '' || this.state.inputValue31 === '' || this.state.inputValue32 === '' || this.state.inputValue41 === '' || this.state.inputValue42 === '' ||
        this.state.inputValue11 === null || this.state.inputValue12 === null || this.state.inputValue21 === null || this.state.inputValue22 === null || this.state.inputValue31 === null || this.state.inputValue32 === null || this.state.inputValue41 === null || this.state.inputValue42 === null ) {
            alert(this.state.errorMessage)
        } else {
            this.setState({
                secondpropp11: +this.state.inputValue11,
                secondpropp12: +this.state.inputValue21,
                secondpropp21: +this.state.inputValue31,
                secondpropp22: +this.state.inputValue41,
                thirdpropp11:  (+this.state.inputValue12)**2 + beta**2,
                thirdpropp12: (+this.state.inputValue22)**2 + beta**2,
                thirdpropp21: (+this.state.inputValue32)**2 + beta**2,
                thirdpropp22: (+this.state.inputValue42)**2 + beta**2,
                resultlvl2sp11_sp12: ((+this.state.inputValue11) + (+this.state.inputValue21))/2,
                resultlvl2sp21_sp22: ((+this.state.inputValue31) + (+this.state.inputValue41))/2,
                resultlvl2tp1: ((+this.state.inputValue12)**2 + beta**2 + (+this.state.inputValue22)**2 + beta**2)/4,
                resultlvl2tp2: ((+this.state.inputValue32)**2 + beta**2 + (+this.state.inputValue42)**2 + beta**2)/4,
            })

        }


    }
    // 
    

    render() {
        return(
            <div>
                <div className={classes.Task_2}>
                    <Teamfortrueskill
                        inputvalue11={this.state.inputValue11}
                        inputvalue12={this.state.inputValue12}
                        inputvalue21={this.state.inputValue21}
                        inputvalue22={this.state.inputValue22}
                        onChange11={this.changeHandler11}
                        onChange12={this.changeHandler12}
                        onChange21={this.changeHandler21}
                        onChange22={this.changeHandler22}
                        onClick11={this.setDefaultsValues11}
                        onClick21={this.setDefaultsValues21}
                        onClick12={this.setSigmaValues12}
                        onClick22={this.setSigmaValues22}
                    >

                    </Teamfortrueskill>
                       
                    <Teamfortrueskill2
                        inputvalue31={this.state.inputValue31}
                        inputvalue32={this.state.inputValue32}
                        inputvalue41={this.state.inputValue41}
                        inputvalue42={this.state.inputValue42}
                        onChange31={this.changeHandler31}
                        onChange32={this.changeHandler32}
                        onChange41={this.changeHandler41}
                        onChange42={this.changeHandler42}
                        onClick31={this.setDefaultsValues31}
                        onClick41={this.setDefaultsValues41}
                        onClick32={this.setSigmaValues32}
                        onClick42={this.setSigmaValues42}
                    >
                        
                    </Teamfortrueskill2>
                </div>
                <div className={classes.Task_2}>
                    <Button
                        type={'success'}
                        onClick={this.getPointsTrueSkill}
                    >Подсчитать показатели силы игроков Pi(perfomance)</Button>
                    <Button
                        type={'cleanup'}
                        onClick={this.cleanUp}
                    >Отчистить входные значения у каждого игрока</Button>
                </div>
                <RESULT_2 
                    valuesp11={this.state.secondpropp11}
                    valuesp12={this.state.secondpropp12}
                    valuesp21={this.state.secondpropp21}
                    valuesp22={this.state.secondpropp22}
                    valuetp11={this.state.thirdpropp11}
                    valuetp12={this.state.thirdpropp12}
                    valuetp21={this.state.thirdpropp21}
                    valuetp22={this.state.thirdpropp22}
                    resultlvl2_1={this.state.resultlvl2sp11_sp12}
                    resultlvl2_2={this.state.resultlvl2sp21_sp22}
                    resultlvl2tp1={this.state.resultlvl2tp1}
                    resultlvl2tp2={this.state.resultlvl2tp2}
                >
                </RESULT_2> 
            </div>            
           
           
        )
            
    }

}

export default TASK_2