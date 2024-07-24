import { createBrowserRouter } from "react-router-dom";
import AppTemplate from "./templates/app.template";
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
                    }
                ]
            }
        ]
    }
]);

export default router;