import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';


const PaginationComponent = () => {
  return (
    <>
      <Pagination count={10} sx={{m:3}} color='primary' siblingCount={0}/>
    </>
  )
}

export default PaginationComponent
