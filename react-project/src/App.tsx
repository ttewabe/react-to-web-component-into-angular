import { RichTextEditor } from "richTextEditor";
import "./App.css";
import AppRouter from "./AppRouter";
import { Settlement } from "evaluation/evaluation-details/settlement";
import { SearchBox } from "common-ui/search-box/SearchBox";

interface IAppProps {
  baseHref?: string;
}
export default function App({baseHref}: IAppProps) {
  return (
    <div className="App">
      <SearchBox searchTitle="Search" onSubmit={(value) => console.log(value)}/>
      <Settlement formTitle="Settlment Amont with Area"/>
      <RichTextEditor />
      <AppRouter />
    </div>
  );
}