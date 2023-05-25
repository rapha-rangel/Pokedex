import { PaginationContainer, PaginationSection, PaginationSpan } from "./style";


const Pagination = ({setPage})=>{
	const currentPages = [1,2,3,4,5,6,7];
	
	const handleButtonPagination = (e)=>{
		setPage(parseInt(e.target.textContent -1))
	}

    return(
			<PaginationSection >
				
				<PaginationContainer className="container">
					{currentPages.map((currentPage)=>{
						return (
							<PaginationSpan  
								href="#" 
								onClick={handleButtonPagination}> 
								{currentPage}
							</PaginationSpan> 
						)
					})}
				</PaginationContainer>
			</PaginationSection>
    )
}

export default Pagination;