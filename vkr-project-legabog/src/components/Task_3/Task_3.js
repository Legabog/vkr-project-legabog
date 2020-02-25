import React from 'react'
import classes from './Task_3.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import TASK_3_PLAYER_1 from '../Task_3_PLAYERS/Task_3_PLAYER_1'
import TASK_3_PLAYER_2 from '../Task_3_PLAYERS/Task_3_PLAYER_2'
import TASK_3_PLAYER_3 from '../Task_3_PLAYERS/Task_3_PLAYER_3'
import TASK_3_PLAYER_4 from '../Task_3_PLAYERS/Task_3_PLAYER_4'
import Results3 from '../Results3/Results3'

class TASK_3 extends React.Component {

    state = {
        inputValue1: '',
        inputValue2: '',
        enemyValue1: '',
        enemyValue2: '',
        enemyValue3: '',
        enemyValue4: '',
        enemyRD1: '',
        enemyRD2: '',
        enemyRD3: '',
        enemyRD4: '',
        enemyEventResult1: '',
        enemyEventResult2: '',
        enemyEventResult3: '',
        enemyEventResult4: '',
        q: '',
        gj1: '',
        gj2: '',
        gj3: '',
        gj4: '',
        E1: '',
        E2: '',
        E3: '',
        E4: '',
        d2: '',
        RD: '',
        res1: '',
        res2: '',
        resultRating: '',
        errorMessage: 'Введите корректные числовые значения'

    }

    // Input handlers

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

    // Enemy Input Handlers

