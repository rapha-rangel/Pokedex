import { GridCardStyle, GridCardImgDiv, GridCardImg, GridCardInfoDiv, GridCardInfo, GridCardInfoSpan, GridCardInfoType, GridCardInfoText} from "./style";

        
const Card =({pokemon})=>{
    return(
            <GridCardStyle pokemon={pokemon} >
            <GridCardImgDiv>
               <GridCardImg src={pokemon.sprites.versions['generation-iv'].platinum.front_default} alt ={pokemon.name}/>
            </GridCardImgDiv>
            <GridCardInfoDiv>
                <GridCardInfo>
                    <GridCardInfoText>#{pokemon.id.toString().padStart(3, "0")}</GridCardInfoText> - <GridCardInfoText>{pokemon.name.toUpperCase()}</GridCardInfoText>
                </GridCardInfo>
                <GridCardInfo>
                    <GridCardInfoType pokemon={pokemon}>{pokemon.types[0].type.name}</GridCardInfoType> 
                    {Object.keys(pokemon.types).length > 1
                    ?
                        <>
                            <GridCardInfoSpan className="pt-2 px-1"> - </GridCardInfoSpan><GridCardInfoType pokemon={pokemon}>{pokemon.types[1].type.name}</GridCardInfoType>
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