import styled from "styled-components";

// GridCard Style
export const GridCardStyle = styled.div`
box-sizing: border-box;
border-radius: 6px;
padding: 40px;
max-height: 288px;
max-width: 288px;
display: flex;
justify-content: center;
flex-direction: column;
    ${props=>{  
    switch(props.pokemon.types[0].type.name){
        case "grass":
            return`
            background: linear-gradient(to bottom right, #15803d, #4ade80)`
        case "fire":
            return`
            background: linear-gradient(to bottom right, #b91c1c, #f59e0b)`
        case "bug":
            return`
            background: linear-gradient(to bottom right, #4d7c0f, #a3e635)`
        case "water":
            return`
            background: linear-gradient(to bottom right, #1d4ed8, #60a5fa)`
        case "flying":
            return`
            background: linear-gradient(to bottom right, #0ea5e9, #7dd3fc)`
        case "normal":
            return`
            background: linear-gradient(to bottom right, #4b5563, #9ca3af)`
        case "poison":
            return`
            background: linear-gradient(to bottom right, #f43f5e, #fecdd3)`
        case "electric":
            return`
            background: linear-gradient(to bottom right, #eab308, #fde047)`
        case "ground":
            return`
            background: linear-gradient(to bottom right, #713f12, #a16207)`
        case "fairy":
            return`
        background: linear-gradient(to bottom right, #ec4899, #f9a8d4)`
        case "fighting":
            return`
            background: linear-gradient(to bottom right, #312e81, #4338ca)`
        case "psychic":
            return`
            background: radial-gradient(#7e22ce, #c026d3, #d97706)`
        case "rock":
            return`
            background: linear-gradient( to bottom right, #44403c, #78716c)`
        case "ice":
            return`
            background: linear-gradient( to bottom right, #0369a1, #38bdf8)`
        case "ghost":
            return`
            background: linear-gradient( to bottom right, #4c1d95, #6d28d9)`
        case "dragon":
            return`
            background: linear-gradient(to bottom right, #701a75, #e11d48)`
            default:
    }}}`
export const GridCardImgDiv = styled.div`
display: flex;
justify-content: center;
`
export const GridCardImg = styled.img`
scale: 1.5;
`
export const GridCardInfoDiv = styled.div`
display: flex;
flex-direction: column;
padding-top: 30px;
`
export const GridCardInfo = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding-top: 10px;
`
export const GridCardInfoText = styled.span`
font-size: 18px;
line-height: 28px;
font-weight: 700;
`
export const GridCardInfoType = styled.span`
box-sizing: border-box;
border: 2px solid black;
padding: 8px 12px;
border-radius: 20px;
font-weight: 700;
    ${props =>{
        switch(props.pokemon.types[0].type.name){
        case "grass":
            return`
            background: linear-gradient(to bottom right, #15803d, #4ade80)`
        case "fire":
            return`
            background: linear-gradient(to bottom right, #b91c1c, #f59e0b)`
        case "bug":
            return`
            background: linear-gradient(to bottom right, #4d7c0f, #a3e635)`
        case "water":
            return`
            background: linear-gradient(to bottom right, #1d4ed8, #60a5fa)`
        case "flying":
            return`
            background: linear-gradient(to bottom right, #0ea5e9, #7dd3fc)`
        case "normal":
            return`
            background: linear-gradient(to bottom right, #4b5563, #9ca3af)`
        case "poison":
            return`
            background: linear-gradient(to bottom right, #f43f5e, #fecdd3)`
        case "electric":
            return`
            background: linear-gradient(to bottom right, #eab308, #fde047)`
        case "ground":
            return`
            background: linear-gradient(to bottom right, #713f12, #a16207)`
        case "fairy":
            return`
        background: linear-gradient(to bottom right, #ec4899, #f9a8d4)`
        case "fighting":
            return`
            background: linear-gradient(to bottom right, #312e81, #4338ca)`
        case "psychic":
            return`
            background: radial-gradient(#7e22ce, #c026d3, #d97706)`
        case "rock":
            return`
            background: linear-gradient( to bottom right, #44403c, #78716c)`
        case "ice":
            return`
            background: linear-gradient( to bottom right, #0369a1, #38bdf8)`
        case "ghost":
            return`
            background: linear-gradient( to bottom right, #4c1d95, #6d28d9)`
        case "dragon":
            return`
            background: linear-gradient(to bottom right, #701a75, #e11d48)`
            default:
    }}}
