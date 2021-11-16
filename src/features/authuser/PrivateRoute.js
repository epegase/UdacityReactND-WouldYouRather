import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuthedUser } from "./authuserSlice";

export function PrivateRoute({ children, ...rest }) {
  const authuser = useSelector(selectAuthedUser);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return authuser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
