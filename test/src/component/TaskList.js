import React, { useState } from "react";
import Task from "./Task";


const TaskList = ({ tasks, onDelete, onToggle }) => {

    return (

        <>
            {
                tasks.map((task) => (
                    <Task
                        title={task.text}
                        day={task.day} 
                        id={task.id}
                        onDelete={onDelete}
                        onToggle={onToggle}>

                    </Task>))
            }
        </>
    );
};

export default TaskList;
