import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { userColumns, userRows } from '../constants/collegedata';

const CollegeDataTable = () => {

  return (
    <div className="datatable h-[80%] p-2 lg:mx-10 mx-2 md:mx-5">
    <div className="datatableTitle w-[100%] mb-10 flex items-center justify-center mt-8 font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[26px] lg:leading-[40px] text-transparent">
     Top Colleges in Mumbai
    </div>
    <DataGrid
      className="datagrid"
      rows={userRows}
      columns={userColumns}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
    />
  </div>
  )
}

export default CollegeDataTable