/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import api from '../services/axios'

export async function fetchData<Data = any>(url: string) {
  const response = await api.get<Data>(url)
  const data = response.data

  return data
}
