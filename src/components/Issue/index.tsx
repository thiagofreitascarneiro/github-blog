import { ContainerIssue } from "./styles";

interface IssueData {
  title: string;
  body: string;
}

interface PropsIssue {
    content: IssueData; 
}

export function IssueUser( {content}: PropsIssue ) {

    return (
        <ContainerIssue>
            <h1>{content.title}</h1>
            <p>{content.body}</p>
        </ContainerIssue>
    )
}