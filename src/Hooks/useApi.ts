/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../services/axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchData<Data = any>(url: string) {
  const response = await api.get<Data>(url)
  const data = response.data

  return data
}
