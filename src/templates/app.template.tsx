import { Outlet } from "react-router-dom";
import NotesLink from "../components/notesLink.component";
export default function App() {
  return (
    <div className="flex">
      <div className="w-80 h-screen bg-slate-400">
        <div className="flex justify-center my-6">
          <button className="border w-72">Add notes</button>
        </div>
        <div>
          <NotesLink />
        </div>
      </div>
      <Outlet />
    </div>
  );
}