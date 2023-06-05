import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { RootState, store } from "../store/store";
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";

function Router() {

  const PrivateRoute = () => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const token = localStorage.getItem('token')

    return token ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace />
    );
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter >
  );
}

export default Router;