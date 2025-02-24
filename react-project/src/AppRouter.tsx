import { ClaimantPage } from "_pages/claimant";
import { BrowserRouter as Router, Switch, Route, Redirect,Link } from "react-router-dom";


export {Link, useHistory, useLocation} from "react-router-dom";

export const routTo = (url: string, history:any, params?:any) => {
  history.push({
  pathname: url, 
  ...params
})
}

export const toSearchParams = (args:{[name:string]:string}) => {
  const  params = new URLSearchParams();
  for (const key in args) params.append(key, args[key]);
  return params.toString();
}

interface IAppRouterProps {
  baseHref?: string;
}

export const AppRouter = ({baseHref}:IAppRouterProps) => {
  return (
    <Router basename={baseHref ||"/"}>
      <Switch>
        <Route exact path="/claimants/:claimantId" component={ClaimantPage} />
        <Route path="*" />
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};
export default AppRouter;

