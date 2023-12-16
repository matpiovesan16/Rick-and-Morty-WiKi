import '../Style/button.css';
import React from 'react';
import ReactPaginate from 'react-paginate';
export const Button = ({setPageNumber,pageNumber,dataInfo})=>{
    const setPrev = ()=>{
        if(pageNumber==1){
            setPageNumber((x) => x=42);
        }else{
            setPageNumber((x) => x - 1);
        }
        

    }    
    const setNext = () =>{
        if(pageNumber==42){
            setPageNumber((x) => x = 1);

        }else{
            setPageNumber((x) => x + 1);
        }
        

    }
    
    return(
        <>
        <ReactPaginate pageCount={dataInfo?.pages} 
        forcePage={pageNumber === 1 ? 0  : pageNumber - 1}
        className="btnContainer"
        previousLabel='Prev'
        nextClassName='btn'
        previousClassName='btn'
        pageClassName='li'
        activeClassName='activePaginate'
        onPageChange={(data) =>{
        setPageNumber(data.selected + 1)
        }}></ReactPaginate>

        </>
        )

}