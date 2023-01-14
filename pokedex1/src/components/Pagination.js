import {PaginationDiv, ButtonPagination, PaginationSpan} from './style'

const Pagination = ({page, setPage, itensPorPage})=>{
    const totalNumberPokemons =151;
    const handleButtonPaginationBack = ()=>{
        if(page > 0){
        setPage(page-1)
        }
    }

    const handleButtonPaginationForward = ()=>{
        if(page < 6){
        setPage(page+1)
        }
    }
    
    return(
        <PaginationDiv>
            <ButtonPagination onClick={handleButtonPaginationBack}>-</ButtonPagination>
            <PaginationSpan> {page+1} </PaginationSpan> <span>de</span> <PaginationSpan> {Math.ceil(totalNumberPokemons/itensPorPage)}</PaginationSpan>
            <ButtonPagination plus onClick={handleButtonPaginationForward}>+</ButtonPagination>
        </PaginationDiv>
        
    )
}

export default Pagination;