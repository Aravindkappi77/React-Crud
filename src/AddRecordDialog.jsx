import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const AddRecordDialog = ({ open, onClose, onAdd }) => {
  const [newRecord, setNewRecord] = useState({
    name: "",
    email: "",
    phone: "",
    address: { HNO: "", street: "", city: "", state: "", country: "" },
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleAddressChange = (event) => {
    const { name, value } = event.target;
    setNewRecord((prevRecord) => ({
      ...prevRecord,
      address: {
        ...prevRecord.address,
        [name]: value,
      },
    }));
  };

  const handleAddRecord = () => {
    onAdd(newRecord);
    setNewRecord({
      name: "",
      email: "",
      phone: "",
      address: { HNO: "", street: "", city: "", state: "", country: "" },
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        Add New Record
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              name="name"
              value={newRecord.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              name="email"
              value={newRecord.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone"
              name="phone"
              value={newRecord.phone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="HNO"
              name="HNO"
              value={newRecord.address.HNO}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Street"
              name="street"
              value={newRecord.address.street}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="City"
              name="city"
              value={newRecord.address.city}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="State"
              name="state"
              value={newRecord.address.state}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Country"
              name="country"
              value={newRecord.address.country}
              onChange={handleAddressChange}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddRecord} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddRecordDialog;
