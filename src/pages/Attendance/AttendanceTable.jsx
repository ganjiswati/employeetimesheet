import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Calendar from "./Calendar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  date,
  status,
  checkin,
   checkout,
    duration,
  edit
) {
  return {
    date,
    status,
    checkin,
        checkout,
    duration,
    edit,
  };
}

const rows = [
  createData(
    "02-01-2023",
    "Present",
    "8:10",
    "5:5",
        8
  ),
  createData("03-01-2023", "Absent", "NA", "NA",  "NA"),
  createData(
    "04-01-2023",
    "Present",
    "8:15",
    "5:5",
     8
  ),
  createData(
    "05-01-2023",
    "Present",
    "8:01",
    "5:0",
     8
  ),
  createData("06-01-2023", "Half Day", "1:00","5", 4),
];

export default function AttendanceTable() {
  return (
    <>
     {/* <Calendar /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Date</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Check In</StyledTableCell>
              <StyledTableCell align="right">Check Out</StyledTableCell>
              <StyledTableCell align="right">Duration</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="right">{row.status}</StyledTableCell>
                <StyledTableCell align="right">{row.checkin}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.checkout}
                </StyledTableCell>
                <StyledTableCell align="right">{row.duration}</StyledTableCell>
                <StyledTableCell align="right">{row.edit}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
