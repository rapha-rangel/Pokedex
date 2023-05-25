import { SearchBarWarp, SearchBarInput, InputText, AutocompleteBox, SearchButton, SearchBarBox, SearchBarListName, AutocompleteBoxEmpty } from "./style";

const SearchBar =({openSearch, 
									namePokemon, 
									handleBuscaPokemon, 
									handleClickPokemon, 
									inputPokemonName, 
									openAutoComplete, 
									setOpenAutoComplete, 
									setNamePokemon,
									}) =>{
    
    const handleSearchbarList=(data)=>{
        setNamePokemon(data)
        setOpenAutoComplete(false)
    }

	return (
	<SearchBarBox openSearch={openSearch} >
		<SearchBarWarp>
			<SearchBarInput>
				<InputText  value={namePokemon} onChange={handleBuscaPokemon}/>
				{!openAutoComplete?
				<AutocompleteBoxEmpty></AutocompleteBoxEmpty>
				:
				<AutocompleteBox>
					{inputPokemonName.map((data, index)=>{
						return ( 	
							<SearchBarListName 
								onClick={()=>handleSearchbarList(data)} value={data} key={index}>
									{data}
							</SearchBarListName>
						)
					})}
				</AutocompleteBox>
				}
			</SearchBarInput>
			<SearchButton onClick={handleClickPokemon}>BUSCAR</SearchButton>
		</SearchBarWarp>
	</SearchBarBox>
	
	)
}

export default SearchBar;