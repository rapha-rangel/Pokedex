import Card from "./Card";
import { LoadingDiv, LoadingText, PokedexGrid, PokedexBox } from "./style";


const Pokedex =({pokedex, loading, openAutoComplete}) =>{
    return(
        <PokedexBox className="container mx-auto px-10 pt-16">
                <>
                {loading? 
                <LoadingDiv>
                    <LoadingText>Carregando...</LoadingText>
                </LoadingDiv>
                :
                    <>
                    {!openAutoComplete?
                    <>
                        <PokedexGrid>
                            {pokedex && pokedex.map((pokemon, index)=>{
                            return(
                                <Card key={index} pokemon={pokemon}  />
                            )
                            })}
                        </PokedexGrid>
                    </>
                    :
                    <>
                        <PokedexGrid blur>
                            {pokedex && pokedex.map((pokemon, index)=>{
                            return(
                                <Card key={index} pokemon={pokemon}  />
                            )
                            })}
                        </PokedexGrid>
                    </>
                    }
                </>
                }
            </>
        </PokedexBox>
    )
}

export default Pokedex;