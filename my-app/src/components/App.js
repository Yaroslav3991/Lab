import React, {Component} from 'react';

import './App.css';

import TodoForm from './TodoForm/TodoForm.js';
import ListWithTasks from './ListWithTasks/ListWithTasks.js';
import Footer from './Footer/Footer.js';
import Button from "./Button/Button";
import InfoSignature from './InfoSignature/InfoSignature';

import {ALL, COMPLETED, EMPTY_TITLE, FILTERS} from './constant/constant.js';
import uuidv4 from 'uuid/v4';

export class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleForTheNewTask: EMPTY_TITLE,
            tasks: [],
            selectedFilterForTasks: ALL,
            editTaskId: null,
            isAllTaskCompleted: false,
            editingTaskTitle: EMPTY_TITLE,
            filters: FILTERS
        };
    }

    updateNewTaskTitle = (titleForTheNewTask) => {
        this.setState({
            titleForTheNewTask
        });
    };

    addNewTask = () => {
        const {tasks, titleForTheNewTask} = this.state;

        this.setState({
            tasks: [...tasks, {
                title: titleForTheNewTask,
                isCompleted: false,
                id: uuidv4()
            }],
            titleForTheNewTask: EMPTY_TITLE
        });
    };

    toggleCompletedTask = (id) => {
        const tasks = this.state.tasks.map((task) => {
            if (id === task.id) {
                task.isCompleted = !task.isCompleted;
            }

            return task;
        });

        this.setState({
            tasks
        });
    };

    removeTaskById = (taskId) => {
        const tasks = this.state.tasks.filter(({id}) => id !== taskId);

        this.setState({
            tasks
        });
    };

    markAllTasksCompleted = () => {
       const tasks = this.state.tasks.map(({title, id}) => ({
            title,
            isCompleted : true,
            id
        }));

        this.setState({
            tasks,
            isAllTaskCompleted: true
        })
    };

    selectFilter = (selectedFilterForTasks) => {
        this.setState((prevState) => ({
            selectedFilterForTasks,
            filters: prevState.filters.map(filter => ({
                ...filter,
                isActive: filter.filterName === selectedFilterForTasks
            }))
        }));
    };

    editTaskById = (editTaskId) => {
        const {title} = this.state.tasks.find(({id}) => editTaskId === id);

        this.setState({
            editTaskId,
            editingTaskTitle: title
        })
    };

    updateEditingTaskTitle = (editingTaskTitle) => {
        this.setState({
            editingTaskTitle
        })
    };

    changeTitleTask = (title, id) => {
        const tasks = this.state.tasks.map((task) => {
            if (task.id === id) {
                task.title = title;
            }

            return task;
        });

        this.setState({
            tasks,
            editTaskId: null
        })
    };

    closeEditing = () => {
        this.setState({
            editTaskId: null
        })
    };

    deleteCompletedTasks = () => {
        let tasks = [...this.state.tasks];

        tasks = tasks.filter(({isCompleted}) => !isCompleted);

        this.setState({
            tasks
        })
    };

    render() {
        const {selectedFilterForTasks, tasks, titleForTheNewTask, editTaskId, editingTaskTitle, filters} = this.state;

        const {
            addNewTask,
            updateNewTaskTitle,
            markAllTasksCompleted,
            removeTaskById,
            toggleCompletedTask,
            editTaskById,
            changeTitleTask,
            selectFilter,
            deleteCompletedTasks,
            updateEditingTaskTitle,
            closeEditing,
        } = this;

        const isAllTasksCompleted = tasks.every(task => task.isCompleted);

        let copyTasks;

        if (selectedFilterForTasks !== ALL) {
            copyTasks = tasks.filter(({isCompleted}) => {
                const isSelectedFilterIsCompleted = selectedFilterForTasks === COMPLETED;

                return isSelectedFilterIsCompleted === isCompleted;
            });
        }

        return (
            <div className='todo-list'>
                <TodoForm
                    //props
                    titleForTheNewTask={titleForTheNewTask}
                    tasks={tasks}
                    //actions
                    addNewTask={addNewTask}
                    updateNewTaskTitle={updateNewTaskTitle}
                />
                {!!(tasks.length) &&
                <div className='todo-list__tasks'>
                    <Button
                        className={`todo-list__button-all-tasks-completed ${isAllTasksCompleted && 'todo-list__button-all-tasks-completed--active'}`}
                        callback={markAllTasksCompleted}
                        value={'Mark all tasks as completed'}
                    />
                    <ListWithTasks
                        //props
                        tasks={copyTasks ? copyTasks : tasks}
                        selectedFilterForTasks={selectedFilterForTasks}
                        editTaskId={editTaskId}
                        editingTaskTitle={editingTaskTitle}
                        //actions
                        removeTaskById={removeTaskById}
                        toggleCompletedTask={toggleCompletedTask}
                        editTaskById={editTaskById}
                        changeTitleTask={changeTitleTask}
                        updateEditingTaskTitle={updateEditingTaskTitle}
                        closeEditing={closeEditing}
                    />
                    <Footer
                        //props
                        selectedFilterForTasks={selectedFilterForTasks}
                        tasks={tasks}
                        filters={filters}
                        //actions
                        selectFilter={selectFilter}
                        deleteCompletedTasks={deleteCompletedTasks}
                    />
                </div>
                }
                <InfoSignature />
            </div>
        );
    }
}