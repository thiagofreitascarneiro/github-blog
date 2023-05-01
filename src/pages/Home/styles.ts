import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WraperProfile = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 864px;
    height: 212px;
    gap: 32px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 2px 28px 0px #00000033;
    margin-top: -85px;
    background: ${(props) => props.theme['base-profile']};
`

export const PhotoProfile = styled.div`
    display: flex;
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-left: 40px;
`

export const Profile = styled.div`
    
    display: flex;
    flex-direction: column;
    
    h2 {
        font-family: 'Nunito';
        margin-bottom: 8px;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 31.2px;
        color: ${(props) => props.theme['base-title']};
    }

    p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 25.6px;
        color: ${(props) => props.theme['base-text']};
    }
`

export const WraperGithubProfile = styled.div`
    width: 412px;
    display: flex;
    justify-content: space-evenly;
    gap: 24px;
    align-items: center;
`

export const GithubProfile = styled.div`
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