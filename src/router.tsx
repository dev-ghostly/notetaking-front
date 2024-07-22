import { createBrowserRouter } from "react-router-dom";

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
                element: <div>App</div>
            }
        ]
    }
]);

export default router;