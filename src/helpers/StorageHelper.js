export const setStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data))
}

export const getStorage = (name) => {
  return JSON.parse(localStorage.getItem(name))
}
