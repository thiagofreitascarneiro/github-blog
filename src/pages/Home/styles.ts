import styled from "styled-components";

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 234px;
`

export const WraperIssue = styled.div`
    display: flex;
    width: 869px;
    margin-top: 48px;
    flex-wrap: wrap;
    gap: 32px;
    cursor: pointer;

`

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 1rem;
    
    
    input {
        width: 864px;
        height: 26px;
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        box-sizing: border-box;
        align-items: center;
        padding: 27px 16px;
        gap: 8px;
        background: ${props => props.theme["base-input"]};
        color: ${props => props.theme["base-text"]};
        border: 1px solid #1C2F41;
        border-radius: 6px;
        

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`

export const Publication = styled.div`
    display: flex;
    margin-top: 72px;
    margin-bottom: 12px;
    width: 864px;
    justify-content: space-between;

    p:first-child {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 29px;

        color: ${props => props.theme["base-subtitle"]};

    }

    p:nth-child(2) {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;

        text-align: right;

        color: ${props => props.theme["base-span"]};


    }
`