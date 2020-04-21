import React , {useState} from "react"

export const useToggleHook = value => {
    const [toggeled , setToggeled] = useState(value)
    const toggle = () => {
        setToggeled(!toggeled)
    }
   
    return [toggeled , toggle]
} 