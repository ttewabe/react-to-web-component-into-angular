import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { ClaimantPage } from "_pages/claimant";
import { SearchBoxPage } from "common-ui/search-box/SearchBox";
import { TextFieldMaskedPage } from "common-ui/search-box/TextField";
import { SettlementPage } from "evaluation/evaluation-details/settlement";
import { RichTextEditorPage } from "richTextEditor";
import { TabPage } from "tabs/Tab";
import "./App.css";
import { Home } from "home/Home";


export { Link, useHistory, useLocation } from "react-router-dom";

export const routTo = (url: string, history: any, params?: any) => {
  history.push({
    pathname: url,
    ...params
  })
}

export const toSearchParams = (args: { [name: string]: string }) => {
  const params = new URLSearchParams();
  for (const key in args) params.append(key, args[key]);
  return params.toString();
}

interface IAppRouterProps {
  baseHref?: string;
}

export const AppRouter = ({ baseHref }: IAppRouterProps) => {
  return (
    <Router basename={baseHref || "/"}>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/search-box-page">Search Box Page</Link></li>
          <li><Link to="/tab">Tab Page</Link></li>
          <li><Link to="/settlement">Settlement Page</Link></li>
          <li><Link to="/text-field">Text Field</Link></li>
          <li><Link to="/rich-text-editor">RichTextEditor Page</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/claimants/:claimantId" component={ClaimantPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-box-page" component={SearchBoxPage} />
        <Route exact path="/tab" component={TabPage} />
        <Route exact path="/settlement" component={SettlementPage} />
        <Route exact path="/text-field" component={TextFieldMaskedPage} />
        <Route exact path="/rich-text-editor" component={RichTextEditorPage} />
        <Route path="*" />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
export default AppRouter;

