'use client'

import { useEffect } from 'react'
import { useForm } from "react-hook-form";
import useBoards from "../../Contexts/Boards";
import { create } from "domain";
import { use } from "react";
import toast from 'react-hot-toast';


export const Page3 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {setSteps,setMember,findUser, listMembers, newBoard} = useBoards()
    const handleSetBoardMember = (data) => {
        const member = listMembers.find(member => member.email === data.member)
       
        
        setMember(member)
        toast.success('Miembro agregado')
        
        
    }
    const readMember = String(watch('member'))
    
    useEffect(() => {
        if(readMember !== null && readMember !== undefined) findUser(readMember)
    }, [readMember])


    const handleNextStep = () => {
        
        setSteps(4)
    }
    
    
    console.log(listMembers)


    return (
        <div className='h-full'>
            <form className='flex flex-col justify-center h-full px-6 space-y-4' onSubmit={handleSubmit(handleSetBoardMember)}>
                <label htmlFor="member" className='flex flex-col w-full gap-2' >
                    Add member
                    <div className="flex gap-3">
                    <input list="members" {...register('member')} type="text" id='member' placeholder="member@example.com" className="w-full input input-bordered input-primary" autoComplete="false"/>
                <button type="submit" className="btn btn-primary">+</button>
                <datalist id="members">
                    {listMembers?.length > 0 && listMembers.map(member => {
                        return <option value={member.email}/>
                    })}
                    
                </datalist>
                    </div>
                
                </label>

                <div className="h-[8rem] overflow-hidden">
                    <h3 className='text-center'>Miembros</h3>
                    <ul className='flex flex-col gap-2 p-2 h-[6rem] overflow-y-auto flex-nowrap scrollbar-thin scrollbar-thumb-slate-800'>
                        {newBoard?.members?.length > 0 && newBoard?.members?.map(member => {
                            return <li className='p-1 border-green-400 rounded-lg border-s-4 bg-slate-800'>{member.name}</li>
                        })}
                    </ul>
                </div>

                <div className='w-full mt-auto'>
                    <button type="button" onClick={handleNextStep} className="w-full btn btn-primary">Save</button>
                </div>

            </form>
        </div>
    )
}