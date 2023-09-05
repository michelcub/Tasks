 import {useForm} from 'react-hook-form'
 
 export const Page1 = ({setStep, boardName, setBoardName}) => {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();

        const handleSetBoardName = (e) => {
            e.preventDefault()

        }

        return (
            <div className='h-full'>
                <form className='flex flex-col justify-center space-y-4 px-6 h-full' onSubmit={handleSubmit()}>
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