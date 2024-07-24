import { useParams } from "react-router-dom"

export default function notes(){

    let { id } = useParams()
    
    return (
        <div>Notes {id}</div>
    )
}