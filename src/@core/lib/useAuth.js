import useSWR from 'swr'
import axios from './axios'
import {useRouter} from 'next/router'
import {useEffect, useState} from 'react'

export default function useAuth({middleware} = {}) {
    const router = useRouter()

    const [isLoading, setIsLoading] = useState(true);

    const {data: user, error, mutate} = useSWR('/user',
        () => axios.get('/api/user').then(response => response.data.data)
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const login = async ({setErrors, ...props}) => {
        setErrors([])

        await csrf()

        axios
            .post('/api/login', props)
            .then(() => mutate() && router.push('/dashboard'))
            .catch(error => {
                if (error.response.status != 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const logout = async () => {
        await axios.post('/api/logout')

        mutate(null)

        router.push('/auth/login')
    }

    useEffect(() => {
        if (user || error) {
            setIsLoading(false);
        }

        if (middleware == 'guest' && user) router.push('/dashboard')
        if (middleware == 'auth' && !user && error) router.push('/auth/login')
    }, [user, error])

    return {
        user,
        csrf,
        login,
        logout,
        isLoading
    }
}