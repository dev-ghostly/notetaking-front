import { Outlet } from "react-router-dom";
import NotesLink from "../components/notesLink.component";
import {useDispatch, useSelector} from "react-redux";
import { addNote } from "../redux/slices/notesSlice";
import { notes } from "../types/notes";
import {useState} from "react";
export default function App() {

  const dispatch = useDispatch()
  const notes = useSelector((state: any) => state.notes.notes)
  const [id, setId] = useState<number>(1)
  function addNotesInStore() {
    const note: notes = {
      _id: `${id}`,
      title: `Note ${id}`,
      blocks: [],
      subnotes: []
    }
    dispatch(addNote(note))
    setId(id + 1)
  }
  return (
    <div className="flex">
      <div className="w-80 h-screen bg-slate-400">
        <div className="flex justify-center my-6">
          <button className="border w-72" onClick={() => addNotesInStore()}>Add notes</button>
        </div>
        <div className="ml-4">
          {notes.map((note: any) => (
            <NotesLink title={note.title} id={note._id} key={note._id} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}