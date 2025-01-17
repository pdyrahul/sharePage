import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, IconButton, CircularProgress } from "@mui/material";
import { createSponsor, updateSponsor } from "../../../../services/api";
import CancelIcon from "@mui/icons-material/Cancel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SponsorModal = ({ sponsorModalOpen, CloseModal, refetch, isUpdate = false, existingSponsor = null }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const initialValues = {
    name: existingSponsor?.name || "",
    website: existingSponsor?.website || "",
    price: existingSponsor?.price || "",
    category: existingSponsor?.category || "",
    description: existingSponsor?.description || "",
    image: existingSponsor?.logo || null, // Pre-fill image URL if provided
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Company name is required"),
    website: Yup.string()
      .url("Must be a valid URL")
      .required("Company website is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    category: Yup.string().required("Category is required"),
    description: Yup.string()
      .required("Short description is required")
      .min(10, "Short description must be at least 10 characters"),
      image: Yup.mixed()
      .test("fileTypeOrUrl", "Invalid file or URL", (value) => {
        if (!value) return false; // No value provided
        if (typeof value === "string") return true; // Allow string (e.g., pre-filled URL)
        if (value instanceof File) return value.size <= 500000; // Allow file under 500KB
        return false;
      }),
  });

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue("image", file); // Update Formik field value
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true); // Start loading
    const sponsorData = new FormData();
    sponsorData.append("sponsorTitle", values.name);
    sponsorData.append("sponsorWebsite", values.website);
    sponsorData.append("spsponsorPrice", values.price);
    sponsorData.append("sponsorCategory", values.category);
    sponsorData.append("sponsorDesc", values.description);
    if (values.image instanceof File) {
      sponsorData.append("sponsorImg", values.image);
    } else if (typeof values.image === "string") {
      sponsorData.append("sponsorImg", values.image);
    }
    const sponsorAction = isUpdate
      ? (data) => updateSponsor(existingSponsor.id, data) // Use userId and data
      : createSponsor;
  
    const successMessage = isUpdate
      ? "Sponsor updated successfully!"
      : "Sponsor added successfully!";
  
    sponsorAction(sponsorData)
      .then((response) => {
        resetForm(); // Reset the form after submission
        CloseModal(); // Close the modal
        Swal.fire("Success", successMessage, "success"); // Success alert
        refetch();
      })
      .catch((error) => {
        CloseModal(); 
        Swal.fire(
          "Error",
          error?.response?.data?.message || "Something went wrong. Please try again.",
          "error"
        ); // Error alert
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
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
        <Typography id="sponsor-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          {isUpdate ? "Update Sponsor" : "Add Sponsor"}
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, errors, touched, values }) => (
            <Form>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Field
                    name="name"
                    as={TextField}
                    label="Name"
                    fullWidth
                    size="small"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="website"
                    as={TextField}
                    label="Company Website"
                    fullWidth
                    size="small"
                    error={touched.website && !!errors.website}
                    helperText={touched.website && errors.website}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Field
                    name="price"
                    as={TextField}
                    label="Price"
                    fullWidth
                    size="small"
                    type="number"
                    error={touched.price && !!errors.price}
                    helperText={touched.price && errors.price}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth size="small" error={touched.category && !!errors.category}>
                    <InputLabel>Category</InputLabel>
                    <Field
                      name="category"
                      as={Select}
                      label="Category"
                      value={values.category}
                      onChange={(e) => setFieldValue("category", e.target.value)}
                    >
                      <MenuItem value="">Select Category</MenuItem>
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="Prime">Prime</MenuItem>
                      <MenuItem value="Platinum">Platinum</MenuItem>
                      <MenuItem value="Gold">Gold</MenuItem>
                      <MenuItem value="Silver">Silver</MenuItem>
                      <MenuItem value="Media">Media</MenuItem>
                    </Field>
                    <ErrorMessage name="category" component="div" style={{ color: "red" }} />
                  </FormControl>
                </Grid>
              </Grid>
              <Field
                name="description"
                as={TextField}
                label="Short Description"
                fullWidth
                size="small"
                multiline
                rows={4}
                error={touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ mt: 1 }}
              />
              <Button variant="outlined" component="label" fullWidth sx={{ mt: 2, mb: 1 }}>
                Upload Logo
                <input
                  type="file"
                  name="image"
                  hidden
                  onChange={(e) => handleFileChange(e, setFieldValue)}
                  accept="image/*"
                />
              </Button>
              {values.image && (
                <Box sx={{ position: "relative", textAlign: "center", mb: 1 }}>
                  <img
                    src={typeof values.image === 'string' ? values.image : URL.createObjectURL(values.image)}
                    alt="Image Preview"
                    style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
                  />
                  <IconButton
                    onClick={() => setFieldValue("image", null)}
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
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading} // Disable button when loading
                  >
                    {isLoading ? (
                      <>
                        <CircularProgress size={20} color="inherit" />
                        {" Saving..."}
                      </>
                    ) : isUpdate ? (
                      "Update"
                    ) : (
                      "Save"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
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

export default SponsorModal