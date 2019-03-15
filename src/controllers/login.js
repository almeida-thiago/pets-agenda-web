import axios from 'axios'
import configs from '../configs'

/** Disable or enable form */
const disableForm = (target, status) => {
  target.email.disabled = status
  target.password.disabled = status
  target.submit.disabled = status
  if (status === false) target.password.select()
}

/** Create new user */
const create = async (event, history) => {
  event.preventDefault()
  if (event.target.password.value === event.target['password-confirm'].value) {
    const username = event.target.email.value
    const password = event.target.password.value
    await axios.post(`${configs.apiUrl}/user `, { username, password })
    const loginData = await axios.post(`${configs.apiUrl}/login`, { username, password }) // Login
    const localData = { ...loginData.data } // Parse login data
    delete localData.success // Delete unecessary data
    localStorage.setItem('PETS_AGENDA', JSON.stringify(localData)) // Save login data in local storage
    if (loginData.data.success) history.push('/dashboard')
  } else {
    alert('A senha e a confirmação da senha não coincidem.')
  }
}

/** Login application */
const login = async (event, history, message) => {
  event.preventDefault()
  const target = event.target
  const username = target.email.value
  const password = target.password.value
  if (username && password) {
    disableForm(target, true) // Disable form 
    const loginData = await axios.post(`${configs.apiUrl}/login`, { username, password }) // Login
    const localData = { ...loginData.data } // Parse login data
    delete localData.success // Delete unecessary data
    localStorage.setItem('PETS_AGENDA', JSON.stringify(localData)) // Save login data in local storage
    loginData.data.success ? history.push('/dashboard') : message(true); disableForm(target, false)
  } else {
    message(true)
  }
}

/** revalidate */
const revalidate = async () => {
  const localData = JSON.parse(localStorage.getItem('PETS_AGENDA')) // Get storage data
  const newToken = await axios.put(`${configs.apiUrl}/revalidate`, { user: localData.user }, { headers: { token: localData.token } }) // Login
  console.log(newToken)
  newToken.data.success
    ? localStorage.setItem('PETS_AGENDA', JSON.stringify({ ...localData, token: newToken.data.token })) // Save login data in local storage
    : localStorage.removeItem('PETS_AGENDA')
}

/** Logout application */
const logout = (history) => {
  localStorage.removeItem('PETS_AGENDA')
  history.push('/login')
}

export { create, login, revalidate, logout }