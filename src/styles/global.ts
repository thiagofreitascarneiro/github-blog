import { DefaultTheme, createGlobalStyle } from "styled-components";


interface IProps {
    theme: DefaultTheme;
  }

declare module "styled-components" {
    export interface DefaultTheme {
        'background'    : string;
        'base-profile'  :  string,
    
        'base-input'    :  string,

        'base-span'     :  string,
        'base-label'    :  string,
        'base-border'   :  string,
        'base-post'     :  string,

        'blue'          :  string,
        'base-title'    :  string,
        'base-subtitle' :  string,
        'base-text'     :  string,
    }
  }

export const GlobalStyle = createGlobalStyle<IProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        :focus {
            outline: 0;
            box-shadow: 0 0 0 2px;
        }
    }
    body {
        background: ${(props) => props.theme['background']};
        -webkit-font-smoothing: antialiased;
        a {
            text-decoration: none;
        }
    }
    
`