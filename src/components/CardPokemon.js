import { MdCatchingPokemon } from "react-icons/md";
import { TiArrowBackOutline } from "react-icons/ti";
import {CardPokemonStyle, 
				CardPokemonImage, 
				CardPokemonImageDiv, 
				CardPokemonBox, 
				CardPokemonIconButtonClose,
				CardPokemonHeaderContent, 
				CardPokemonIconButtonPokeball, 
				CardPokemonHeader, 
				CardPokemonInfoSection, 
				CardPokemonInfoTitle, 
				CardPokemonId, 
				CardPokemonInfo, 
				InfoData, 
				CardPokemonContent,
				CardPokemonName,
				CardPokemonInfoContainer,
				CardPokemonInfoTypes,
				CardPokemonInfoType1,
				CardPokemonInfoType2,
				CardPokemonInfoContent,
				InfoDataRes,
				InfoDataAbilities,
				InfoDataBar,
				InfoDataContent,
				InfoDataStats,
				InfoDataStatsValor,
			 } 
from "./style";

const CardPokemon = ({nameBuscaPokemon, setOpenAutoComplete, setOpenCard, setPage})=>{

	const handleCloseCard = ()=>{
		setOpenAutoComplete(false)
		setOpenCard(false)
		setPage(0)
	}

	return (
		<CardPokemonBox pokemon={nameBuscaPokemon} >
			<CardPokemonStyle >
			<CardPokemonHeader>
					<CardPokemonIconButtonClose onClick={handleCloseCard}>
						<TiArrowBackOutline/>
					</CardPokemonIconButtonClose>
					<CardPokemonHeaderContent>
						<CardPokemonIconButtonPokeball>
							<MdCatchingPokemon/>
						</CardPokemonIconButtonPokeball>
					<CardPokemonName>
					{nameBuscaPokemon.name}
					</CardPokemonName>
					</CardPokemonHeaderContent>
					<CardPokemonId>
						#{nameBuscaPokemon.id.toString().padStart(3, "0")}
					</CardPokemonId>
				</CardPokemonHeader>



				<CardPokemonContent >
					<CardPokemonImageDiv >
						<CardPokemonImage 
							src={nameBuscaPokemon.sprites.other['official-artwork'].front_default} 
							alt ={nameBuscaPokemon.name}>
						</CardPokemonImage>
					</CardPokemonImageDiv>
				</CardPokemonContent>

				<CardPokemonInfoSection >
					<CardPokemonInfoContainer className="container">
						<CardPokemonInfoTypes>
							<CardPokemonInfoType1 cardPokemon={nameBuscaPokemon}>{nameBuscaPokemon.types[0].type.name}</CardPokemonInfoType1>

							{Object.keys(nameBuscaPokemon.types).length > 1
									?
									<>
										<CardPokemonInfoType2 cardPokemon={nameBuscaPokemon}>{nameBuscaPokemon.types[1].type.name}</CardPokemonInfoType2>
									</>
									:
										null}
						</CardPokemonInfoTypes>

					<CardPokemonInfoContent>
					<CardPokemonInfo>
							<InfoData>Altura</InfoData>
							<InfoDataRes dataPokemon>{Number(nameBuscaPokemon.height)/10} m</InfoDataRes>
						</CardPokemonInfo>
						<CardPokemonInfo>
							<InfoData>Peso</InfoData>
							<InfoDataRes dataPokemon>{Number(nameBuscaPokemon.weight)/10} kg</InfoDataRes>
						</CardPokemonInfo>
						<CardPokemonInfo>
							<InfoData>Habilidades</InfoData>
								<InfoDataAbilities>
									<InfoDataRes dataPokemonAbility>{nameBuscaPokemon.abilities[0].ability.name}</InfoDataRes>
										{Object.keys(nameBuscaPokemon.abilities).length > 1
										?
											<InfoDataRes dataPokemonAbility>, {nameBuscaPokemon.abilities[1].ability.name}</InfoDataRes>
										:
										null}
								</InfoDataAbilities>
						</CardPokemonInfo>
					</CardPokemonInfoContent> 
					<CardPokemonInfoContent> 
						<CardPokemonInfoTitle>Status Basicos</CardPokemonInfoTitle>


						<CardPokemonInfo>
						<InfoData>HP</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[0].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[0].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>
						
						<CardPokemonInfo>
						<InfoData>Ataque</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[1].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[1].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>

						<CardPokemonInfo>
						<InfoData>Defesa</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[2].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[2].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>

						<CardPokemonInfo>
						<InfoData>Es. Ataque</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[3].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[3].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>

						<CardPokemonInfo>
						<InfoData>Es. Defesa</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[4].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[4].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>

						<CardPokemonInfo>
						<InfoData>Velocidade</InfoData>
						<InfoDataStats >
							<InfoDataStatsValor>
								<InfoDataRes>{nameBuscaPokemon.stats[5].base_stat}</InfoDataRes>
							</InfoDataStatsValor>
							<InfoDataBar>
								<InfoDataContent barStats={nameBuscaPokemon.stats[5].base_stat}></InfoDataContent>
							</InfoDataBar>
						</InfoDataStats>
						</CardPokemonInfo>













					</CardPokemonInfoContent> 
					</CardPokemonInfoContainer>
				</CardPokemonInfoSection>
			</CardPokemonStyle>
		</CardPokemonBox>
	)
}

export default CardPokemon;