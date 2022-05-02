import { Switch, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={"/"}>
                    <LandingPage />
                </Route>
                <Route exact path={"/home"}>
                    <Home />
                </Route>
            </Switch>
        </>
    );
};

export default Routes;
