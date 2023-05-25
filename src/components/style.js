import styled, {createGlobalStyle, keyframes} from "styled-components";


/*-------------------------Responsive----------------------------------*/
const responsive ={
	small: "(min-width: 320px)",
	medium: "(min-width: 540px)",
	large: "(min-width: 768px)",
	exLarge: "(min-width: 1024px)"
}
/*-------------------------Globalstyle----------------------------------*/
export const GlobalStyle = createGlobalStyle`
	*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
	}
	html{
		scroll-behavior: smooth;
	}

	body{
		
	}
	.section {
		padding: 2rem 0 3rem 0;
	}
	.container {
		margin-right: 1rem;
		margin-left: 1rem;
		@media ${responsive.large}{
			margin-right: 2rem;
			margin-left: 2rem;
		}
	}
	.grid {
		display: grid;
		gap: 1.5rem;
	}
`
// -------------------------------------------GridCard Style---------------------------------------
export const gridMove = keyframes`
0%{}
25%{ 
	transform: translateY(-1rem);
}
75%{
	transform: translateY(0);
}
`
export const GridCardStyle = styled.div`
	width: 90%;
	cursor: pointer;
	border-radius: 1.5rem;
	padding: 1rem 0;
  ${props=>{  
    switch(props.pokemon.types[0].type.name){
		case "grass":
			return`
			background: linear-gradient(to bottom right, #54D391, #DDF5E9)`
		case "fire":
			return`
			background: linear-gradient(to bottom right, #FA8888, #FFD48C)`
		case "bug":
			return`
			background: linear-gradient(to bottom right, #E2F4CA, #a3e635)`
		case "water":
			return`
			background: linear-gradient(to bottom right, #7597F5, #B7D7FF)`
		case "flying":
			return`
			background: linear-gradient(to bottom right, #ADC0F3, #7dd3fc)`
		case "normal":
			return`
			background: linear-gradient(to bottom right, #9C9D9F, #9ca3af)`
		case "poison":
			return`
			background: linear-gradient(to bottom right, #F87E93, #fecdd3)`
		case "electric":
			return`
			background: linear-gradient(to bottom right, #eab308, #FFEE91)`
		case "ground":
			return`
			background: linear-gradient(to bottom right, #BF7F46, #FFEFD8)`
		case "fairy":
			return`
			background: linear-gradient(to bottom right, #FA98C8, #f9a8d4)`
		case "fighting":
			return`
			background: linear-gradient(to bottom right, #736FDC, #8076FA)`
		case "psychic":
			return`
			background: radial-gradient(#7e22ce, #EC82F9, #d97706)`
		case "rock":
			return`
			background: linear-gradient( to bottom right, #ADABAA, #787878)`
		case "ice":
			return`
			background: linear-gradient( to bottom right, #0092E1, #80D8FF)`
		case "ghost":
			return`
			background: linear-gradient( to bottom right, #7C30F3, #B78AFF)`
		case "dragon":
			return`
			background: linear-gradient(to bottom right, #C633CE, #FF5479)`
		default:
  }}};
	@media ${responsive.medium}{
		width: 100%;
}
:hover{
	animation: ${gridMove} 1s;
}
`
export const GridCardImgDiv = styled.div`
	display: flex;
	justify-content: center;
`
export const GridCardImg = styled.img`
	scale: 1.5;
`
export const GridCardInfoDiv = styled.div`
`
export const GridCardInfo = styled.div`
	display: flex;
	justify-content:center;
	gap: 0.6rem
`
export const GridCardInfoText = styled.span`
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: capitalize;
`
export const GridCardInfoType1 = styled.span`
	width: 5rem;
	height: 2rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	font-weight: 500;
	text-transform: capitalize;
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
	}}};
`
export const GridCardInfoType2 = styled.span`
	width: 5rem;
	height: 2rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	font-weight: 500;
	text-transform: capitalize;
	${props =>{
			switch(props.pokemon.types[1].type.name){
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
			case "steel":
					return`
					background: linear-gradient(to bottom right, #566573, #D5D8DC)`
					default:
	}}};
