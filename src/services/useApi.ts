import api from './axios'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function fetchData<Data = any>(url: string): Promise<Data> {
  const response = await api.get<Data>(url)
  const data = response.data

  return data
}

export default fetchData
