import { IRichTextEditorProps, RichTextEditorPage } from "richTextEditor";
import {
  ISettlementProps,
  SettlementPage,
} from "../../evaluation/evaluation-details/settlement";
import { reactToWebComponent } from "./reactToWebComponent"; // is utitlity function that wraps the react and registers it as web component.
import { ISearchBoxProps, SearchBoxPage } from "common-ui/search-box/SearchBox";
import { TextFieldMaskedPage, ITextFieldProps } from "common-ui/search-box/TextField";
import { TabPage } from "tabs/Tab";

reactToWebComponent<ISettlementProps>(SettlementPage, "aw-settlement", {
  //rigister Settlement component as as a custom web component
  formTitle: "string",
  // onSave:"function",
});

reactToWebComponent<IRichTextEditorProps>(
  RichTextEditorPage,
  "aw-rich-text-editor",
  {}
);

reactToWebComponent<ISearchBoxProps>(SearchBoxPage, "aw-search-box", {
  searchTitle: "string",
  onSubmit: "function",
});

reactToWebComponent<ITextFieldProps>(TextFieldMaskedPage, "aw-text-field", {
  label: "string",
});

reactToWebComponent<any>(
  TabPage,
  "aw-tab-page",
  {}
);
