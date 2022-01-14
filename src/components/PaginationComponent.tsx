import React from 'react'
import Pagination from 'react-bootstrap/Pagination'


export const PaginationComponent:React.FC<{nrOfPages:number, goToPage: Function, currPage: number}>= ({nrOfPages, goToPage, currPage}) => {
    
  let isPageNumberOutOfRange:boolean = false

    const pageNumbers = [...new Array(nrOfPages)].map((_, index) => {
      const pageNumber = index + 1;
      const isPageNumberFirst:boolean = pageNumber === 1;
      const isPageNumberLast:boolean = pageNumber === nrOfPages;
      const isCurrentPageWithinTwoPageNumbers:boolean =
        Math.abs(pageNumber - currPage) <= 2;
      if (
        isPageNumberFirst ||
        isPageNumberLast ||
        isCurrentPageWithinTwoPageNumbers
      ) {
        isPageNumberOutOfRange = false;
        return (
          <Pagination.Item
            key={pageNumber}
            onClick={() => goToPage(pageNumber)}
            active={pageNumber === currPage}
          >
            {pageNumber}
          </Pagination.Item>
        );
      }
  
      if (!isPageNumberOutOfRange) {
        isPageNumberOutOfRange = true;
        return <Pagination.Ellipsis key={pageNumber} className="muted" />;
      }
  
      return null;
    });
    return (
<Pagination>
  <Pagination.First onClick={() => goToPage(1)}/>
  <Pagination.Prev onClick={() => goToPage(currPage-1)} disabled={currPage == 1}/>


{pageNumbers}
  
  <Pagination.Next onClick={() => goToPage(currPage+1)} disabled={currPage == nrOfPages}/>
  <Pagination.Last onClick={() => goToPage(nrOfPages-1)}/>
</Pagination>
    )
}


export default Pagination
