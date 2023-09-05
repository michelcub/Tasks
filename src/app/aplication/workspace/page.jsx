'use client'

import {CreateBoard} from '../../../../src/components/createBoardForm/CreateBoard'
import {useForm } from 'react-hook-form'


const WorkspacePage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    return (
        <div className="p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Workspace</h1>
                <span>
                    <button onClick={()=>window.addBoard.showModal()} className="px-[2rem] py-1  bg-primary font-bold text-white rounded m-0">Add Board</button>
                </span>
            </div>
            <section>

            <div className="card w-96 bg-base-100 shadow-xl bg-white shadow">
  <figure className="px-10 pt-10">
    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

            </section>

            <dialog id="addBoard" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                    
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    <CreateBoard/>
                   
                </div>
            </dialog>

        </div>
    )
}

export default WorkspacePage