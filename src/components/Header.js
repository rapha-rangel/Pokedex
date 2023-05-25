import { HeaderIcon, HeaderIconContent, HeaderPokedex, HeaderPokedexContent, HeaderPokedexContainer, TituloPokemon } from "./style";
import { MdCatchingPokemon } from "react-icons/md";
import SearchBar from "./SearchBar";
import Titulo from './imagens/pokedex_image.png';
const Header = ({
  namePokemon, 
  setOpenAutoComplete,
  setNamePokemon,
  handleBuscaPokemon, 
  handleClickPokemon,
  inputPokemonName,
  setInputPokemonName,
  openAutoComplete,
  setOpenSearch,
  openSearch
  }) =>{

  const handleOpen =()=>{
    setOpenSearch(prevState => !prevState)
  }


  return(
    <HeaderPokedex className="section">
      <HeaderPokedexContainer className="container">
        <HeaderPokedexContent>
        <TituloPokemon src={Titulo} alt="Titulo Pokedex"/>
        </HeaderPokedexContent>
        <HeaderIconContent openSearch={openSearch} onClick={handleOpen}> 
          <HeaderIcon openSearch={openSearch}>
            <MdCatchingPokemon/>
          </HeaderIcon> 
        </HeaderIconContent>
        <SearchBar
          namePokemon={namePokemon}
          setOpenAutoComplete={setOpenAutoComplete}
          setNamePokemon={setNamePokemon}
          handleBuscaPokemon={handleBuscaPokemon}
          handleClickPokemon={handleClickPokemon}
          inputPokemonName={inputPokemonName}
          setInputPokemonName={setInputPokemonName}
          openAutoComplete={openAutoComplete}
          openSearch={openSearch}
          />
      </HeaderPokedexContainer>
    </HeaderPokedex>
  )
}

export default Header;