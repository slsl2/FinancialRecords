import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%; /* 1rem을 10px로 변환 (원래는 16px) */
    }

    body {
        font-size: 2rem;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