`
export const GridCardInfoSpan = styled.span`
padding: 8px 4px 0px 4px;
`

// SearchBar Style
export const SearchBarBox = styled.div`
position: absolute;
z-index: 1;
width: 100%;
max-height:300px;
top: 150px;
` 
export const SearchBarWarp = styled.div`
position: relative;
max-width: 89%;
margin-left: 25px ;
`
export const SearchBarInput = styled.div`
background-color: white;
width: 100%;
border-radius: 5px;
box-shadow:  0px 1px 5px 3px rgba(0,0,0,0.12);
`
    export const InputText = styled.input`
    height: 55px;
    width: 100%;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0 60px 0 20px;
    font-size: 18px;
    box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
    `
    export const AutocompleteBoxEmpty = styled.div`
    max-height: 280px;
    overflow-y: auto;
    background-color: white;
    opacity: 0;
    pointer-events: none;
    `
    export const AutocompleteBox = styled.div`
    padding: 20px 10px;
    max-height: 200px;
    overflow-y: scroll;
    background-color: white;
    opacity: 1;
    pointer-events: auto;
    `
        export const SearchBarListName = styled.li`
    list-style: none;
    padding: 8px 12px;
    width: 100%;
    cursor: default;
    border-radius: 3px;
    display: block;
    &:hover{
        background-color: #d4d4d4;
    }
    `
export const SearchButton = styled.button`
height:55px ;
width: 85px;
position: absolute;
top:0;
right: 0;
text-align: center;
font-size: 18px;
color: blue;
`

// APP Style
export const HeaderPokedex = styled.div`
background-color: #87CEEB;
position: fixed;
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 20px 50px 106px 50px;
`
export const TituloPokemon = styled.img`
    width: 200px;
    height: 80px;
 
