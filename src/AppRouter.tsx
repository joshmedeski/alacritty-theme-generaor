import { FC } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from "react-router-dom";
import AppLayout from "./AppLayout";
import GeneratorScreen from "./generator/GeneratorScreen";

const RouteWithLayout = (props: RouteProps) => {
  return (
    <AppLayout>
      <Route {...props} />
    </AppLayout>
  );
};

const AppRouter: FC = () => {
  return (
    <Router>
      <Switch>
        <RouteWithLayout path="/" component={GeneratorScreen} exact />
      </Switch>
    </Router>
  );
};

export default AppRouter;
