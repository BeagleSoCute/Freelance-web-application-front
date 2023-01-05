import AppLayout from "layouts/AppLayout";
import AuthLayout from "layouts/AuthLayout";
import Login from "smart/Login";
import Register from "smart/Register";
import Dashboard from "smart/Dashboard";
import Profile from "smart/Profile";
import Logout from "smart/Logout";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "contexts/app.context";
import PrivateRoute from "smart/PrivateRoute";
// import "antd/dist/antd.css";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <AuthLayout>
          <AppLayout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />

              {/* <PrivateRoute path="/profile" element={<Profile />} /> */}
            </Routes>
          </AppLayout>
        </AuthLayout>
      </div>
    </AppProvider>
  );
};

export default App;
