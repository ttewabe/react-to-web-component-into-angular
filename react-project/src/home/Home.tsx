import { StyledCard } from "richTextEditor/RichTextEditor.style";
import { StyledHome } from "./Home.style";


export const Home = () => {
    return (
        <StyledHome>
            <StyledCard>
                <h1>Welcome to the Home Page</h1>
                <p>This is the home page of the application.</p>
                <p>Click on the links in the navigation bar to explore different pages.</p>
            </StyledCard>
        </StyledHome>
    );
}