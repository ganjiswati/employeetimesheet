import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(type, date, reason, status) {
  return { type, date, reason, status };
}

const rows = [
  createData("Republic Day", "26th Jan", " "),
  createData("Sick Leave", " 2nd Fed", "I'm Sick", "Approved"),
  createData("Gudi Padwa", "22nd Mar", " "),
  createData("Maharashtra Day", "1 May", " "),
  createData("Independence Day", "15th Aug", " "),
  createData("Raksha Bandhan", "30th Aug ", " "),
];

export default function BasicTable() {
  return (
    <TableContainer className="table-dark" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Holiday/leave Type </TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Reason </TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.reason}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
