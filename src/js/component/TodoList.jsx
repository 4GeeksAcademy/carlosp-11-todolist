//Importamos React y Hooks.
import React, { useState } from "react";

//Construimos el componente
const TodoList = () => {

    //Definimos las funciones y variables
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState(['do the dishes', 'go out']);
    const addTask = (event) => {
        event.preventDefault();
        if (task.trim() != '') setTaskList([...taskList, task]);
        setTask('');
    }
    const deleteTask = (pendingTask) => {
        setTaskList(taskList.filter((item, id) => pendingTask !== item));
    }

    //Diseñamos el elemento HTML a devolver
    return (
        <div className="container p-5 fw-lighter ">
            {/*Titulo*/}
            <div className="header text-center">
                <h1 className="fw-lighter big-title"> To do's  </h1>
            </div>

            {/*Lista de tareas por hacer*/}
            <div className="card mx-5 fs-4">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        {/*Campo fijo dentro de la lista para insertar nueva tarea*/}
                        <form onSubmit={addTask}>
                            <input type="text"
                                onChange={(e) => { setTask(e.target.value) }}
                                value={task}
                                className="form-control fw-lighter fs-4 ps-4"
                                placeholder="Write here your task"
                            />
                        </form>
                    </li>

                    {/*Función para renderizar todos los elementos de la lista*/}
                    {taskList.map((item, index) => (
                        <li className="list-group-item text-body d-flex justify-content-between ps-5 box">
                            {item}
                            <span className="">
                                <i className="fas fa-trash-alt ms-5" onClick={() => deleteTask(item)}></i>
                            </span>
                        </li>
                    ))}
                </ul>

                {/*Footer que indica cuántas tareas quedan pendientes por realizar*/}
                <div className="card-footer fs-6">
                    {taskList.length == 0 ? 'There are no tasks left to do. Add a new one' : taskList.length + ' tasks left to do'}
                </div>
            </div>
        </div >
    );
}

export default TodoList;

