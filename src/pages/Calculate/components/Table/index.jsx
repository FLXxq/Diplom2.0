import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {allRows, getRow, heading} from "../../../../constants/calculate";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const rows2 = allRows.map(value => {
    return getRow(value)
})

const CalculateTable = () => {
    return (
        <TableContainer>
            <Table size={"small"} sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {heading.map((value, index) =>{
                            return <TableCell key={index} align={index !== 0 ? "right" : "left"}>{value}</TableCell>
                        } )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows2.map((row, index) => {
                        console.log(row)
                        if (!row) return null
        /*                return Object.values(row).map(({value, color, background}) => {
                            return <TableRow key={value}>
                                <TableCell
                                    style={{
                                        background: background,
                                        color: color
                                    }}
                                    component="th"
                                    scope="row"
                                >
                                    {value}
                                </TableCell>
                            </TableRow>
                        })*/
                        return (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell
                                    style={{
                                        background: row?.el1?.background,
                                        color: row?.el1?.color
                                    }}
                                    component="th"
                                    scope="row"
                                >
                                    {row?.el1?.value}
                                </TableCell>
                                <TableCell style={{background: row?.el2?.background, color: row?.el2?.color}} align="right">{row?.el2?.value}</TableCell>
                                <TableCell style={{background: row?.el3?.background, color: row?.el3?.color}} align="right">{row?.el3?.value}</TableCell>
                                <TableCell style={{background: row?.el4?.background, color: row?.el4?.color}} align="right">{row?.el4?.value}</TableCell>
                                <TableCell style={{background: row?.el5?.background, color: row?.el5?.color}} align="right">{row?.el5?.value}</TableCell>
                                <TableCell style={{background: row?.el6?.background, color: row?.el6?.color}} align="right">{row?.el6?.value}</TableCell>
                                <TableCell style={{background: row?.el7?.background, color: row?.el7?.color}} align="right">{row?.el7?.value}</TableCell>
                                <TableCell style={{background: row?.el8?.background, color: row?.el8?.color}} align="right">{row?.el8?.value}</TableCell>
                                <TableCell style={{background: row?.el9?.background, color: row?.el9?.color}} align="right">{row?.el9?.value}</TableCell>
                                <TableCell style={{background: row?.el10?.background, color: row?.el10?.color}} align="right">{row?.el10?.value}</TableCell>
                                <TableCell style={{background: row?.el11?.background, color: row?.el11?.color}} align="right">{row?.el11?.value}</TableCell>
                                <TableCell style={{background: row?.el12?.background, color: row?.el12?.color}} align="right">{row?.el12?.value}</TableCell>
                                <TableCell style={{background: row?.el13?.background, color: row?.el13?.color}} align="right">{row?.el13?.value}</TableCell>
                                <TableCell style={{background: row?.el14?.background, color: row?.el14?.color}} align="right">{row?.el14?.value}</TableCell>
                                <TableCell style={{background: row?.el15?.background, color: row?.el15?.color}} align="right">{row?.el15?.value}</TableCell>
                                <TableCell style={{background: row?.el16?.background, color: row?.el16?.color}} align="right">{row?.el16?.value}</TableCell>
                                <TableCell style={{background: row?.el17?.background, color: row?.el17?.color}} align="right">{row?.el17?.value}</TableCell>
                                <TableCell style={{background: row?.el18?.background, color: row?.el18?.color}} align="right">{row?.el18?.value}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CalculateTable;