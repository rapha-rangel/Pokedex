import { NotFoundButton, NotFoundContainer, NotFoundDescription, NotFoundTitle, NotFoundSection, NotFoundImage } from "./style";
import derrotado from './imagens/derrotado.png'
const NotFoundPokemon = ({setNotFound}) =>{
  const handleNotFound =()=>{
    setNotFound(false)
}
  return (
    <NotFoundSection className="section">
      <NotFoundContainer className="container" >
        <NotFoundTitle >OPS...</NotFoundTitle>
        <NotFoundDescription >O Pokemon não foi encontardo, por favor clique no botão abaico para voltar para Pokedex </NotFoundDescription>
        <NotFoundImage src={derrotado} alt="pokemon_derrotado"/>
        <NotFoundButton onClick={handleNotFound} >Voltar a Pokedex</NotFoundButton>
      </NotFoundContainer>
    </NotFoundSection>
  )
}

export default NotFoundPokemon;