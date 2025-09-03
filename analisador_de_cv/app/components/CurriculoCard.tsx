import { Link } from "react-router"
import type { Curriculo } from "types"
import ScoreCircle from "./ScoreCircle"

const CurriculoCard  = ({curriculo: {id,jobTitle,companyName,feedback}}: {curriculo:Curriculo}) =>{
    return (
        <Link to={`/curriculo/${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                <h2 className="!text-black font-bold break-words">
                    {companyName}
                </h2>
                <h3 className="text-lg break-words text-gray-500">
                    {jobTitle}
                </h3>
            </div>
            <div className="flex-shrink-0">
                <ScoreCircle score={feedback.overallScore}/>
            </div>
            </div>
        </Link>
    )
}

export default CurriculoCard