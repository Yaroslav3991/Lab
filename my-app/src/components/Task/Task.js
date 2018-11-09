import React from 'react'
import './Task.css';
import {ENTER_KEY_CODE, ESC_KEY_CODE} from '../constant/constant.js';
import Button from "../Button/Button";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

const Task = ({
                  id,
                  title,
                  isCompleted,
                  toggleCompletedTask,
                  editTaskId,
                  editTaskById,
                  removeTaskById,
                  changeTitleTask,
                  editingTaskTitle,
                  updateEditingTaskTitle,
                  closeEditing
              }) => {
    const actionOnKeyDown = ({target: {value}, keyCode}, id) => {
        const valueWithoutSpaces = value.trim();

        switch (keyCode){
            case ENTER_KEY_CODE:
                if (valueWithoutSpaces) {
                    changeTitleTask(valueWithoutSpaces, id);
                }
                break;
            case ESC_KEY_CODE:
                closeEditing();
                break;
            default:
                break;
        }
    };

    return (
        <li className='task'>
            {editTaskId === id ?
                <Input
                    className={'task__input-for-edit-title'}
                    value={editingTaskTitle}
                    onChange={({target: {value}}) => updateEditingTaskTitle(value)}
                    onKeyDown={event => actionOnKeyDown(event, id)}
                /> :
                <React.Fragment>
                    <Checkbox
                        className={'task__checkbox-completed'}
                        onChange={() => toggleCompletedTask(id)}
                        checked={isCompleted}
                    />
                    <span
                        className={`task__title ${isCompleted && 'task__title--completed'}`}
                        onDoubleClick={() => editTaskById(id)}
                    >{title}</span>
                    <Button
                        className={'task__remove-button'}
                        callback={() => removeTaskById(id)}
                        value={'🞮'}
                    />
                </React.Fragment>
                }

        </li>
    );
};


export default Task;