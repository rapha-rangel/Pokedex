import setNotFound from '../App.js'

export const buscaApiPokemon = async (pokemon) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try{
        const resultado = await fetch(url)
        return await resultado.json()
    } catch(err){
        setNotFound(true)
        console.log("erro na busca api")
    }
}

export const obterPokemon = async (limit=151)=> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
    try{
        const resultado = await fetch(url)
        return await resultado.json()
    }catch(err){
        console.log("erro no obter api")
    }
}


    
export const dataPokemon = async (url) =>{
    try{
        const resultado = await fetch(url)
        return await resultado.json()
    }catch(err){
        console.log("erro na data pokemon api")
    }
}
        
