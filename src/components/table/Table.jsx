import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      product: "Acer Nitro 5",
      customer: "John Smith",
      date: "12/29/2022",
      amount: "566565",
      method: "Cash On Delivery",
      status: "Approved",
    },
    {
      id: 2,
      product: "Play Station 5",
      customer: "Micheal Doe",
      date: "12/29/2022",
      amount: "202243",
      method: "Cash On Delivery",
      status: "Pending",
    },
    {
      id: 3,
      product: "Redragon 101",
      customer: "John Doe",
      date: "12/20/2022",
      amount: "94050",
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 4,
      product: "Razonr Brade 15",
      customer: "Robert",
      date: "12/29/2022",
      amount: "120909",
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                    <img src="" alt="" className="image" />
                    {row.product}
                </div>
                </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
