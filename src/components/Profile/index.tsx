
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import {  GithubProfile, LinkGithub, PhotoProfile, ProfilePage, WraperGithubProfile, WraperProfile } from "./styles";
import { GithubUserData } from "../../lib/axios";


interface PropsUser {
    content: GithubUserData; 
}

export function Profile({content}: PropsUser) {
    return (
        <WraperProfile>
                <PhotoProfile>
                    <img src={content.avatar_url} alt="" />
                </PhotoProfile>
                <ProfilePage>
                    <h2>{content.name}</h2>
                    <LinkGithub >
                        <a>github</a>
                        <FontAwesomeIcon icon={faUpRightFromSquare}  color="#3294F8"/>
                    </LinkGithub>
                    <p>
                       {content.bio}
                    </p>
                    <WraperGithubProfile>
                        <GithubProfile>
                            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
                            <p> {content.login}</p>
                        </GithubProfile>
                        
                        <GithubProfile>
                            <FontAwesomeIcon icon={faBuilding} color="#3A536B"/>
                            <p>{content.company}</p>
                        </GithubProfile>
                        <GithubProfile>
                            <FontAwesomeIcon icon={faUserFriends} color="#3A536B" />
                            <p>{content.followers} seguidores</p>
                        </GithubProfile> 
                    </WraperGithubProfile>
                </ProfilePage>
                
            </WraperProfile>
    )
}