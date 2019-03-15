import axios from 'axios'
import moment from 'moment'
import configs from '../configs'

import { revalidate } from './login'

/** Create new task */
const createTask = async (event, pet, agenda) => {
  revalidate()
  if (event.target.date.value.length && event.target.time.value.length && event.target.description.value.length) {
    event.preventDefault()
    const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
    const repeat = event.target.repeat.value
    const data = {
      pet,
      agenda,
      date: `${event.target.date.value} ${event.target.time.value}`,
      description: event.target.description.value
    }
    await axios.post(`${configs.apiUrl}/task`, data, { headers: { token: localData.token } })
    if (repeat !== 0) {
      let newDate
      switch (repeat) {
        case 'weekly':
          newDate = moment(new Date(data.date)).add(1, 'weeks')
          break
        case 'biweekly':
          newDate = moment(new Date(data.date)).add(1, 'quarters')
          break
        case 'monthly':
          newDate = moment(new Date(data.date)).add(1, 'months')
          break
        case 'halfYear':
          newDate = moment(new Date(data.date)).add(6, 'months')
          break
        case 'yearly':
          newDate = moment(new Date(data.date)).add(1, 'years')
          break
        default:
          newDate = data.date
          break
      }
      const newData = { ...data, date: newDate._d }
      await axios.post(`${configs.apiUrl}/task`, newData, { headers: { token: localData.token } })
    }
    return true
  } else {
    return false
  }
}


/** List tasks */
const listTask = async (pet, agenda) => {
  revalidate()
  const date = new Date()
  const year = date.getFullYear()
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const params = agenda === 'today' ? { pet, date: { $gte: `${year}-${month}-${day} 00:00:00`,  $lte: `${year}-${month}-${day} 23:59:59` } } : { pet, agenda, date: { $gte: `${year}-${month}-${day} 00:00:00`} }
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
  const listData = await axios.get(`${configs.apiUrl}/task`, { params, headers: { token: localData.token } }) // Get data
  return listData.data.data
}

/** Delete task */
const deleteTask = (id) => {
  revalidate()
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
  var askConfirm = prompt("Deletar o agendamento? Para confirmar digite sim.");
  if (askConfirm.toLowerCase() === 'sim') axios.delete(`${configs.apiUrl}/task`, { params: { id }, headers: { token: localData.token } })

}

export { createTask, listTask, deleteTask }
