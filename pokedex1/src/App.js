import React, {useEffect, useState} from 'react';
import {obterPokemon, dataPokemon, buscaApiPokemon} from './components/api.js'
import SearchBar from './components/SearchBar';
import Pokedex from './components/Pokedex';
import CardPokemon from './components/CardPokemon';
import{BackgroundImage, HeaderPokedex, TituloPokemon, BackgroundImageCard, LoadingDiv, LoadingText} from './components/style';
import Pagination from './components/Pagination';
import pokedex_image from './components/imagens/pokedex_image-removebg-preview.png';



const App =()=> {
  const [page, setPage] = useState(0)
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);
  const [namePokemon, setNamePokemon] = useState("");
  const [nameBuscaPokemon, setNameBuscaPokemon] = useState("");
  const [inputPokemonName, setInputPokemonName] = useState();
  const [pokemonListName, setPokemonListName] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [openAutoComplete, setOpenAutoComplete] = useState(false);

  const itensPorPage = 24;
  const fetchPokemon = async () => {
    try{
      setLoading(true)
      const resultado = await obterPokemon()
      const promise = resultado.results.map( async (pokemon)=> {
        return await dataPokemon(pokemon.url)})
      const result = await Promise.all(promise)
        setPokemonListName(result.map((pokemonName)=>{
        return(
        pokemonName.name
        )}))
      setLoading(false)
      setPokedex(result.slice(itensPorPage*page,(itensPorPage+(itensPorPage*page))))
      console.log(result)
      
    } catch(err){
      console.log("erro no obter Pokemon")
    }
  }

  const emBuscaPokemon = async (pokemons)=> {
    try{
      setLoading(true)
      const resultado = await buscaApiPokemon(pokemons)
      setNameBuscaPokemon(resultado)
      console.log(resultado)
      setLoading(false)
    }catch(err){
      console.log("erro emBusca Pokemon" )
    }
  }

  const handleBuscaPokemon =(e)=>{
    setNamePokemon(e.target.value)
    console.log(e.target.value)
    if(e.target.value){
      setOpenAutoComplete(true)
      const pokemonListFilter = pokemonListName.filter((data)=>{
        return data.toLocaleLowerCase().startsWith(e.target.value.toLocaleLowerCase())
      })
      const pokemonListMap =[];
      pokemonListFilter.map((data)=>{
          console.log(pokemonListMap)
          return pokemonListMap.push(data)
        })
      if(pokemonListMap.length){
        setInputPokemonName(pokemonListMap)
        setOpenAutoComplete(true)
        }else{
          setOpenAutoComplete(false)
      }
    } else{
      setOpenAutoComplete(false)
      setOpenCard(false)
      console.log(openAutoComplete)
    }
  }

  const handleClickBuscaPokemon = ()=>{
    emBuscaPokemon(namePokemon)
    console.log(namePokemon)
    setOpenCard(true)
    setNamePokemon("")
  }

  useEffect(()=>{
    fetchPokemon()
  },[page, openCard])

  return (
    <>
      {openCard ?
        <BackgroundImageCard>
        {loading  ?
          <LoadingDiv>
            <LoadingText>Carregando...</LoadingText>
          </LoadingDiv>
        :
          <CardPokemon 
            setOpenAutoComplete={setOpenAutoComplete}
            setOpenCard={setOpenCard}
            setPage={setPage}
            nameBuscaPokemon={nameBuscaPokemon}/>
        }
        </BackgroundImageCard>
        :
        <BackgroundImage>
          <HeaderPokedex>
            <TituloPokemon 
              src={pokedex_image} 
              alt="Pokedex Name"/>
              <Pagination 
                page={page}
                setPage={setPage}
                itensPorPage={itensPorPage}/>
              <SearchBar 
                namePokemon={namePokemon} 
                setOpenAutoComplete={setOpenAutoComplete}
                setNamePokemon={setNamePokemon} 
                handleBuscaPokemon={handleBuscaPokemon} 
                handleClickPokemon={handleClickBuscaPokemon} 
                inputPokemonName={inputPokemonName} 
                setInputPokemonName={setInputPokemonName} 
                openAutoComplete={openAutoComplete}
              />
          </HeaderPokedex>
          <Pokedex 
            pokedex={pokedex}  
            loading={loading} 
            openAutoComplete={openAutoComplete}
          />
        </BackgroundImage>
      }
    </>
  );
}

export default App;