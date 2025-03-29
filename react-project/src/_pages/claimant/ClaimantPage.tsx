import { SearchBox } from "common-ui/search-box/SearchBox";
import { Settlement } from "../../evaluation/evaluation-details/settlement";
import { RichTextEditor } from "../../richTextEditor/RichTextEditor";
import { Container } from "./ClaimantPage.style";
import { MaskedInput } from "common-ui/search-box/TextField";
import { TabValue } from "tabs/TabValue";

export const ClaimantPage = () => {
  return (
    <Container>
      <Settlement formTitle="Settlement" />
      <RichTextEditor />
      <SearchBox
        searchTitle="Search"
        onSubmit={(value) => console.log(value)}
      />
      <MaskedInput label="Phone Number" />
      <TabValue />
    </Container>
  );
};
