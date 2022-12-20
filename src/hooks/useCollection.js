import { useEffect, useRef, useState } from "react"
import { db } from "../firebase/config"

// firebase imports

import { collection, onSnapshot } from "firebase/firestore"


export const useCollection = (c, _q) => {
    const [ documents, setDocuments] = useState(null)


    // for query '_q'

    const q =  useRef(_q).current.value


    useEffect(() => {
        let ref = collection(db, c)

       const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
        })
        return () => unsub()
    }, [c, _q])
    
    return { documents }
}
