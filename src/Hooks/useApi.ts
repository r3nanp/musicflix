import api from '../services/axios'

export default async function fetchData<Data = any>(url: string) {
  const response = await api.get<Data>(url)
  const data = response.data
  
  return data
}