    changeHandler3 = (event) => {
        this.setState({
            enemyValue1: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler4 = (event) => {
        this.setState({
            enemyValue2: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler5 = (event) => {
        this.setState({
            enemyValue3: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler6 = (event) => {
        this.setState({
            enemyValue4: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler7 = (event) => {
        this.setState({
            enemyRD1: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler8 = (event) => {
        this.setState({
            enemyRD2: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler9 = (event) => {
        this.setState({
            enemyRD3: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler10 = (event) => {
        this.setState({
            enemyRD4: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler11 = (event) => {
        this.setState({
            enemyEventResult1: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler12 = (event) => {
        this.setState({
            enemyEventResult2: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler13 = (event) => {
        this.setState({
            enemyEventResult3: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    changeHandler14 = (event) => {
        this.setState({
            enemyEventResult4: event.target.value.replace(/[^\d,]/g, '')
        })   
    }

    // 

    // Buttons with set default Rating
        
    setDefaultRating1 = () => {
        this.setState({
            inputValue1: 1500
        })
    }

    setDefaultRating2 = () => {
        this.setState({
           enemyValue1: 1500
        })
    }

    setDefaultRating3 = () => {
        this.setState({
            enemyValue2: 1500
        })
    }

    setDefaultRating4 = () => {
        this.setState({
            enemyValue3: 1500
        })
    }

    setDefaultRating5 = () => {
        this.setState({
            enemyValue4: 1500
        })
    }

    // 

    // Set default RD values

    setDefaultRD1 = () => {
        this.setState({
            inputValue2: 350
        })
    }

    setDefaultRD2 = () => {
        this.setState({
           enemyRD1: 350
        })
    }

    setDefaultRD3 = () => {
        this.setState({
           enemyRD2: 350
        })
    }

    setDefaultRD4 = () => {
        this.setState({
           enemyRD3: 350
        })
    }

    setDefaultRD5 = () => {
        this.setState({
           enemyRD4: 350
        })
    }

    // 

    // Set default Nones

    setDefaultNones1 = () => {
        this.setState({
            enemyEventResult1: 0.5
        })
    }

    setDefaultNones2 = () => {
        this.setState({
            enemyEventResult2: 0.5
        })
    }

    setDefaultNones3 = () => {
        this.setState({
            enemyEventResult3: 0.5
        })
    }

    setDefaultNones4 = () => {
        this.setState({
            enemyEventResult4: 0.5
        })
    }

    cleanUp = () => {
        this.setState({
            inputValue1: '',
            inputValue2: '',
            enemyValue1: '',
            enemyValue2: '',
            enemyValue3: '',
            enemyValue4: '',
            enemyRD1: '',
            enemyRD2: '',
            enemyRD3: '',
            enemyRD4: '',
            enemyEventResult1: '',
            enemyEventResult2: '',
            enemyEventResult3: '',
            enemyEventResult4: ''
        })
    }

    // 

    getResultsGlicko = () => {
        const q = 0.0057564

        if(this.state.inputValue1 === '' || this.state.inputValue2 === '' || this.state.enemyValue1 === '' || this.state.enemyValue2 === '' || this.state.enemyValue3 === '' || this.state.enemyValue4 === '' || this.state.enemyRD1 === '' || this.state.enemyRD2 === '' || this.state.enemyRD3 === '' || this.state.enemyRD4 === '' || this.state.enemyEventResult1 === '' || this.state.enemyEventResult2 === '' || this.state.enemyEventResult3 === '' || this.state.enemyEventResult4 === '' || 
        this.state.inputValue1 === null || this.state.inputValue2 === null || this.state.enemyValue1 === null || this.state.enemyValue2 === '' || this.state.enemyValue3 === null || this.state.enemyValue4 === null || this.state.enemyRD1 === null || this.state.enemyRD2 === null || this.state.enemyRD3 === null || this.state.enemyRD4 === null || this.state.enemyEventResult1 === null || this.state.enemyEventResult2 === null || this.state.enemyEventResult3 === null || this.state.enemyEventResult4 === null) {
            alert(this.state.errorMessage)
        } else {
            this.setState({
                q: q,
                gj1: 1/Math.sqrt(1 + 3*(q**2)*((+this.state.enemyRD1)**2)/(Math.PI*Math.PI)),
                gj2: 1/Math.sqrt(1 + 3*(q**2)*((+this.state.enemyRD2)**2)/(Math.PI*Math.PI)),
                gj3: 1/Math.sqrt(1 + 3*(q**2)*((+this.state.enemyRD3)**2)/(Math.PI*Math.PI)), 
                gj4: 1/Math.sqrt(1 + 3*(q**2)*((+this.state.enemyRD4)**2)/(Math.PI*Math.PI)),
            })
    
            setTimeout(() => {
                this.setState({
                    E1: 1/(1 + 10**(-this.state.gj1*((+this.state.inputValue1) - (+this.state.enemyValue1))/400)),
                    E2: 1/(1 + 10**(-this.state.gj2*((+this.state.inputValue1) - (+this.state.enemyValue2))/400)),
                    E3: 1/(1 + 10**(-this.state.gj3*((+this.state.inputValue1) - (+this.state.enemyValue3))/400)),
                    E4: 1/(1 + 10**(-this.state.gj4*((+this.state.inputValue1) - (+this.state.enemyValue4))/400))
                })
    
            }, 5)
    
            
            setTimeout(() => {
                this.setState({
                    d2: ((q**2)*((this.state.gj1**2)*this.state.E1*(1 - this.state.E1) + (this.state.gj2**2)*this.state.E2*(1 - this.state.E2) + (this.state.gj3**2)*this.state.E3*(1 - this.state.E3) + (this.state.gj4**2)*this.state.E4*(1 - this.state.E4) ))**-1
                })
    
            }, 10)
    
            setTimeout(() => {
                this.setState({
                    RD: Math.sqrt(((1/(+this.state.inputValue2)**2) + (1/this.state.d2))**-1)
                })
    
            }, 20)
    
            setTimeout(() => {
                this.setState({
                    res1: this.state.gj1*((+this.state.enemyEventResult1) - this.state.E1) + this.state.gj2*((+this.state.enemyEventResult2) - this.state.E2) + this.state.gj3*((+this.state.enemyEventResult3) - this.state.E3) + this.state.gj4*((+this.state.enemyEventResult4) - this.state.E4),
                    res2: q/((1/((+this.state.inputValue2)*(+this.state.inputValue2))) + 1/this.state.d2)
                })
    
            }, 30)
    
            setTimeout(() => {
                this.setState({
                    resultRating: (+this.state.inputValue1) + this.state.res2 * this.state.res1
                })
    
            }, 40)

        }

       
    }

    render() {
        return(
            <div>
                <div className={classes.Task_3}>
                    <ul>
                        <li>Введите ваше рейтинговое значение</li>
                        <Input
                            inputvalue={this.state.inputValue1}
                            onChange={this.changeHandler1}
                        ></Input>
                        <Button
                            type={'success'}
                            onClick={this.setDefaultRating1}
                        >Set default reating</Button>
                        <li>Введите ваш показатель отклонения рейтинга</li>
                        <Input
                            inputvalue={this.state.inputValue2}
                            onChange={this.changeHandler2}
                        ></Input>
                        <Button 
                            type={'success'}
                            onClick={this.setDefaultRD1}
                        >
                            Set default 'RD'
                        </Button>
                    </ul> 
                    <hr/>
                    <h3>Введите значения других игроков с которыми вы играли</h3>
                    <div className={classes.Task_3_1}>
                        <TASK_3_PLAYER_1             
                            inputvalue1={this.state.enemyValue1}
                            inputvalue2={this.state.enemyRD1}
                            inputvalue3={this.state.enemyEventResult1}
                            onChange1={this.changeHandler3}
                            onChange2={this.changeHandler7}
                            onChange3={this.changeHandler11}
                            onClick1={this.setDefaultRating2}
                            onClick2={this.setDefaultRD2}
                            onClick3={this.setDefaultNones1}
                            
                        >
                        </TASK_3_PLAYER_1>

                        <TASK_3_PLAYER_2             
                            inputvalue4={this.state.enemyValue2}
                            inputvalue5={this.state.enemyRD2}
                            inputvalue6={this.state.enemyEventResult2}
                            onChange4={this.changeHandler4}
                            onChange5={this.changeHandler8}
                            onChange6={this.changeHandler12}
                            onClick1={this.setDefaultRating3}
                            onClick2={this.setDefaultRD3}
                            onClick3={this.setDefaultNones2}
                            
                        >
                        </TASK_3_PLAYER_2>

                        <TASK_3_PLAYER_3             
                            inputvalue7={this.state.enemyValue3}
                            inputvalue8={this.state.enemyRD3}
                            inputvalue9={this.state.enemyEventResult3}
                            onChange7={this.changeHandler5}
                            onChange8={this.changeHandler9}
                            onChange9={this.changeHandler13}
                            onClick1={this.setDefaultRating4}
                            onClick2={this.setDefaultRD4}
                            onClick3={this.setDefaultNones3}
                            
                        >
                        </TASK_3_PLAYER_3>

                        <TASK_3_PLAYER_4             
                            inputvalue10={this.state.enemyValue4}
                            inputvalue11={this.state.enemyRD4}
                            inputvalue12={this.state.enemyEventResult4}
                            onChange10={this.changeHandler6}
                            onChange11={this.changeHandler10}
                            onChange12={this.changeHandler14}
                            onClick1={this.setDefaultRating5}
                            onClick2={this.setDefaultRD5}
                            onClick3={this.setDefaultNones4}
                            
                        >
                        </TASK_3_PLAYER_4>
                        
                    </div>  
                    <hr/>
                    <Button 
                        type={'successTask3'}
                        onClick={this.getResultsGlicko}
                        style={{marginTop:'10px'}}>
                        Подсчитать все значения
                    </Button>
                    <Button 
                        type={'cleanupTask3'}
                        onClick={this.cleanUp}   
                    >
                        Обнулить все входящие значения
                    </Button>
                    <hr/>
                    <Results3
                        valueq={this.state.q}
                        resultgj1={this.state.gj1}
                        resultgj2={this.state.gj2}
                        resultgj3={this.state.gj3}
                        resultgj4={this.state.gj4}
                        resultE1={this.state.E1}
                        resultE2={this.state.E2}
                        resultE3={this.state.E3}
                        resultE4={this.state.E4}
                        resultd2={this.state.d2}
                        resultRD={this.state.RD}
                        resultvalue={this.state.resultRating}
                    ></Results3>
                             
                </div>
                
            </div>
                     
           
           
        )
            
    }

}

export default TASK_3