`
export const GridCardInfoSpan = styled.span`
	padding: 8px 4px 0px 4px;
`
// --------------------------SearchBar Style---------------------------------------------------------
export const SearchBarBox = styled.section`
	width: 90%;
	position: fixed;
	padding-top: 2rem;
	opacity:1;
	top: ${props => props.openSearch ? '6%' : '100%'};
	z-index: 10;
	transition: 0.35s linear  ;
	@media ${responsive.medium} {
		position: relative;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 10;
		opacity: 1;
	}
` 
export const SearchBarWarp = styled.div`
	position: absolute;
	width: 100%;
	z-index: 10;
`
export const SearchBarInput = styled.div`
	background-color: white;
	border-radius: 0.5rem;
	box-shadow:  0px 1px 5px 3px rgba(0,0,0,0.12);
`
export const InputText = styled.input`
	height: 3rem;
	width: 100%;
	outline: none;
	border: none;
	border-radius: 0.5rem;
	padding-left: 1rem;
	font-size: 1rem;
	box-shadow: 0px 1px 5px rgba(0,0,0,0.1);
	@media ${responsive.medium} {
		font-size: 1.5rem;
	}
`
export const AutocompleteBoxEmpty = styled.div`
	max-height: 220px;
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
	@media ${responsive.medium} {
		font-size: 1.5rem;
	}
`
export const SearchButton = styled.button`
	height: 3rem ;
	width: 5rem;
	position: absolute;
	top:0;
	right: 0;
	text-align: center;
	font-size: 1rem;
	color: #fff;
	background-color: #009393;
	border: none;
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	box-shadow:  0px 0px 3px #009393;
	cursor: pointer;
	@media ${responsive.medium} {
		font-size: 1.2rem;
		width: 6rem;
	}
`

//------------------------------------------- APP Style----------------------------------------------
export const HeaderPokedex = styled.div`
	width: 100%;
`
export const HeaderPokedexContainer = styled.div`
@media ${responsive.medium} {
	display: flex;
	gap: 2rem;
}
`
export const HeaderPokedexContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const HeaderIconContent = styled.div`
	height: ${props => props.openSearch ? "100%" : '4rem'};
	position: fixed;
	display: flex;
	justify-content: flex-end;
	z-index: 10;
	left:0;
	bottom: 0;
	width: 100%;
	transition: 0.5s ;
	background-color: #F0F3F4;
	border-top-left-radius:1rem;
	border-top-right-radius:1rem ;
	box-shadow: 0px -3px 3px #F0F3F4 ;
	@media ${responsive.medium} {
		display: none;
	}
`
export const HeaderIcon = styled.a`
	position: fixed;
	padding: 1rem;
	font-size: 1.5rem;
	color:${props => props.openSearch ? 'red':"green"} ;
	cursor: pointer;
	transform: ${props => props.openSearch ? 'rotate(360deg)':"none"}  ;
	transition: 1s;
	
	@media ${responsive.medium} {
		display: none;
	}
`
export const TituloPokemon = styled.img`
  width: 200px;
  height: 80px;
