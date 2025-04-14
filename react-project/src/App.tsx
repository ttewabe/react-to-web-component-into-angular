import ParentComponent from "confirmaton-modal/ParentComponent";
import "./App.css";
import { AppRouter } from "./AppRouter";


interface IAppProps {
  baseHref?: string;
}
export default function App({ baseHref }: IAppProps) {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}
