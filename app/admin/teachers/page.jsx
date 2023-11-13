import React from 'react'
import TableOne from '../components/Tables/TableOne'
import TableTwo from '../components/Tables/TableTwo'
import TableThree from '../components/Tables/TableThree'
import TableFour from '../components/Tables/TableFour'

function page() {
  return (
    <div className="col-span-12 xl:col-span-8">
        <TableOne />
        <TableTwo />
        <TableThree />
        <TableFour/>
    </div>
  )
}

export default page
