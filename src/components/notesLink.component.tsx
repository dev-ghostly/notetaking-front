import { Link } from "react-router-dom"

export default function notesLinkComponent({title, id} : {title: string, id: string}) {
    return (
        <div>
            <Link to={`note/${id}`}>{title}</Link>
        </div>
    )
}