import React from 'react'
import classes from './Drawer.module.css'
import BackDrop from '../../UI/BackDrop/BackDrop'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'Главная страница', exact: true},
    {to: '/elo', label: 'Система рейтинга Elo', exact: false},
    {to: '/trueskill', label: 'Система рейтинга Trueskill', exact: false},
    {to: '/glicko', label: 'Система рейтинга Glicko', exact: false}
]

class Drawer extends React.Component {
    

    renderLinks() {
        return(
            links.map((link, index) => {
                return(
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName={classes.active}
                            onClick={this.props.onClose}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                )
            } )
        )
    }

    render() {
        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <BackDrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        )
    }
}

export default Drawer