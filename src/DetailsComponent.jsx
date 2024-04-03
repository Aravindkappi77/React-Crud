import React from "react";
import { Typography, Grid } from "@mui/material";
import { useDetailsDataContext } from "./DetailsDataProvider";

const DetailsComponent = () => {
  const { detailsData } = useDetailsDataContext();

  if (!detailsData) {
    return <div>Loading...</div>;
  }

  const { name, email, phone, address } = detailsData;

  return (
    <div>
      <Typography
        variant="h5"
        style={{ marginRight: "380px", marginTop: "30px" }}
      >
        Details Page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            Name:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            Email:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            Phone:
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              fontWeight: "bold",
              marginTop: "22px",
            }}
          >
            Address
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            HNO
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            Street
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            City
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            State
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            Country
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {email}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {phone}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "62px",
            }}
          >
            {address.HNO}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {" "}
            {address.street}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {" "}
            {address.city}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {" "}
            {address.state}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              marginTop: "22px",
            }}
          >
            {" "}
            {address.country}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailsComponent;
