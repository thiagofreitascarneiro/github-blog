import styled from "styled-components";

export const ContainerIssue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 416px;
    height: 265px;
    background:  ${(props) => props.theme['base-post']};
    border-radius: 10px;
    padding: 32px;

    h1 {
        line-height: 32px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        
        color: ${(props) => props.theme['base-title']};
    }

    p {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        margin: 20px auto;
        color:  ${(props) => props.theme['base-text']}; 
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        width: 355px;
        
    }
`