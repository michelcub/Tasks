import { useForm } from "react-hook-form";
import useBoards from "../../Contexts/Boards";
import { create } from "domain";


export const Page3 = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {setSteps,setMember} = useBoards()
    const handleSetBoardMember = (data) => {
        setMember(data)
        console.log(data)
        
    }

    const handleNextStep = () => {
        
        setSteps(4)
    }
    
    console.log(useBoards.getState().newBoard)
    return (
        <div className='h-full'>
            <form className='flex flex-col justify-center space-y-4 px-6 h-full' onSubmit={handleSubmit(handleSetBoardMember)}>
                <label htmlFor="member" className='flex flex-col gap-2 w-full' >
                    Add member
                    <div className="flex gap-3">
                    <input list="members" {...register('member')} type="text" id='member' placeholder="member@example.com" className=" input input-bordered input-primary w-full" />
                <button type="submit" className="btn btn-primary">+</button>
                <datalist id="members">
                    <option value="aaaaa"/>
                    <option value="aaaasdasdaa"/>
                    <option value="aaaadadvwaa"/>
                    <option value="bbbbaaaaa"/>
                </datalist>
                    </div>
                
                </label>

                <div className="h-full">

                </div>

                <div className='w-full mt-auto'>
                    <button type="button" onClick={handleNextStep} className="btn btn-primary w-full">Save</button>
                </div>

            </form>
        </div>
    )
}