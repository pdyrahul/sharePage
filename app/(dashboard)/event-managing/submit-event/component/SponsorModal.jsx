import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import { createSponsor } from "../../../../services/api";

const SponsorModal = ({ sponsorModalOpen, CloseModal }) => {
  const [formData, setFormData] = useState({
    company: "",
    companyWebsite: "",
    price: "",
    category: "",
    shortDescription: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.price) {
      alert("Price is required!");
      return;
    }

    const newSponsor = new FormData();
    newSponsor.append("sponsorTitle", formData.company);
    newSponsor.append("sponsorWebsite", formData.companyWebsite);
    newSponsor.append("spsponsorPrice", formData.price);
    newSponsor.append("sponsorCategory", formData.category);
    newSponsor.append("sponsorDesc", formData.shortDescription);

    if (formData.image) {
      newSponsor.append("sponsorImg", formData.image);
    }

    createSponsor(newSponsor)
      .then((response) => {
        const { status, message, data } = response.data;

        if (status === "Success") {
          alert(message);
          CloseModal();
          setFormData({
            company: "",
            companyWebsite: "",
            price: "",
            category: "",
            shortDescription: "",
            image: null,
          });
        } else {
          alert("Failed to create sponsor. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error creating sponsor:", error);
        alert("Error creating sponsor. Please try again.");
      });
  };

  return (
    <Modal
      open={sponsorModalOpen}
      onClose={CloseModal}
      aria-labelledby="sponsor-modal-title"
      aria-describedby="sponsor-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="sponsor-modal-title" variant="h6" component="h2">
          Add Sponsor
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Row with two inputs side by side */}
          <Grid container spacing={1}>
            {/* Company Field */}
            <Grid item xs={6}>
              <TextField
                label="Company"
                name="company"
                fullWidth
                value={formData.company}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: 2 }}
              />
            </Grid>

            {/* Company Website */}
            <Grid item xs={6}>
              <TextField
                label="Company Website"
                name="companyWebsite"
                fullWidth
                type="url"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: 2 }}
              />
            </Grid>
          </Grid>

          {/* Row with price and category side by side */}
          <Grid container spacing={1}>
            {/* Price */}
            <Grid item xs={6}>
              <TextField
                label="Price"
                name="price"
                fullWidth
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                required
                sx={{ marginBottom: 2 }}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={6}>
              <FormControl fullWidth required sx={{ marginBottom: 2 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  label="Category"
                >
                  <MenuItem value="">Select Category</MenuItem>
                  <MenuItem value="General">General</MenuItem>
                  <MenuItem value="Prime">Prime</MenuItem>
                  <MenuItem value="Platinum">Platinum</MenuItem>
                  <MenuItem value="Gold">Gold</MenuItem>
                  <MenuItem value="Silver">Silver</MenuItem>
                  <MenuItem value="Media">Media</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Short Description */}
          <TextField
            label="Short Description"
            name="shortDescription"
            fullWidth
            multiline
            rows={2}
            value={formData.shortDescription}
            onChange={handleInputChange}
            required
            sx={{ marginBottom: 2 }}
          />

          {/* Image Upload */}
          <Button variant="outlined" component="label" fullWidth sx={{ marginBottom: 2 }}>
            Upload Logo
            <input
              type="file"
              name="image"
              hidden
              onChange={handleFileChange}
              accept="image/*"
            />
          </Button>
          {formData.image && (
            <Typography variant="body2" align="center">
              Selected File: {formData.image.name}
            </Typography>
          )}

          {/* Submit Button (half width side by side) */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save Sponsor
              </Button>
            </Grid>

            {/* Close Button */}
            <Grid item xs={6}>
              <Button
                onClick={CloseModal}
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#c11",
                  "&:hover": { backgroundColor: "#a00" },
                }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

// Modal styling for 600x600px size
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #c11",
  boxShadow: 24,
  p: 4,
  width: 450,
  borderRadius:8,
  overflowY: "auto", // Ensure scrolling if content overflows
};

export default SponsorModal;
