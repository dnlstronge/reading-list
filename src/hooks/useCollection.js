import { useEffect, useState } from "react"
import { db } from "../firebase/config"

// firebase imports

import { collection, onSnaphot } from "firebase/firestore"


export const useCollection = (c) => {
    const [ documents, setDocuments] = useState(null)

    useEffect(() => {
        let ref = collection(db, c)

       const unsub = onSnaphot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
        })
        return () => unsub()
    }, [c])
    return { documents }
}
