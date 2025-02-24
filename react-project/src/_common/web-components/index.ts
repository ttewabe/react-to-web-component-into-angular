import { IRichTextEditorProps, RichTextEditor } from "richTextEditor";
import { ISettlementProps, Settlement } from "../../evaluation/evaluation-details/settlement";
import { reactToWebComponent } from "./reactToWebComponent";// is utitlity function that wraps the react and registers it as web component.


reactToWebComponent<ISettlementProps>(Settlement, "aw-settlement", {//rigister Settlement component as as a custom web component
    formTitle:"string",
    // onSave:"function",
})

reactToWebComponent<IRichTextEditorProps>( RichTextEditor,"aw-rich-text-editor", {
})