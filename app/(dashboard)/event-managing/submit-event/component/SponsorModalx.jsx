import React, { useState } from "react";
import { Modal, Box, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem, Grid, IconButton, CircularProgress } from "@mui/material";
import { createSponsor, updateSponsor } from "../../../../services/api";
import CancelIcon from "@mui/icons-material/Cancel";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const SponsorModal = ({ sponsorModalOpen, CloseModal, refetch, isUpdate = false, existingSponsor = null }) => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

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