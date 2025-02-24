import { RichTextEditor } from "richTextEditor";
import "./App.css";
import AppRouter from "./AppRouter";
import { Settlement } from "evaluation/evaluation-details/settlement";

interface IAppProps {
  baseHref?: string;
}
export default function App({baseHref}: IAppProps) {
  return (
    <div className="App">
      <Settlement formTitle="Settlment Amont with Area"/>
      <RichTextEditor />
      <AppRouter />
    </div>
  );
}