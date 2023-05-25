import { LoadingBar,LoadingContainer,LoadingContent, LoadingSection, LoadingText } from "./style";

const Loading = () =>{
  return(
    <LoadingSection>
      <LoadingContainer>
        <LoadingBar>
          <LoadingContent></LoadingContent>
        </LoadingBar>
        <LoadingText>Carregando...</LoadingText> 
      </LoadingContainer>
    </LoadingSection>
  )
}

export default Loading;