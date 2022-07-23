import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';


const PaginationComponent = () => {
  return (
    <>
      <Pagination size='small' count={10} sx={{m:3}}/>
    </>
  )
}

export default PaginationComponent
