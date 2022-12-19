import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

// imports (FB)

import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const useSignup = () => {
    const [error, setError ] = useState(null)
    const { dispatch } = useAuthContext()

    const signuserup = (email, password) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => { 
             dispatch({ type: 'LOGIN', payload: res.user })
        })
        .catch((err) => {
            setError(err.message)
        })
    }

    return { error, signuserup }
}

