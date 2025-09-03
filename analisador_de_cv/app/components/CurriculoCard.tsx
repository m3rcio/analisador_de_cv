import { Link } from "react-router"
import type { Curriculo } from "types"

const CurriculoCard  = ({curriculo}: {curriculo: Curriculo}) =>{
    return (
        <Link to={`/curriculo/${curriculo.id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="flex flex-col gap-2">
                <h2 className="!text-black font-bold break-words">
                    {curriculo.companyName}
                </h2>
                <h3 className="text-lg break-words text-gray-500">
                    {curriculo.jobTitle}
                </h3>
            </div>
        </Link>
    )
}

export default CurriculoCard