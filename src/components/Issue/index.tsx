import { Link } from "react-router-dom";
import { ContainerIssue } from "./styles";

interface IssueData {
  title: string;
  body: string;
}

interface PropsIssue {
    content: IssueData;
    linkTo: string | {
        pathname: string;
        search?: string;
        hash?: string;
        state?: any;
      }; 
}

export function IssueUser( {content, linkTo}: PropsIssue ) {

    return (
        <ContainerIssue>
            <Link to={linkTo}>
                <h1>{content.title}</h1>
                <p>{content.body}</p>
            </Link>
        </ContainerIssue>
    )
}