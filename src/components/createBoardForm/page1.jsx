 import {useForm} from 'react-hook-form'
import useBoards from '../../Contexts/Boards';
 
 export const Page1 = () => {
    const {steps, setSteps, setName} = useBoards()
        const { register, handleSubmit, watch, formState: { errors } } = useForm();

        const handleSetBoardName = (data) => {
            setName(data.boardName)
            console.log(data)
            setSteps(2)
        }

        
        return (
            <div className='h-full'>
                <form className='flex flex-col justify-center space-y-4 px-6 h-full' onSubmit={handleSubmit(handleSetBoardName)}>
                    <label htmlFor="nameBoardInput" className='flex flex-col gap-2 w-full'>
                        Add name board
                    <input {...register('boardName')} type="text" id='nameBoardInput' placeholder="Add project name" className=" input input-bordered input-primary w-full" />
                    </label>
                    <div className='w-full mt-auto'>
                        <button className="btn btn-primary w-full">Save</button>
                    </div>
                    
                </form>
            </div>
        )
 }