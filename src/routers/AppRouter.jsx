import { useContext } from "react";
import { BrowserRouter as Router, Switch} from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import {AuthContext} from '../auth/AuthContext';
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";

const AppRouter = () => {

  const {user: {logged}} = useContext(AuthContext);
  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute isAuthenticated={logged} exact path="/login" component={LoginScreen} />
          <PrivateRoute isAuthenticated={logged} path="/" component={DashboardRoutes} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
