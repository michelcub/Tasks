'use client'

import {CreateBoard} from '../../../../src/components/createBoardForm/CreateBoard'
import {useForm } from 'react-hook-form'
import useBoards from '../../../Contexts/Boards'
import { useEffect, useMemo } from 'react'
import { get } from 'http'
import toast from 'react-hot-toast'
import { CardBoard } from '../../../../src/components/CardBoard'
const WorkspacePage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {boards, getBoards, loading, error, newBoard} = useBoards()

    console.log(newBoard)

    useEffect(() => {
        if(!boards || !boards.length) {
            getBoards()
        }
    }, [newBoard])
    
    console.log(boards)
    console.log(loading)
    console.log(error)

    

    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Workspace</h1>
                <span>
                    <button onClick={()=>window.addBoard.showModal()} className="px-[2rem] py-1  bg-primary font-bold text-white rounded m-0">Add Board</button>
                </span>
            </div>

            {loading && !boards?<div>Loading...</div>:(
                
                <section className="flex p-5 space-x-4 flex-nowrap">

                {boards.length > 0 && boards.map(board => {
                    return <CardBoard board={board} key={board.id}/>
                })}

                </section>
            
            )}

            <dialog id="addBoard" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    
                    <button className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
                    </form>

                    <CreateBoard/>
                   
                </div>
            </dialog>

        </div>
    )
}

export default WorkspacePage