import {GridCardStyle, 
				GridCardImgDiv, 
				GridCardImg, 
				GridCardInfoDiv, 
				GridCardInfo, 
				GridCardInfoSpan, 
				GridCardInfoType1, 
				GridCardInfoType2, 
				GridCardInfoText} 
	from "./style";
const Card =({pokemon, emBuscaPokemon, setLoading})=>{

	const handleClick = () =>{
		emBuscaPokemon(pokemon.id)		
		console.log(pokemon.id)
		setLoading(true)
	}

	return(
		<GridCardStyle pokemon={pokemon} className="grid" onClick={handleClick}>
			<GridCardImgDiv>
				<GridCardImg 
					src={pokemon.sprites.versions['generation-iv'].platinum.front_default} 
					alt ={pokemon.name}
				/>
			</GridCardImgDiv>
			<GridCardInfoDiv className="grid">
				<GridCardInfo>
					<GridCardInfoText>#{pokemon.id.toString().padStart(3, "0")}</GridCardInfoText> 
					<GridCardInfoText>{pokemon.name.toUpperCase()}</GridCardInfoText>
				</GridCardInfo>
				<GridCardInfo>
					<GridCardInfoType1 pokemon={pokemon}>{pokemon.types[0].type.name}</GridCardInfoType1> 
					{Object.keys(pokemon.types).length > 1
						?
							<>
								<GridCardInfoSpan className="pt-2 px-1"> 
								</GridCardInfoSpan>
								<GridCardInfoType2 pokemon={pokemon}>{pokemon.types[1].type.name}</GridCardInfoType2>
							</>   
						:
							null
					}
				</GridCardInfo>
			</GridCardInfoDiv>
		</GridCardStyle>
	)
}

export default Card;