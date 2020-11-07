import useSWR from 'swr'
import api from '../services/axios'

export default function useApi<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url)
    const data = await response.data

    return data
  })

  return { data, error }
}
