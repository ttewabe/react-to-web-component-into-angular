import { Tabs } from "./Tabs";
import { motion } from "framer-motion";

export const TabPage = () => {
    return (
        <div>
            <Tabs >
                <div title="Tab 1">
                    Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/ LOR-əm IP-səm) is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting.

                    Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsum ("pain itself").!
                </div>

                <div title="Tab 2"
                    style={{
                        padding: "2px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(158, 148, 148, 0.1)",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                        width: "80 %",
                        minWidth: "300px",
                        height: "auto",
                    }}
                >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                        <h3 style={{ marginBottom: "3px" }}>Tab 2</h3>
                        <p>
                            Versions of the Lorem ipsum text have been used in typesetting at least since the 1960s, when it was popularized by advertisements for Letraset transfer sheets. Lorem ipsum was introduced to the digital world in the mid-1980s, when Aldus employed it in graphic and word-processing templates for its desktop publishing program PageMaker.
                        </p>
                    </motion.div>
                </div>

                <div title="Tab 3">
                    <img src="/bridge.png" alt="Image" style={{ maxHeight: "50vh", minHeight: "5vh", alignContent: "center", borderRadius: "10px" }} />
                </div>
            </Tabs>
        </div>
    );
};
