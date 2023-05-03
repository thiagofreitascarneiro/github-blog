import styled from "styled-components";

export const ContainerIssueDetails = styled.div`
    display :flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`

export const WraperProfile = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 864px;
    height: 212px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px #00000033;
    margin-top: -85px;
    background: ${(props) => props.theme['base-profile']};
    padding: 32px;

    h1 {
        font-family: 'Nunito';
        margin-top: 20px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31px;
        color: ${(props) => props.theme['base-title']};

    }
`

export const WraperBody = styled.div`
    display: flex;
    width: 800px;
    margin-top: 40px;
    margin-bottom: 40px;
        p {
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            color: ${(props) => props.theme['base-text']};
            
        }

        a {
            color: ${(props) => props.theme['blue']};
        }
`

export const WraperText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 800px;
   
`

interface TextProps {
    width?: string;
  }
  

export const TextLink = styled.p<TextProps>`
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    color: ${(props) => props.theme['blue']};
    align-items: center;
    justify-content: space-between;
    width: ${props => props.width || '115px'};
    display: flex;
`
export const IssuesProfile = styled.div`
    display: flex;
    align-items: center;
    padding: 0px;
    gap: 8px;
    margin-top: 24px; 
    height: 26px;

    p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        
        line-height: 25.6px;
        color: ${(props) => props.theme['base-subtitle']};
    }
`
