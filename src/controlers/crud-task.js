/** Create new task */
const createTask = (pet, widget) => { }

/** List tasks */
const listTask = (pet, widget) => {
  if (widget === 'today') return [{ id: 1 }]
  return []
}

/** Delete task */
const deleteTask = (widget, id) => {
  alert(widget)
}

export { createTask, listTask, deleteTask }