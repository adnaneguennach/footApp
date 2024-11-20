import React, { useMemo } from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';

const Table = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        responsable: 'John Doe',
        dateReservation: '2024-11-20',
        dateJouer: '2024-11-21',
        heureJouer: '15:00',
        status: 'Pending',
      },
      {
        id: 2,
        responsable: 'Jane Smith',
        dateReservation: '2024-11-22',
        dateJouer: '2024-11-23',
        heureJouer: '18:00',
        status: 'Confirmed',
      },
      {
        id: 2,
        responsable: 'Jane Smith',
        dateReservation: '2024-11-22',
        dateJouer: '2024-11-23',
        heureJouer: '18:00',
        status: 'Confirmed',
      },
      {
        id: 2,
        responsable: 'Jane Smith',
        dateReservation: '2024-11-22',
        dateJouer: '2024-11-23',
        heureJouer: '18:00',
        status: 'Confirmed',
      },
      {
        id: 2,
        responsable: 'Jane Smith',
        dateReservation: '2024-11-22',
        dateJouer: '2024-11-23',
        heureJouer: '18:00',
        status: 'Confirmed',
      },
      {
        id: 2,
        responsable: 'Jane Smith',
        dateReservation: '2024-11-22',
        dateJouer: '2024-11-23',
        heureJouer: '18:00',
        status: 'Confirmed',
      } 
    ],
    [] 
  );

  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
      },
      {
        Header: 'Responsable',
        accessor: 'responsable',
      },
      {
        Header: 'Date de Reservation',
        accessor: 'dateReservation',
      },
      {
        Header: 'Date de Jouer',
        accessor: 'dateJouer',
      },
      {
        Header: 'Heure de Jouer',
        accessor: 'heureJouer',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        disableSortBy: true, 
      },
    ],
    [] 
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        pageSize: 5, 
      },
    },
    useSortBy,
    usePagination 
  );

  return (
    <>
      <table {...getTableProps()} className="table-auto border-collapse w-[70%]">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-4 py-2 border-b text-center cursor-pointer"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize).map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="px-4 py-2 border-b text-center">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination-controls">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>

        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map(size => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Table;
