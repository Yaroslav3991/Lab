import React from 'react';
import ButtonsSelection from '../ButtonsSelection/ButtonsSelection';
import './Footer.css';
import Button from "../Button/Button";

const Footer = ({selectFilter, tasks, selectedFilterForTasks, deleteCompletedTasks, filters}) => (
        <footer className='todo-list-footer'>
            <span className='todo-list-footer__left-tasks'>{tasks.filter(({isCompleted}) => !isCompleted).length} left</span>
            <ButtonsSelection
                //props
                selectedFilterForTasks={selectedFilterForTasks}
                filters={filters}
                //action
                selectFilter={selectFilter}/>
            <Button
                className={'todo-list-footer__button-clear-completed'}
                callback={deleteCompletedTasks}
                value={'Clear completed'}
            />
        </footer>
);

export default Footer;