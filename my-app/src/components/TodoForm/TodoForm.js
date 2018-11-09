import React from 'react';
import './TodoForm.css';
import Button from "../Button/Button";
import Input from "../Input/Input";

const TodoForm = ({updateNewTaskTitle, titleForTheNewTask, addNewTask, tasks}) => {
    const checkTitleForExtraSpacesAndAddTask = (event) => {
        event.preventDefault();

        const trimmedTitleForTheNewTask = titleForTheNewTask.trim();

        const isTaskNameRepeat = tasks.some(({title}) => title === trimmedTitleForTheNewTask);

        if (trimmedTitleForTheNewTask.length && !isTaskNameRepeat) {
            addNewTask();
        }
    };

    return (
        <form className='todo-list-main'>
            <h3 className='todo-list-main__title'>TODO LIST</h3>
            <div className='todo-add-taks'>
                <Input
                    className={'todo-add-taks__input'}
                    value={titleForTheNewTask}
                    placeholder={'What needs to be done?'}
                    onChange={({target: {value}}) => updateNewTaskTitle(value)}
                />
                <Button
                    className={'todo-add-taks__button'}
                    callback={checkTitleForExtraSpacesAndAddTask}
                    value={`↵`}
                />
            </div>
        </form>
    )
};

export default TodoForm;