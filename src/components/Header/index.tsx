import { ContainerHeader, WrapperContainer } from "./styles";
import logo from '../../assets/logo.png';
import effectEsq from '../../assets/effectEsq.png';
import effectDir from '../../assets/effectDir.png';

export function Header() {
    return (
        <ContainerHeader>
            <WrapperContainer>
                
                <img src={effectEsq} alt="" />
                <img src={logo} alt="" />
                <img src={effectDir} alt="" />
            </WrapperContainer>
             
        </ContainerHeader>
        
        
    )   
   
}