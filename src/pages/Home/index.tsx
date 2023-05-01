import { Header } from "../../components/Header";
import { ContainerHome, GithubProfile, PhotoProfile, Profile, WraperGithubProfile, WraperProfile } from "./styles";
import avatar  from "../../../public/avatar.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';


export function HomePage() {
    return (
        <ContainerHome>
            <Header />
            <WraperProfile>
                <PhotoProfile>
                    <img src={avatar} alt="" />
                </PhotoProfile>
                <Profile>
                    <h2>Cameron Williamson</h2>
                    <p>
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. 
                        Eu viverra massa quam dignissim aenean malesuada 
                        suscipit. Nunc, volutpat pulvinar vel mass.
                    </p>
                    <WraperGithubProfile>
                        <GithubProfile>
                            <FontAwesomeIcon icon={faGithub} color="#3A536B" />
                            <p>cameronwll</p>
                        </GithubProfile>
                        
                        <GithubProfile>
                            <FontAwesomeIcon icon={faBuilding} color="#3A536B"/>
                            <p>Rocketseat</p>
                        </GithubProfile>
                        <GithubProfile>
                            <FontAwesomeIcon icon={faUserFriends} color="#3A536B" />
                            <p>32 seguidores</p>
                        </GithubProfile> 
                    </WraperGithubProfile>
                </Profile>
            </WraperProfile>
          
        </ContainerHome>
    )
}