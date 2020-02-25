import React from 'react'
import classes from './MainPage.module.css'

class MainPage extends React.Component {
    state = {}

    render() {
        return (
            <div className={classes.MainPage}>
                <h1>Тема : "Проектирование системы формирования рейтинга на веб-платформе для многопользовательских игр"</h1>
            </div>
        )
    }
}

export default MainPage