import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ContainerHome, WraperIssue } from "./styles";
import { GithubUserData, getUser } from "../../lib/axios";
import { IssueUser } from "../../components/Issue";
import axios from 'axios';


interface IssueData {
    id: number;
    title: string;
    body: string;
    user: {
      login: string;
    };
  }

export function HomePage() {

    const [userData, setUserData] = useState<GithubUserData | null>(null);
    const [issues, setIssues] = useState<IssueData[]>([]);
    const userName = 'thiagofreitascarneiro';
    const userIssuesGithub = 'github-blog';

    async function fetchIssues() {
        try {
            const response = await axios.get
            (`https://api.github.com/repos/${userName}/${userIssuesGithub}/issues`);
            setIssues(response.data);
            console.log(response.data)
          } catch (error) {
            console.error(error);
          }
    }
    
    useEffect(() => {
        getUser(userName).then(data => {
          setUserData(data);
          console.log(data);
        });
        fetchIssues();
      }, [userName, userIssuesGithub]);
    
      if (!userData) {
        return <div>Loading...</div>;
      }

    return (
        <ContainerHome>
            <Header />
            <Profile
                content={userData}
             />
            <WraperIssue>
                {issues.map(issue => (
                    <IssueUser
                        key={issue.id}
                        content={issue}
                    />
                ))}
            </WraperIssue>
            

        </ContainerHome>
    )
}