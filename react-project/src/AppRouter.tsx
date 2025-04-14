import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import { ClaimantPage } from "_pages/claimant";
import { SearchBoxPage } from "common-ui/search-box/SearchBox";
import { TextFieldMaskedPage } from "common-ui/search-box/TextField";
import { SettlementPage } from "evaluation/evaluation-details/settlement";
import { RichTextEditorPage } from "richTextEditor";
import { TabPage } from "tabs/Tab";
import { Home } from "home/Home";
import { Textarea } from "text-area/TextArea";
import "./App.css";
import ParentComponent from "confirmaton-modal/ParentComponent";
import { useState } from "react";


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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename={baseHref || "/"}>
      <nav className="nav-bar">
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/search-box-page" onClick={() => setMenuOpen(false)}>Search Box Page</Link></li>
          <li><Link to="/tab" onClick={() => setMenuOpen(false)}>Tab Page</Link></li>
          <li><Link to="/settlement" onClick={() => setMenuOpen(false)}>Settlement Page</Link></li>
          <li><Link to="/text-field" onClick={() => setMenuOpen(false)}>Text Field</Link></li>
          <li><Link to="/text-area" onClick={() => setMenuOpen(false)}>Text Area</Link></li>
          <li><Link to="/rich-text-editor" onClick={() => setMenuOpen(false)}>RichTextEditor Page</Link></li>
          <li><Link to="/parent" onClick={() => setMenuOpen(false)}>Confirmation model</Link></li>
        </ul>
      </nav>

      <Switch>
        {/* Your routes */}
        <Route exact path="/claimants/:claimantId" component={ClaimantPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-box-page" component={SearchBoxPage} />
        <Route exact path="/tab" component={TabPage} />
        <Route exact path="/settlement" component={SettlementPage} />
        <Route exact path="/text-field" component={TextFieldMaskedPage} />
        <Route exact path="/text-area" component={Textarea} />
        <Route exact path="/rich-text-editor" component={RichTextEditorPage} />
        <Route exact path="/parent" component={ParentComponent} />
        <Route path="*" />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};