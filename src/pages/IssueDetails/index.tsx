import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IssueData } from '../Home';
import axios from 'axios';
import { headers } from "../../lib/axios"
import { Header } from '../../components/Header';
import { ContainerIssueDetails, IssuesProfile, TextLink, WraperBody, WraperProfile, WraperText } from './styles';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export function IssueDetails() {
  const { number } = useParams<{ number: string }>();
  const [issue, setIssue] = useState<IssueData | null>(null);

  const userName = 'thiagofreitascarneiro';
const userIssuesGithub = 'github-blog';

  useEffect(() => {
    async function fetchIssue() {
      try {
        const response = await axios.get<IssueData>(
          `https://api.github.com/repos/${userName}/${userIssuesGithub}/issues/${number}`,
          { headers }
        );
        setIssue(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchIssue();
  }, [number]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <ContainerIssueDetails>
      <Header />
      <WraperProfile>
        <WraperText>
            <Link  to={'/'}>
                <TextLink width="67px">
                    <FontAwesomeIcon icon={faArrowLeft} color="#3294F8"/>
                    Voltar
                </TextLink>
            </Link>
            <a href="https://github.com/thiagofreitascarneiro/github-blog" target='_blank'>
                <TextLink>
                    Ver no github
                    <FontAwesomeIcon icon={faUpRightFromSquare}  color="#3294F8"/>
                </TextLink>
            </a> 
        </WraperText>
        <h1>{issue.title}</h1>
        <IssuesProfile>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
            <p>cameronwll</p>
            <p>Há 1 dia</p>
            <p>5 comentários</p>
        </IssuesProfile>
      </WraperProfile>
      <WraperBody>
        <p><ReactMarkdown>{issue.body}</ReactMarkdown></p>
      </WraperBody>
      
      
    </ContainerIssueDetails>
  );
}