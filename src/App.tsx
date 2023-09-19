//
//
//

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Indexv1 } from "@pages/v1";
import { Error404 } from "@components/shared/Error404";
import { Indexv2 } from "@pages/v2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Indexv1 />,
        errorElement: <Error404 />,
    },
    {
        path: "/v2",
        element: <Indexv2 />,
        errorElement: <Error404 />,
    },
]);

export default function App() {
    //

    return <RouterProvider router={router} />;
}
