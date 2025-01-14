import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, IconButton, CircularProgress } from "@mui/material";
import { createSponsor, updateSponsor } from "../../../../services/api";
import CancelIcon from "@mui/icons-material/Cancel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SponsorModal = ({ sponsorModalOpen, CloseModal, refetch, isUpdate = false, existingSponsor = null }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const initialValues = existingSponsor || {
    company: "",
    companyWebsite: "",
    companyPrice: "",
    companyCategory: "",
    shortDescription: "",
    image: null,
  };

  const validationSchema = Yup.object({
    company: Yup.string().required("Company name is required"),
    companyWebsite: Yup.string()
      .url("Must be a valid URL")
      .required("Company website is required"),
    companyPrice: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    companyCategory: Yup.string().required("Category is required"),
    shortDescription: Yup.string()
      .required("Short description is required")
      .min(10, "Short description must be at least 10 characters"),
    image: Yup.mixed()
      .required("Image is required")
      .test("fileSize", "Image size must be less than 500KB", (value) => value && value.size <= 500000),
  });

  const handleFileChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    setFieldValue("image", file); // Update Formik field value
  };

  const handleSubmit = (values, { resetForm }) => {
    setIsLoading(true); // Start loading
    const sponsorData = new FormData();
    sponsorData.append("sponsorTitle", values.company);
    sponsorData.append("sponsorWebsite", values.companyWebsite);
    sponsorData.append("spsponsorPrice", values.companyPrice);
    sponsorData.append("sponsorCategory", values.companyCategory);
    sponsorData.append("sponsorDesc", values.shortDescription);
    if (values.image) {
      sponsorData.append("sponsorImg", values.image);
    }

    const sponsorAction = isUpdate ? updateSponsor : createSponsor;
    const successMessage = isUpdate ? "Sponsor updated successfully!" : "Sponsor added successfully!";

    sponsorAction(sponsorData)
      .then((response) => {
        resetForm(); // Reset the form after submission
        CloseModal(); // Close the modal
        Swal.fire("Success", successMessage, "success"); // Success alert
        refetch();
      })
      .catch((error) => {
        Swal.fire("Error", "Something went wrong. Please try again.", "error"); // Error alert
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
                    name="company"
                    as={TextField}
                    label="Company"
                    fullWidth
                    size="small"
                    error={touched.company && !!errors.company}
                    helperText={touched.company && errors.company}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    name="companyWebsite"
                    as={TextField}
                    label="Company Website"
                    fullWidth
                    size="small"
                    error={touched.companyWebsite && !!errors.companyWebsite}
                    helperText={touched.companyWebsite && errors.companyWebsite}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                <Grid item xs={6}>
                  <Field
                    name="companyPrice"
                    as={TextField}
                    label="Price"
                    fullWidth
                    size="small"
                    type="number"
                    error={touched.companyPrice && !!errors.companyPrice}
                    helperText={touched.companyPrice && errors.companyPrice}
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth size="small" error={touched.companyCategory && !!errors.companyCategory}>
                    <InputLabel>Category</InputLabel>
                    <Field
                      name="companyCategory"
                      as={Select}
                      label="Category"
                    >
                      <MenuItem value="">Select Category</MenuItem>
                      <MenuItem value="General">General</MenuItem>
                      <MenuItem value="Prime">Prime</MenuItem>
                      <MenuItem value="Platinum">Platinum</MenuItem>
                      <MenuItem value="Gold">Gold</MenuItem>
                      <MenuItem value="Silver">Silver</MenuItem>
                      <MenuItem value="Media">Media</MenuItem>
                    </Field>
                    <ErrorMessage name="companyCategory" component="div" style={{ color: "red" }} />
                  </FormControl>
                </Grid>
              </Grid>
              <Field
                name="shortDescription"
                as={TextField}
                label="Short Description"
                fullWidth
                size="small"
                multiline
                rows={4}
                error={touched.shortDescription && !!errors.shortDescription}
                helperText={touched.shortDescription && errors.shortDescription}
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
                    src={URL.createObjectURL(values.image)}
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
                    startIcon={isLoading && <CircularProgress size={20} color="inherit" />}
                  >
                    {isLoading ? "Saving..." : isUpdate ? "Update" : "Save"}
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

export default SponsorModal;
