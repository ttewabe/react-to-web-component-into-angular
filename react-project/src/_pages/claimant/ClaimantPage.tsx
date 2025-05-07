import { SearchBoxPage } from "common-ui/search-box/SearchBox";
import { SettlementPage } from "../../evaluation/evaluation-details/settlement";
import { RichTextEditorPage } from "../../richTextEditor/RichTextEditor";
import { Container } from "./ClaimantPage.style";
import { TextFieldMaskedPage } from "common-ui/search-box/TextField";
import { TabPage } from "tabs/Tab";
import { Home } from "home/Home";

export const ClaimantPage = () => {
  return (
    // we may not render all the components at once, but for now we will render them all to test the layout
    // and the responsiveness of the components
    <Container>
      <Home />
      <SearchBoxPage
        searchTitle="Search"
        onSubmit={(value) => console.log(value)}
      />
      <TabPage />
      <SettlementPage formTitle="Settlement" />
      <TextFieldMaskedPage label="Phone Number" />
      <RichTextEditorPage />
    </Container>
  );
};