`
export const BackgroundImageCard = styled.div`
width: 100%;
background-image: url("https://i.pinimg.com/564x/f6/a1/8a/f6a18ac56651ce4f9ca7e0230706a0b6.jpg");
background-size: contain;
`
export const BackgroundImage =styled.div`
width:100%;
background-image: url("https://i.pinimg.com/564x/f6/a1/8a/f6a18ac56651ce4f9ca7e0230706a0b6.jpg");
background-repeat: no-repeat;
background-size: cover;
`

// CardPokemon Style
export const CardPokemonBox = styled.div`
width: 90%;
height: 100vh;
`
export const CardPokemonStyle=styled.div`
border: 5px solid black;
border-radius: 10px;
width: 45%;
height: 655px;
margin-left: 400px;
background-color: #CB2323;
`
export const CardPokemonHeader =styled.div`
width:100%;
display:flex;
flex-direction: row;
`
export const CardPokemonCaseLed = styled.div`
margin: 10px 10px;
border: 3px solid black;
width: 10px;
border-radius: 40px;
height: 30px;
padding: 30px;
background-color:white;
`
export const CardPokemonLed = styled.div`
position: absolute;
top: 12px;
left: 412px;
margin: 10px 10px;
border:1px solid black;
border-radius: 30px;
padding: 25px;
background: linear-gradient(to bottom right, #00FFFF, #0000FF);
`
export const CardPokemonLedSmall = styled.div`
position: absolute;
top: 12px;
margin: 10px 10px;
border:1px solid black;
border-radius: 15px;
padding: 10px;
${props =>{
    switch(props.color){
    case "red":
        return`
        left:485px;
        background: linear-gradient(to bottom right, #F92A2A, #E50707)`
    case "yellow":
        return`
        left:515px;
        background: linear-gradient(to bottom right, #FCFABB, #FAF309)`
    case "green":
        return`
        left:545px;
        background: linear-gradient(to bottom right, #CBFCBB, #34AF0D)`
        default:
        return`
        background : white`
}}}`
export const CardPokemonIconButton = styled.button`
position: absolute;
border: 8px solid black;
border-radius: 100%;
background-color: black;
top:20px;
left:875px;
`
export const CardPokemonImageDiv =styled.div`
display: flex;
justify-content:center;
border: 3px solid black;
border-radius: 30px;
height: 300px;
margin: auto 50px;
${props=>{  
    switch(props.pokemon.types[0].type.name){
        case "grass":
            return`
            background: linear-gradient(to bottom right, #15803d, #4ade80)`
        case "fire":
            return`
            background: linear-gradient(to bottom right, #b91c1c, #f59e0b)`
        case "bug":
            return`
            background: linear-gradient(to bottom right, #4d7c0f, #a3e635)`
        case "water":
            return`
            background: linear-gradient(to bottom right, #1d4ed8, #60a5fa)`
        case "flying":
            return`
            background: linear-gradient(to bottom right, #0ea5e9, #7dd3fc)`
        case "normal":
            return`
            background: linear-gradient(to bottom right, #4b5563, #9ca3af)`
        case "poison":
            return`
            background: linear-gradient(to bottom right, #f43f5e, #fecdd3)`
        case "electric":
            return`
            background: linear-gradient(to bottom right, #eab308, #fde047)`
        case "ground":
            return`
            background: linear-gradient(to bottom right, #713f12, #a16207)`
        case "fairy":
            return`
        background: linear-gradient(to bottom right, #ec4899, #f9a8d4)`
        case "fighting":
            return`
            background: linear-gradient(to bottom right, #312e81, #4338ca)`
        case "psychic":
            return`
            background: radial-gradient(#7e22ce, #c026d3, #d97706)`
        case "rock":
            return`
            background: linear-gradient( to bottom right, #44403c, #78716c)`
        case "ice":
            return`
            background: linear-gradient( to bottom right, #0369a1, #38bdf8)`
        case "ghost":
            return`
            background: linear-gradient( to bottom right, #4c1d95, #6d28d9)`
        case "dragon":
            return`
            background: linear-gradient(to bottom right, #701a75, #e11d48)`
            default:
    }}}
`
export const CardPokemonImage = styled.img`
scale: 1;
`
export const CardPokemonInfoBoxDiv =styled.div`
border: 3px solid black;
border-radius: 30px;
height: 200px;
margin: 30px 50px;
background-color: #d4d4d4;
padding: 15px 30px;
display: flex;
flex-direction: row;
`
export const CardPokemonInfoBox =styled.div`
display: flex;
flex-direction: column;
width: 50%;
`
export const CardPokemonInfo = styled.div`
display: flex;
flex-direction: column;
`
export const InfoData =styled.span`
font-size: 15px;
font-weight: bold;
margin-left: ${props => props.dataPokemonAbility ? '20px': null};
margin: ${props => props.dataPokemon? '0px 0px 10px 20px' : null};
text-transform: ${props => props.dataPokemon || props.dataPokemonAbility? 'capitalize' : null};
`

// Pagination Style
export const PaginationDiv =styled.div`
padding-bottom: 20px;
display:flex;
align-items: center;
`
export const ButtonPagination =styled.button`
border: 2px solid black;
font-weight: bold;
border-radius: 30px;
padding:${props=>props.plus? '2px 8px': '2px 12px'};
background: white;
margin: 5px;
`
export const PaginationSpan =styled.span`
font-weight: bold;
font-size: 32px;
`

// Pokedex Style
export const PokedexBox = styled.div`
margin: auto;
width: 100%;
padding: 64px 40px 0px 40px;
`
export const PokedexGrid = styled.div`
margin: auto;
display: grid;
grid-template-columns: repeat(4, minmax(0, 1fr));
gap: 16px;
padding: 208px 0px 40px 0px; 
position: ${props=>props.blur? "relative": null};
filter: ${props=>props.blur? "blur(8px)": null}
`

// Loading Style
export const LoadingDiv = styled.div`
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`
export const LoadingText =styled.h1`
font-weight: bold;
font-size: 54px;
text-align: center;
`


