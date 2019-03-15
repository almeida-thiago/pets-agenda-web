import axios from 'axios'
import configs from '../configs'

/** Login reavalidate */
import { revalidate } from './login'

/** Create new pet */
const createPet = async (event) => {
  revalidate()
  if (event.target.name.value.length) {
    event.preventDefault()
    const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
    const data = {
      user: localData.user,
      name: event.target.name.value,
      specie: event.target.specie.value
    }
    await axios.post(`${configs.apiUrl}/pet`, data, { headers: { token: localData.token } })
    return true
  } else {
    return false
  }
}

/** List all pets */
const listPets = async () => {
  revalidate()
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
  const listData = await axios.get(`${configs.apiUrl}/pet`, { params: { user: localData.user }, headers: { token: localData.token } }) // Get data
  return listData.data.data
}

/** Delete pet */
const deletePet = (id) => {
  revalidate()
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
  var askConfirm = prompt("Deletar o pet? Para confirmar digite sim.");
  if (askConfirm.toLowerCase() === 'sim') axios.delete(`${configs.apiUrl}/pet`, { params: { id }, headers: { token: localData.token } })
}

export { createPet, listPets, deletePet }