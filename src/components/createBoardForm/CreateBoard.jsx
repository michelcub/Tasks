'use client'

import { useState } from "react"
import { Page1 } from "./page1"
import { Steps } from "./Steps"
export const CreateBoard = () => {

    const [step, setStep] = useState(1)
    const [boardName, setBoardName] = useState('')
    const [members, setMembers] = useState([])
    const [findMember, setFindMember] = useState('')
    const [board, setBoard] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    
    //if(step === 1) return <Page1 setStep={setStep} boardName={boardName} setBoardName={setBoardName} />

    return (
        <div className="h-[60vh] flex flex-col justify-start mt-5 item-center px-[3rem] space-y-7">
            <div>
                <Steps/>
            </div>
            {step === 1 ?<Page1 setStep={setStep} boardName={boardName} setBoardName={setBoardName} /> : ''}
        </div>
    )
}