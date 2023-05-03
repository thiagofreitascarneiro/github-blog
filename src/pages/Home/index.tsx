import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ContainerHome, WraperIssue, SearchFormContainer, Publication } from "./styles";
import { GithubUserData, getUser } from "../../lib/axios";
import { IssueUser } from "../../components/Issue";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { authToken } from '../../lib/axios'


export interface IssueData {
    number: string;
    id: number;
    title: string;
    body: string;
    user: {
      login: string;
    };
}

interface FormValues {
    search: string;
}

export function HomePage() {

    
    const headers = {
    Authorization: `token ${authToken}`,
    };

    const [userData, setUserData] = useState<GithubUserData | null>(null);
    const [issues, setIssues] = useState<IssueData[]>([]);

    const userName = 'thiagofreitascarneiro';
    const userIssuesGithub = 'github-blog';

    const { register, watch, } = useForm<FormValues>();

    async function fetchIssues(searchTerm?: string) {
        try {
            let url = `https://api.github.com/repos/${userName}/${userIssuesGithub}/issues`
            if (searchTerm) {
                url += `?q=${encodeURIComponent(`repo:${userName}/${userIssuesGithub}+${searchTerm}`)}`;
            }
            const response = await axios.get(url, { headers });
            console.log(response.data)
            setIssues(response.data);
        } catch (error) {
            console.error(error);
        }
    }

      useEffect(() => {
        getUser(userName).then(data => {
            setUserData(data);
        });
        fetchIssues(watch().search);
    }, [userName, userIssuesGithub, watch().search]);
    
      if (!userData) {
        return <div>Loading...</div>;
      }
    

    return (
        <ContainerHome>
            <Header />
            <Profile
                content={userData}
            />
             <Publication>
                <p>Publicações</p>
                <p>{issues.length} publicações</p>
             </Publication>
             
             <SearchFormContainer>
                <input 
                    type="text" 
                    placeholder="Busque conteúdo"
                    {...register("search")}
                    
                />
             </SearchFormContainer>
            <WraperIssue>
                {issues
                    .filter(issue => issue.title.includes(watch().search))
                    .map(issue => (
                        
                        <IssueUser
                            key={issue.id}
                            content={issue}
                            linkTo={`/issues/${issue.number}`}
                        />
                ))}
            </WraperIssue>
            

        </ContainerHome>
    )
}