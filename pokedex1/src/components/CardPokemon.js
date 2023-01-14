import { FaPowerOff } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CardPokemonStyle, CardPokemonImage, CardPokemonImageDiv, CardPokemonBox, CardPokemonIconButton ,CardPokemonLed, CardPokemonCaseLed, CardPokemonHeader, CardPokemonInfoBoxDiv, CardPokemonInfoBox, CardPokemonLedSmall, CardPokemonInfo, InfoData} from "./style";

const CardPokemon = ({nameBuscaPokemon, setOpenAutoComplete, setOpenCard, setPage})=>{
    console.log(nameBuscaPokemon)
    const icon = <IconContext.Provider value={{ color: 'white', className: "global-class-name", size: '3em' }}>
  <div>
    <FaPowerOff />
  </div>
</IconContext.Provider>;

    const handleCloseCard = ()=>{
        setOpenAutoComplete(false)
        setOpenCard(false)
        setPage(0)
    }

    return (
        <CardPokemonBox>
            <CardPokemonStyle>
                <CardPokemonHeader>
                    <CardPokemonCaseLed>
                        <CardPokemonLed></CardPokemonLed>
                        <CardPokemonLedSmall color="red"></CardPokemonLedSmall>
                        <CardPokemonLedSmall color="yellow"></CardPokemonLedSmall>
                        <CardPokemonLedSmall color="green"></CardPokemonLedSmall>
                    </CardPokemonCaseLed>
                    <CardPokemonIconButton onClick={handleCloseCard}>
                        {icon}
                    </CardPokemonIconButton>
                </CardPokemonHeader>
                <CardPokemonImageDiv pokemon={nameBuscaPokemon}>
                    <CardPokemonImage src={nameBuscaPokemon.sprites.other['official-artwork'].front_default} alt ={nameBuscaPokemon.name}></CardPokemonImage>
                </CardPokemonImageDiv>
                <CardPokemonInfoBoxDiv>
                    <CardPokemonInfoBox>
                        <CardPokemonInfo>
                            <InfoData>ID</InfoData>
                            <InfoData dataPokemon>#{nameBuscaPokemon.id.toString().padStart(3, "0")}</InfoData>
                        </CardPokemonInfo>
                        <CardPokemonInfo>
                            <InfoData>Name</InfoData>
                            <InfoData dataPokemon>{nameBuscaPokemon.name}</InfoData>
                        </CardPokemonInfo>
                        <CardPokemonInfo>
                            <InfoData>Tipo</InfoData>
                            <InfoData dataPokemon>
                               <>{nameBuscaPokemon.types[0].type.name}</>
                                {Object.keys(nameBuscaPokemon.types).length > 1?
                                    <>- {nameBuscaPokemon.types[1].type.name}</>
                                :
                                    null}
                            </InfoData>
                        </CardPokemonInfo>
                    </CardPokemonInfoBox> 
                    <CardPokemonInfoBox>
                        <CardPokemonInfo>
                            <InfoData>Altura</InfoData>
                            <InfoData dataPokemon>{Number(nameBuscaPokemon.height)/10}m</InfoData>
                        </CardPokemonInfo>
                        <CardPokemonInfo>
                            <InfoData>Peso</InfoData>
                            <InfoData dataPokemon>{Number(nameBuscaPokemon.weight)/10}kg</InfoData>
                        </CardPokemonInfo>
                        <CardPokemonInfo>
                            <InfoData>Habilidades</InfoData>
                            <InfoData dataPokemonAbility>{nameBuscaPokemon.abilities[0].ability.name}</InfoData>
                                {Object.keys(nameBuscaPokemon.abilities).length > 1?
                                    <InfoData dataPokemonAbility>{nameBuscaPokemon.abilities[1].ability.name}</InfoData>
                                :
                                    null}
                        </CardPokemonInfo>
                    </CardPokemonInfoBox> 
                </CardPokemonInfoBoxDiv>
            </CardPokemonStyle>
        </CardPokemonBox>
    )
}

export default CardPokemon;