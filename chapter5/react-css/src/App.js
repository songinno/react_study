import { CssModules } from "./components/CssModules";
import { StyleJsx } from "./components/StyledJsx";
import { StyledComponents } from "./components/StyledComponents";
import { Emotion } from "./components/Emotion";
import { TailwindCss } from "./components/TailwindCss";

export const App = () => {
    return (
        <>
            <CssModules/>
            <StyleJsx />
            <StyledComponents />
            <Emotion/>
            <TailwindCss />
        </>
    );
};