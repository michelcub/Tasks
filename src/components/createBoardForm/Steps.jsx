export const Steps = ({step}) => {
    return (
        <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Name</li>
            <li className="step step-primary">Descriptions</li>
            <li className="step">Members</li>
            <li className="step">Review</li>
        </ul>
    )
}