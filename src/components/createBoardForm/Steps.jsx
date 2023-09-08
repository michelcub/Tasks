import useBoards from "../../Contexts/Boards";

export const Steps = () => {

    const {steps, setSteps} = useBoards()

    return (
        <ul className="steps steps-vertical lg:steps-horizontal">
            <li onClick={()=>setSteps(1)} className={`step step-primary`}>Name</li>
            <li onClick={()=>setSteps(2)} className={`step ${Number(steps) > 1? 'step-primary': ''}`}>Descriptions</li>
            <li onClick={()=>setSteps(3)} className={`step ${Number(steps) > 2? 'step-primary': ''}`}>Members</li>
            <li onClick={()=>setSteps(4)} className={`step ${Number(steps) > 3? 'step-primary': ''}`}>Review</li>
        </ul>
    )
}