import { SearchBoxPage } from "common-ui/search-box/SearchBox";
import { SettlementPage } from "../../evaluation/evaluation-details/settlement";
import { RichTextEditorPage } from "../../richTextEditor/RichTextEditor";
import { Container } from "./ClaimantPage.style";
import { TextFieldMaskedPage } from "common-ui/search-box/TextField";
import { TabPage } from "tabs/Tab";
import { Home } from "home/Home";

export const ClaimantPage = () => {
  return (
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
