import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Table, TableHead, TableRow, TableCell, TablePagination, TableSortLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '900',
            color: '#0c7513',
            fontSize: '20px',
        },
        '& thead th:hover': {
            backgroundColor: '#1111',
            cursor: 'pointer',
        },
        '& tbody tr:hover': {
            backgroundColor: '#1111',
            cursor: 'pointer',
        },
    },
}))

function useTable(records, headCells) {

    const classes = useStyles();

    const pages = [5, 10, 15, 20];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [order, setOrder] = useState();
    const [orderBy, setOrderBy] = useState();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )
    const TblHead = props => {
        const handleSortRequest = cellId => {
            const isAscending = orderBy === cellId && order ==='asc';
            setOrder(isAscending ? 'desc' : 'asc')
            setOrderBy(cellId)
        }

        return (
            <TableHead>
                <TableRow>
                    {
                        headCells.map(headCells => (
                            <TableCell key={headCells.id}
                                sortDirection = { orderBy === headCells.id ? order: false }
                            >
                                {headCells.disableSorting ? headCells.label :
                                <TableSortLabel
                                    active = { orderBy === headCells.id}
                                    direction = { orderBy === headCells.id ? order: 'asc'}
                                    onClick = { () => {handleSortRequest(headCells.id)}}
                                >
                                    {headCells.label}
                                </TableSortLabel>
                                }
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        )
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const TblPagination = () => (
        <TablePagination
            component = "div"
            page = {page}
            rowsPerPageOptions = {pages}
            rowsPerPage={rowsPerPage}
            count = {records.length}
            onChangePage = {handleChangePage}
            onChangeRowsPerPage = {handleChangeRowsPerPage}
        />
    )
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if(order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc' 
        ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
         if(b[orderBy] < a[orderBy]) {
             return -1;
         } 
         if(b[orderBy] > a[orderBy]) {
             return 1;
         }
         return 0;
    }

    const recordsAfterPagingSorting = () => {
        return stableSort(records, getComparator(order, orderBy))
        .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingSorting,
    }
}
export default useTable;