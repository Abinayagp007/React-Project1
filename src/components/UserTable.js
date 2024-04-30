// UserTable.js

import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  TextField,
  Checkbox,
  TablePagination,
} from "@mui/material";
import { Avatar } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SwapVertOutlinedIcon from '@mui/icons-material/SwapVertOutlined';

const users = [
  {
    id: 1,
    profilePicture:
      "https://www.shareicon.net/data/512x512/2016/09/15/829466_man_512x512.png",
    name: "Krishnan",
    age: 25,
    city: "New York",
    country: "USA",
    address: "123 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 2,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Radhae",
    age: 35,
    city: "Jersy",
    country: "Canada",
    address: "345 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 3,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Lakshmi",
    age: 27,
    city: "Jersy",
    country: "Canada",
    address: "520 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 4,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Guru",
    age: 33,
    city: "Jersy",
    country: "Australia",
    address: "623 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 5,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Vishnu",
    age: 33,
    city: "Tamilnadu",
    country: "India",
    address: "623 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 6,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Rani",
    age: 33,
    city: "Dubai",
    country: "UAE",
    address: "789 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  {
    id: 7,
    profilePicture:
      "https://www.shareicon.net/data/2016/09/15/829453_user_512x512.png",
    name: "Murugan",
    age: 33,
    city: "AbuDhabi",
    country: "UAE",
    address: "786 Main St",
    phoneNumber: "+1 (123) 456-7890",
  },
  // Add more users here...
];

function UserTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0); // Reset page when search term changes
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //    const sortedUsers = filteredUsers.sort((a, b) =>
  //      a.name.localeCompare(b.name)
  //    );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when rows per page changes
  };

  const sortedUsers = filteredUsers.sort((a, b) =>
    sortDirection === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );

  const handleSortClick = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <Header />
      <Typography
        variant="h5"
        align="center"
        style={{ marginTop: "20px" }}
        gutterBottom
      >
        User List
      </Typography>
      {/* <th> */}

      {/* </th> */}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{background:"plum"}}>
              <TableCell>
            
                <input
                  label="Search"
                  variant="outlined"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  Width="20%"
                  margin="normal"
                  padding="10px"
                  placeholder="Search"
                />
              </TableCell>
              {/* Empty cell for checkboxes */}
              <TableCell>S.No </TableCell>
              <TableCell>ProfilePicture</TableCell>
              <TableCell onClick={handleSortClick}>
                Name {"  "}
                {sortDirection === "asc" ? (
                  <ArrowUpward fontSize="small" align="center" />
                ) : (
                  <ArrowDownward fontSize="small" />
                )}
              </TableCell>
              <TableCell>Age</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedUsers
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
               .map((user) => (
                 <TableRow key={user.id}>
                   <TableCell padding="checkbox" align="center">
                     <Checkbox />

            {/* {sortedUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell padding="checkbox" align="center">
                  <Checkbox /> */}
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Avatar src={user.profilePicture} alt={user.name} />
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.city}</TableCell>
                <TableCell>{user.country}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={sortedUsers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
      <Footer />
    </>
  );
}

export default UserTable;
