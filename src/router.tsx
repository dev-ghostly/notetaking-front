import { createBrowserRouter } from "react-router-dom";
import AppTemplate from "./templates/app.template";
import Notes from "./components/notes.component";
const router = createBrowserRouter([
    {
        path: "/note-taking",
        children: [
            {
                path: "",
                element: <div>Test</div>
            },
            {
                path: "app",
                element: <AppTemplate />,
                children : [
                    {
                        path : "",
                        element : <div>Home</div>
                    },
                    {
                        path : "note",
                        children : [
                            {
                                path : "",
                                element : <div>Notes</div>
                            },
                            {
                                path : ":id",
                                element : <Notes />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

export default router;