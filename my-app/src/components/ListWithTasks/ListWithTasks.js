import React from 'react'
import './ListWithTasks.css';
import Task from '../Task/Task';

const ListWithTasks = ({
                  toggleCompletedTask,
                  removeTaskById,
                  tasks,
                  selectedFilterForTasks,
                  editTaskById,
                  changeTitleTask,
                  editTaskId,
                  editingTaskTitle,
                  updateEditingTaskTitle,
                  closeEditing
}) => {
    const eventsForTask = {
        toggleCompletedTask,
        removeTaskById,
        selectedFilterForTasks,
        editTaskById,
        changeTitleTask,
        editTaskId,
        updateEditingTaskTitle,
        closeEditing
    };

    return (
        <ul className='container-for-tasks'>
            {tasks.map(({title, isCompleted, id}) => (
                <Task
                    key={id}
                    id={id}
                    title={title}
                    isCompleted={isCompleted}
                    editingTaskTitle={editingTaskTitle}
                    {...eventsForTask}
                />
            ))
            }
        </ul>
    );
};

export default ListWithTasks;