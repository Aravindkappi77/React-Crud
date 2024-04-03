import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Button,
  Grid,
  Box,
} from "@mui/material";
import AddRecordDialog from "./AddRecordDialog";
import { useNavigate } from "react-router-dom";
import { useDetailsDataContext } from "./DetailsDataProvider";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");
  const { setDetails } = useDetailsDataContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/TableData.json");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchQuery]);

  useEffect(() => {
    setFilteredData(
      data.filter((record) =>
        record.email.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      )
    );
  }, [debouncedSearchQuery, data]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCreate = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddRecord = (newRecord) => {
    setData((prevData) => [...prevData, newRecord]);
    setOpen(false);
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleDetailsClick = (record) => {
    setDetails(record);
    navigate(`/details`);
  };

  return (
    <div>
      <header className="App-header">React Table</header>
      <Box
        display="flex"
        alignItems="center"
        spacing={2}
        className="mb-4"
        sx={{ justifyContent: "space-between" }}
      >
        <Box ml={32} className="w-500">
          <TextField
            label="Search by Email Address"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        <Box mr={32}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreate}
            fullWidth
          >
            Create
          </Button>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead className="bg-gray-300">
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Delete</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((record, index) => (
              <TableRow key={record.id}>
                <TableCell>{record.name}</TableCell>
                <TableCell>{record.email}</TableCell>
                <TableCell>{record.phone}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDetailsClick(record)}
                  >
                    Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddRecordDialog
        open={open}
        onClose={handleClose}
        onAdd={handleAddRecord}
      />
    </div>
  );
};

export default TableComponent;
