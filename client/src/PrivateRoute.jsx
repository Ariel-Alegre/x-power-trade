import { Navigate,Route, Routes } from "react-router-dom";

export default function PrivateRoute({ element: Element, isAuthenticated, ...rest }) {
  return (
    <Routes>

    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Element {...props} />
        ) : (
          <Navigate to="/auth/login" replace />
        )
      }
      />
      </Routes>
  );
}
