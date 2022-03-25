export let addTask = (obj) =>{

    return {
        type : "ADD_TASK",
        payload : obj
    }
}

export let deleteTask = (id) =>{

    return {
        type : "DELETE_TASK",
        payload : id
    }
}