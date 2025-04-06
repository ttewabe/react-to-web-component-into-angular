import { RichTextEditor } from "richTextEditor";
import "./App.css";
import AppRouter from "./AppRouter";
import { Settlement } from "evaluation/evaluation-details/settlement";
import { SearchBox } from "common-ui/search-box/SearchBox";
import { MaskedInput } from "common-ui/search-box/TextField";
import { TabValue } from "tabs/TabValue";

interface IAppProps {
  baseHref?: string;
}
export default function App({ baseHref }: IAppProps) {
  return (
    <div className="App">
      <SearchBox
        searchTitle="Search"
        onSubmit={(value) => console.log(value)}
      />
      <TabValue />
      <MaskedInput label="Phone Number" />
      <Settlement formTitle="Settlment Amont with Area" />
      <RichTextEditor />
      <AppRouter />
    </div>
  );
}
