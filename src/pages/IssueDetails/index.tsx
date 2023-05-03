import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IssueData } from '../Home';
import axios from 'axios';
import { headers } from "../../lib/axios"
import { Header } from '../../components/Header';
import { ContainerIssueDetails, IssuesProfile, TextLink, WraperBody, WraperIssue, WraperProfile, WraperText } from './styles';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';


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
        <WraperIssue>
          <IssuesProfile>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
            <p>{issue.user.login}</p>
          </IssuesProfile>
          <IssuesProfile>
            <FontAwesomeIcon icon={faCalendarAlt} color="#3A536B" />
            <p>Há 1 dia</p>
          </IssuesProfile> 
          <IssuesProfile> 
            <FontAwesomeIcon icon={faComment} color="#3A536B" />
            <p>{issue.comments} comentários</p>
          </IssuesProfile>
        </WraperIssue>
       
      </WraperProfile>
      <WraperBody>
        <p><ReactMarkdown>{issue.body}</ReactMarkdown></p>
      </WraperBody>
      
      
    </ContainerIssueDetails>
  );
}