`

// ----------------------------------------CardPokemon Style-----------------------------------------
export const CardPokemonBox = styled.section`
	padding: 2rem 0 1rem;
	height: 100vh;
	display: grid;
	@media ${responsive.small} {
		${props=>{  
			switch(props.pokemon.types[0].type.name){
					case "grass":
							return`
							background: linear-gradient(to bottom right, #15803d, #4ade80);`
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
	}
	@media ${responsive.large} {
		${props=>{  
			switch(props.pokemon.types[0].type.name){
					case "grass":
							return`
							background: linear-gradient(130deg, #fff 35%, #15803d 55%, #4ade80 65%);`
					case "fire":
							return`
							background: linear-gradient(130deg, #fff 35%, #b91c1c 55%, #f59e0b 65%)`
					case "bug":
							return`
							background: linear-gradient(130deg, #fff 35%, #4d7c0f 55%, #a3e635 65%)`
					case "water":
							return`
							background: linear-gradient(130deg, #fff 35%, #1d4ed8 55%, #60a5fa 65%)`
					case "flying":
							return`
							background: linear-gradient(130deg, #fff 35%, #0ea5e9 55%, #7dd3fc 65%)`
					case "normal":
							return`
							background: linear-gradient(130deg, #fff 35%, #4b5563 55%, #9ca3af 65%)`
					case "poison":
							return`
							background: linear-gradient(130deg, #fff 35%, #f43f5e 55%, #fecdd3 65%)`
					case "electric":
							return`
							background: linear-gradient(130deg, #fff 35%, #eab308 55%, #fde047 65%)`
					case "ground":
							return`
							background: linear-gradient(130deg, #fff 35%, #713f12 55%, #a16207 65%)`
					case "fairy":
							return`
							background: linear-gradient(130deg, #fff 35%, #ec4899 55%, #f9a8d4 65%)`
					case "fighting":
							return`
							background: linear-gradient(130deg, #fff 35%, #312e81 55%, #4338ca 65%)`
					case "psychic":
							return`
							background: linear-gradient(130deg, #fff 35%, #c026d3 55%, #d97706 65%)`
					case "rock":
							return`
							background: linear-gradient(130deg, #fff 35%, #44403c 55%, #78716c 65%)`
					case "ice":
							return`
							background: linear-gradient(130deg, #fff 35%, #0369a1 55%, #38bdf8 65%)`
					case "ghost":
							return`
							background: linear-gradient(130deg, #fff 35%, #4c1d95 55%, #6d28d9 65%)`
					case "dragon":
							return`
							background: linear-gradient(130deg, #fff 35%, #701a75 55%, #e11d48 65%)`
							default:
			}}}
	}
`
export const CardPokemonContent = styled.section`
`
export const CardPokemonStyle=styled.div`
	@media ${responsive.large}{
		display: flex;
		justify-content: space-around;
		align-items: center;
		gap: 2rem;
		padding-top: 5rem;
	}
`
export const CardPokemonHeader =styled.div`
height: 60px;
position: relative;
z-index: 1;
margin: auto;
max-width: 450px;
	@media ${responsive.large}{
		max-width: none;
		display: flex;
		width: 100%;
		position: absolute;
		top: 0px;
		left: 0px;
		background-color: #BDC3C7;
		justify-content: space-evenly;
		align-items: center;
		margin: 0;
		box-shadow: 0px 4px 6px #BDC3C7;
	}
`
export const CardPokemonIconButtonClose=styled.a`
	font-size: 1.5rem;
	margin-left: 1rem;
	color: #fff;
	padding: 0.2rem 0.4rem;
	background-color: #000;
	border-radius: 100%;
	cursor: pointer;
	@media ${responsive.large} {
		transition: color 1s, transform 1s;
		font-size: 3rem;
		background-color: transparent ;
		padding-right:1.5rem ;
		:hover{
			color: #000;
			transform: translateX(-1.5rem);
		}
	}

`
export const CardPokemonHeaderContent=styled.div`
	display: flex;
	font-size: 2.5rem;
	align-items: center;
	justify-content: center;
	@media ${responsive.large}{
		padding: 0 6rem;
		border-bottom-left-radius: 5rem;
		border-bottom-right-radius: 5rem;
		background-color: #5D6D7E;
		height: 100%;
	}
`
export const CardPokemonIconButtonPokeball=styled.span`
	display: flex;
	margin-right: 0.5rem;
	align-items: center;
	color: #fff;
`
export const CardPokemonId=styled.span`
	color: #fff;
	margin-left: 1rem;
	font-size: 1.5rem;
	font-weight: 500;
	@media ${responsive.large} {
		font-size: 2.5rem;
	}
`
export const CardPokemonName=styled.span`
color: #fff;
font-weight: 500;
text-transform: capitalize;
@media ${responsive.medium}{
}
`
export const CardPokemonImageDiv =styled.div`
display: flex;
justify-content: center;
height: 200px;
@media ${responsive.medium}{
	height: 200;
}
`
export const CardPokemonImage = styled.img`
	scale: 1.2;
	transform: translateY(1rem);
	@media ${responsive.large}{
		transform: none;
		scale: 1.5;
	}
`
export const CardPokemonInfoSection =styled.section`
	border-radius: 1rem;
	background-color: #fff;
	padding: 2rem 0 0.1rem 0 ;
	max-width: 400px;
	margin: auto;
@media ${responsive.large} {
	padding: 2rem  0 ;
	margin: 0;
	min-width: 400px;
}
`
export const CardPokemonInfoContainer =styled.div`
`
export const CardPokemonInfoTypes =styled.div`
	display: flex;
	font-size: 1rem;
	justify-content: space-evenly;
	color: #fff;
	text-transform: capitalize;
	font-weight: 500;
`
export const CardPokemonInfoType1 =styled.span`
	border: none;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5rem;
	height: 2rem;
	font-size: 1rem;
	@media ${responsive.large} {
		font-size:1.5rem;
		width: 8rem;
		height: 3rem;
		border-radius: 3rem;
	}
	${props=>{  
			switch(props.cardPokemon.types[0].type.name){
					case "grass":
							return`
							background: linear-gradient(to bottom right, #15803d, #4ade80);`
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
export const CardPokemonInfoType2 =styled.span`
	border: none;
	border-radius: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 5rem;
	height: 2rem;
	font-size: 1rem;
	@media ${responsive.large} {
		font-size:1.5rem;
		width: 8rem;
		height: 3rem;
		border-radius: 3rem;
	}
	${props=>{  
			switch(props.cardPokemon.types[1].type.name){
					case "grass":
							return`
							background: linear-gradient(to bottom right, #15803d, #4ade80);`
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
export const CardPokemonInfoBox =styled.div`
`
export const CardPokemonInfoContent = styled.div`
	margin: 1rem 0;
	display: grid;
	gap:0.2rem;
	@media ${responsive.large} {
		gap: 0.2rem
	}
`
export const CardPokemonInfo = styled.div`
	display: flex;
`
export const InfoDataStats = styled.div`
	display: flex;
	gap: 1rem;
	width: 100%;
	align-items: center;
	margin-left: 1.5rem;
`
export const InfoData =styled.span`
	font-size: 0.8rem;
	width: 6rem;
	color: #ada4a4;
	font-weight: 600;
	@media ${responsive.large} {
		font-size: 1.2rem;
		width: 10rem;
	}
`
export const InfoDataRes =styled.span`
	font-size: 0.9rem;
	font-weight: 600;
	@media ${responsive.large} {
			font-size: 1.2rem;
		}
`
export const InfoDataAbilities =styled.div`
	text-transform: capitalize;
	font-size: 0.9rem;
	font-weight: 600;
`
export const CardPokemonInfoTitle =styled.h3`
	font-size: 1rem;
	font-weight: 600;
	margin-bottom: 1rem;
	@media ${responsive.large} {
		font-size: 1.5rem;
	}
`
export const InfoDataStatsValor =styled.div`
	width: 8%;
	@media ${responsive.large}{
		width: 20%;
	}
`
export const InfoDataBar =styled.div`
	border: none;
	height: 10px;
	background-color: #e9e9e9;
	border-radius: 0.3rem;
	width: 100%;
`
export const chargeBar = keyframes`
from 
{
	width: 0 ; background-color: #b91c1c ;
}
to 
{}
`
export const InfoDataContent =styled.div`
	border: none;
	height: 10px;
 	${props =>{
		switch(true){
			case props.barStats <= 36 :
				return`
				background-color: #b91c1c;`
			case props.barStats <= 79 :
				return`
				background-color: #ef1f1f;`
			case props.barStats <= 120 :
				return`
				background-color: #80D56A;`
			case props.barStats <= 180 :
				return`
				background-color: #25A205;`
			default:
		}}}
	border-radius: 0.3rem;
	width:  ${props => props.barStats/180*100}%; 
	animation: ${chargeBar} 1s linear forwards;
`

//----------------------------------------- Pagination Style---------------------------------------
export const PaginationSection =styled.section`
`
export const PaginationContainer =styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 1rem;
`
export const PaginationSpan =styled.a`
	font-weight: 500;
	text-decoration: none;
	padding: 0.2rem 0.6rem;
	font-size: 1rem;
	cursor: pointer;
	:focus{
		transition:  1s ;
		background-color:#ABB2B9;
		border-radius: 100%;
		padding: 0.2rem 0.6rem;
		color: #fff;
		@media ${responsive.medium} {
		font-size: 1.5rem;
		padding: 0.3rem 0.9rem;
		}
	}
	@media ${responsive.medium} {
		font-size: 1.5rem;
		padding: 0.3rem 0.9rem;
	}
`
// ------------------------------------------------Pokedex Style------------------------------------
export const PokedexBox = styled.section`
`
export const PokedexGrid = styled.div`
	justify-items: center;
	grid-template-columns: 1fr;
	position: ${props=>props.blur? "relative": null};
	filter: ${props=>props.blur? "blur(8px)": null};
	@media ${responsive.medium} {
		grid-template-columns: 1fr 1fr;
	}
	@media ${responsive.large} {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media ${responsive.exLarge} {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
`
// -------------------------------------------Loading Style------------------------------------------
export const LoadingSection = styled.section`
		display: flex;
		justify-content: center;
		align-items: center;
		height: 50vh;
	`
export const LoadingContainer = styled.div`
display: grid;
justify-content: center;
align-items: center;
`
export const LoadingText =styled.h3`
	font-size: 1rem;
	font-weight: 500;
	@media ${responsive.large}{
		font-size: 1.5rem;
	}
`
export const LoadingIcon =styled.h3`
	font-size: 1rem;
	font-weight: 500;
`
export const LoadingBar =styled.div`
	width: 200px;
	height: 1.5rem;
	border-radius:1rem;
	background-color: white;
	border: 3px black solid;
	padding-left: 0.2rem;
	padding-right: 0.2rem;
`
export const chargeLoading= keyframes`
0% 
{
	width: 0 ; background-color: #D5F5E3 ;
}
90%
{width: 100% ; background-color: #239B56}
`
export const LoadingContent =styled.div`
	transform: translateY(0.1rem);
	
	width: 100%;
	margin-top: 1px;
	height: 0.8rem;
	background-color: #239B56;
	border-radius:1rem;
	animation: ${chargeLoading} 1s;
`
// -------------------------------------------NotFound Style------------------------------------------
export const NotFoundSection = styled.section`
	@media ${responsive.large} {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	`
export const NotFoundContainer = styled.div`
display: grid;
justify-content: center;
align-items: center;
gap: 1.5rem;
@media ${responsive.large}{
	justify-content: space-around;
	max-width: 800px;
}

`
export const NotFoundTitle =styled.h2`
	font-size: 5rem;
	font-weight: 500;
`
export const NotFoundDescription =styled.p`
	font-size: 1rem;
	font-weight: 500;
	width: 200px;
	@media ${responsive.large}{
		font-size: 1.5rem;
		width: 50%;
	}
`
export const NotFoundImage =styled.img`
	width: 200px;
	margin: auto;
	@media ${responsive.large}{
		width: 300px;
		grid-row: 1 / span 2;
  	grid-column: 2/ span 1;
	}
`
export const NotFoundButton =styled.a`
	width:150px;
	padding: 0.5rem;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #239B56;
	border-radius: 1rem;
	font-size: 1rem;
`


