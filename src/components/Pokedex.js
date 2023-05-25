import Card from "./Card";
import {PokedexGrid, PokedexBox } from "./style";
import Loading from "./Loading";


const Pokedex =({pokedex, loading, openAutoComplete, emBuscaPokemon, setLoading }) =>{
	return(
		<PokedexBox className="container section">
			<>
				{loading? 
					<Loading/>
				:
					<>
						{!openAutoComplete?
						<>
							<PokedexGrid className="grid">
								{pokedex && pokedex.map((pokemon, index)=>{
									return(
										<Card key={index}
													pokemon={pokemon}  
													emBuscaPokemon ={emBuscaPokemon} 
													setLoading={setLoading}
										/>
								)})}
							</PokedexGrid>
						</>
						:
						<>
							<PokedexGrid blur className="grid">
								{pokedex && pokedex.map((pokemon, index)=>{
									return(
										<Card key={index} pokemon={pokemon}  />
								)})}
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