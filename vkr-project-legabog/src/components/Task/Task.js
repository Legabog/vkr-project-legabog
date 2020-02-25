import React from 'react'
import classes from './Task.module.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Results from '../Results/Results'

class Task extends React.Component {



    // const cls = [
    //     'fa',
    // ]

    state = {
        inputValue1: '',
        inputValue2: '',
        resultValues: {
            result1: '',
            result2: '',
            result3: '',
            result4: '',
            result5: '',
            result6: ''
        },
        errorMessage: 'Введите корректные числовые значения'
    }
    
    changeHandler1 = (event) => {
        this.setState({
        inputValue1: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler2 = (event) => {
        this.setState({
            inputValue2: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    cleanUp = () => {
        this.setState({
            inputValue1:'',
            inputValue2: ''
        })
    }

    getPointsElo = () => {

        if(this.state.inputValue1 === '' || this.state.inputValue1 === null || 
        this.state.inputValue2 === '' || this.state.inputValue2 === null ) {
            alert(this.state.errorMessage)      
        } else {
            let RA = +this.state.inputValue1
            let RB = +this.state.inputValue2
            const SaLose = 0
            let SaNotLoseNotWin = 0.5
            let SaWin = 1
            const K = 16 
            let EA = 1/(1+10**((RB - RA)/400))
            let EB = 1/(1+10**((RA - RB)/400))
            let resultWinForA = RA + K * (SaWin - EA)
            let resultLoseForB = RB + K * (SaLose - EB)
            let resultWinForB = RB + K * (SaWin - EB)
            let resultLoseForA = RA + K * (SaLose - EA) 
            let resultNotLoseNotWinForA = RA + K * (SaNotLoseNotWin - EA)
            let resultNotLoseNotWinForB = RB + K * (SaNotLoseNotWin - EB)
            this.setState({
                resultValues: {
                    result1: resultWinForA,
                    result2: resultLoseForB,
                    result3: resultWinForB,
                    result4: resultLoseForA,
                    result5: resultNotLoseNotWinForA,
                    result6: resultNotLoseNotWinForB
                }
            }) 

        }

           
    }
    

    getResultValue2 = (() => {        
    })()
    
    getResultValue3 = () => {
        
    }



    render() {
        return (
            <div>
                <div className={classes.Task} >
                    <ul>
                        <li >
                            Введите рейтинговое значение первого игрока 
                        
                        </li>

                        <Input 
                            inputvalue={this.state.inputValue1}
                            onChange={this.changeHandler1}
                        ></Input>
                        <li>
                            Введите рейтинговое значение второго игрока
                        </li>
                        <Input 
                            onChange={this.changeHandler2}
                            inputvalue={this.state.inputValue2}
                        ></Input>
                    
                    
                    </ul>
                    <Button 
                        type={'success'}
                        onClick={this.getPointsElo}
                        >
                        Расчитать рейтинговое значение
                        </Button>
                    <Button 
                        type={'cleanup'} 
                        onClick={this.cleanUp}
                        >
                        Обнулить значения игроков
                    </Button>
                </div>
                <Results
                    resultValue1={this.state.resultValues.result1}
                    resultValue2={this.state.resultValues.result2}
                    resultValue3={this.state.resultValues.result3}
                    resultValue4={this.state.resultValues.result4}
                    resultValue5={this.state.resultValues.result5}
                    resultValue6={this.state.resultValues.result6}
                >
                </Results>
            </div>
        )
    }
    
}

export default Task