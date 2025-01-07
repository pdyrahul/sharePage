import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, IconButton } from "@mui/material";
import {getSponsors, createSponsor } from "../../../../services/api";
import CancelIcon from '@mui/icons-material/Cancel';  // Importing the cancel icon

const SponsorModal = ({ sponsorModalOpen, CloseModal }) => {
  const [formData, setFormData] = useState({
    company: "",
    companyWebsite: "",
    price: "",
    category: "",
    shortDescription: "",
    image: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
    setErrors((prev) => ({ ...prev, image: "" })); // Clear file error
  };

  const handleRemoveImage = () => {
    setFormData({ ...formData, image: null }); // Remove image on cancel
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.companyWebsite.trim()) newErrors.companyWebsite = "Company website is required";
    if (!formData.price.trim()) newErrors.price = "Price is required";
    if (!formData.category.trim()) newErrors.category = "Category is required";
    if (!formData.shortDescription.trim()) newErrors.shortDescription = "Short description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
        const { status, message } = response.data;

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
      getSponsors();
  };

  return (
    <Modal
      open={sponsorModalOpen}
      onClose={CloseModal}
      aria-labelledby="sponsor-modal-title"
      aria-describedby="sponsor-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="sponsor-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          Add Sponsor
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="Company"
                name="company"
                fullWidth
                size="small"
                value={formData.company}
                onChange={handleInputChange}
                error={!!errors.company}
                helperText={errors.company}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Company Website"
                name="companyWebsite"
                fullWidth
                size="small"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                error={!!errors.companyWebsite}
                helperText={errors.companyWebsite}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={6}>
              <TextField
                label="Price"
                name="price"
                fullWidth
                size="small"
                type="number"
                value={formData.price}
                onChange={handleInputChange}
                error={!!errors.price}
                helperText={errors.price}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth size="small" error={!!errors.category}>
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
                {errors.category && (
                  <Typography variant="caption" color="error">
                    {errors.category}
                  </Typography>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <TextField
            label="Short Description"
            name="shortDescription"
            fullWidth
            size="small"
            multiline
            rows={4}
            value={formData.shortDescription}
            onChange={handleInputChange}
            error={!!errors.shortDescription}
            helperText={errors.shortDescription}
            sx={{ mt: 1 }}
          />
          <Button variant="outlined" component="label" fullWidth sx={{ mt: 2, mb: 1 }}>
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
            <Box sx={{ position: "relative", textAlign: "center", mb: 1 }}>
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Image Preview"
                style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
              />
              <IconButton
                onClick={handleRemoveImage}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.7)" },
                }}
              >
                <CancelIcon sx={{ color: "#ff0000" }} />
              </IconButton>
            </Box>
          )}
          {errors.image && (
            <Typography variant="caption" color="error" align="center">
              {errors.image}
            </Typography>
          )}
          <Grid container spacing={2}>
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
            <Grid item xs={6}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #c11",
  boxShadow: 24,
  p: 3,
  width: "90%", // Default for mobile
  maxWidth: 600, // Ensures it doesn't exceed 600px on larger screens
  borderRadius: 4,
  overflowY: "auto",
};

export default SponsorModal;
