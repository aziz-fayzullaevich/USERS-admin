import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import App from "../app/app";
import UsersPage from "../pages/users";
import CreateUserPage from "../pages/users/create";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.USERS,
        element: <UsersPage />,
      },
      {
        path: ROUTES.CREATE_USER,
        element: <CreateUserPage />,
      },
    ],
  },
]);
