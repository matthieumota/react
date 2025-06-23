import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        setLoading(true)
        setError(undefined)

        axios.get(url).then(response => {
            setData(response.data)
        }).catch((e: AxiosError) => {
            setError(e.status?.toString() ?? 'Api non disponible')
        }).finally(() => setTimeout(() => setLoading(false), 2000))
    }, [url])

    return { data, loading, error }
}

export default useFetch
