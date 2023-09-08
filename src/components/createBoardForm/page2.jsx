import {useForm} from 'react-hook-form'
import useBoards from '../../Contexts/Boards';

export const Page2 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setSteps, setDescription} = useBoards()

    const handleSetBoardDescription = (data) => {
        setDescription(data.boardDescriptions)
        console.log(data)
        setSteps(3)
    }

    return (
        <div className='h-full'>
            <form className='flex flex-col justify-center space-y-4 px-6 h-full' onSubmit={handleSubmit(handleSetBoardDescription)}>
                <label htmlFor="boardDescriptions" className='flex flex-col gap-2 w-full' >
                    Add board description
                <textarea {...register('boardDescriptions')} type="text" id='boardDescriptions' placeholder="Description ..." className=" input input-bordered input-primary w-full h-20 p-2"/>
                </label>
                <div className='w-full mt-auto'>
                    <button className="btn btn-primary w-full">Save</button>
                </div>
                
            </form>
        </div>
    )
}