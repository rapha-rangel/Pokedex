import React, {useEffect, useState} from 'react';
import {obterPokemon, dataPokemon, buscaApiPokemon} from './components/api.js'
import Header from './components/Header.js';
import Pokedex from './components/Pokedex.js';
import CardPokemon from './components/CardPokemon.js';
import Loading from './components/Loading.js';
import Pagination from './components/Pagination.js';
import NotFoundPokemon from './components/NotFoundPokemon.js';

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
  const [notFound, setNotFound] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);


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
      
    } catch(err){
      console.log("erro no obter Pokemon")
    }
  }

  const emBuscaPokemon = async (pokemons)=> {
    try{
      const resultado = await buscaApiPokemon(pokemons)
      setNameBuscaPokemon(resultado)
      setLoading(false)
      setOpenCard(true)
    }catch(err){
      console.log("erro emBusca Pokemon" )
      setNotFound(true)
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
    if(namePokemon === ""){
      setNotFound(true)
    } else{
    emBuscaPokemon(namePokemon)
    setLoading(true)
    setNamePokemon("")
    setOpenSearch(false)
    }
  }

  useEffect(()=>{
    fetchPokemon()
  },[page, notFound])

  return (
  <>
      {notFound ?
        <NotFoundPokemon loading={loading} setNotFound={setNotFound}/>
        :
      <>
      {openCard ?
      <>
        {loading  
          ?
            <Loading/>
          :
            <CardPokemon 
              setOpenAutoComplete={setOpenAutoComplete}
              setOpenCard={setOpenCard}
              setPage={setPage}
              nameBuscaPokemon={nameBuscaPokemon}
            />
        }
      </>
      :
        <>
          <Header
            namePokemon={namePokemon} 
            setOpenAutoComplete={setOpenAutoComplete}
            setNamePokemon={setNamePokemon} 
            handleBuscaPokemon={handleBuscaPokemon} 
            handleClickPokemon={handleClickBuscaPokemon} 
            inputPokemonName={inputPokemonName} 
            setInputPokemonName={setInputPokemonName} 
            openAutoComplete={openAutoComplete}
            setOpenSearch={setOpenSearch}
            openSearch={openSearch}
          />
          <Pagination 
            page={page}
            setPage={setPage}
            itensPorPage={itensPorPage}
          />
          <Pokedex
            setLoading={setLoading}
            pokedex={pokedex}  
            loading={loading} 
            openAutoComplete={openAutoComplete}
            emBuscaPokemon ={emBuscaPokemon}
          />
        </>
    }
      </>
    }
  </>
  );
}

export default App;