import { createBrowserRouter, redirect } from "react-router-dom";
import AppLayout from "layouts/AppLayout";
import Login from "smart/Login";
import Register from "smart/Register";
import Logout from "smart/Logout";
import { AppProvider } from "contexts/app.context";
import LoginAndRegisterLayout from "layouts/LoginAndRegisterLayout";
import { checkIsAuth } from "helpers/auth.helper";
import { notification } from "helpers/notification.helper";

import HomeSection from "smart/Home/HomeSection";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppProvider>
        <AppLayout />
      </AppProvider>
    ),
    //   errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomeSection /> },
      { path: "/logout", element: <Logout /> },
     
      {
        element: <LoginAndRegisterLayout />,
        loader: () => {
          const isAuth = checkIsAuth();
          // if (isAuth) {
          //   notification({
          //     type: "warning",
          //     message: "Warning",
          //     description: "You already have loged in into the system!",
          //   });
          //   return redirect("/dashboard");
          // }
          // return null;
        },
        children: [
          { path: "login", element: <Login /> },
          { path: "register", element: <Register /> },
        ],
      },
    ],
  },
]);
