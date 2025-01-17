"use client"
import React, { useMemo, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';
import { getSponsors, deleteSponsor } from "../../../services/api";
import useFetchData from "../../../hooks/useFetchData";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast, ToastContainer } from "react-toastify";
import SponsorModal from "../submit-event/component/SponsorModal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  Button,
  TextField,
  Box,
} from "@mui/material";

const SponsorsPage = () => {
  const apiRequests = useMemo(() => [getSponsors], []);
  const { data, loading, error, refetch } = useFetchData(apiRequests);

  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);
  const [existingSponsor, setExistingSponsor] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleAddSponsor = () => {
    setExistingSponsor(null);
    setIsUpdate(false);
    setSponsorModalOpen(true);
  };

  const handleEditSponsor = (sponsor) => {
    setExistingSponsor(sponsor);
    setIsUpdate(true);
    setSponsorModalOpen(true);
  };

  const CloseModal = () => setSponsorModalOpen(false);

  const sponsorData = data?.[0] || {};
  const sponsorList = sponsorData?.data?.map((sponsor) => ({
    id: sponsor.id,
    name: sponsor.sponsorName,
    description: sponsor.sponsorDescription,
    category: sponsor.sponsorCategory,
    website: sponsor.sponsorWebsite,
    profileName: sponsor.profile_name,
    price: sponsor.sponsorPrice,
    logo: sponsor.sponsorImg,
  })) || [];

  const filteredSponsors = sponsorList.filter((sponsor) =>
    sponsor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const paginatedSponsors = filteredSponsors.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = async (sponsorId) => {
    try {
      await deleteSponsor(sponsorId);
      toast.success("Sponsor deleted successfully!");
      refetch();
    } catch (err) {
      console.error("Failed to delete sponsor:", err);
      alert("Failed to delete the sponsor. Please try again.");
    }
  };

  return (
    <div className="event-body">
      <div className="heading">Sponsors List</div>
      <div className="event-page">
        <div className="table-wrapper">
          <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="20px">
            <TextField
              label="Search Sponsors"
              variant="outlined"
              size="small"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ flex: 1, marginRight: "10px" }}
            />
            <Button variant="contained" color="primary" onClick={handleAddSponsor}>
              Add Sponsor
            </Button>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Sponsor Name</TableCell>
                  <TableCell>Website</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Profile</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Logo</TableCell>
                  <TableCell style={{ display:'none'}}>
                    Description
                  </TableCell>
                  <TableCell>Actions</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {loading ? (
                  Array.from(new Array(rowsPerPage)).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell><Skeleton width={150} /></TableCell>
                      <TableCell><Skeleton width={150} /></TableCell>
                      <TableCell><Skeleton width={150} /></TableCell>
                      <TableCell><Skeleton width={50} /></TableCell>
                      <TableCell><Skeleton width={50} /></TableCell>
                      <TableCell><Skeleton width={200} /></TableCell>
                      <TableCell><Skeleton width={30} height={30} /></TableCell>
                      <TableCell><Skeleton width={60} height={30} /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  paginatedSponsors.map((sponsor) => (
                    <TableRow key={sponsor.id}>
                      <TableCell>{sponsor.name}</TableCell>
                      <TableCell>
                        <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                          {sponsor.website}
                        </a>
                      </TableCell>
                      <TableCell>{sponsor.category}</TableCell>
                      <TableCell>{sponsor.profileName}</TableCell>
                      <TableCell>{sponsor.price}</TableCell>

                      <TableCell>
                        <img src={sponsor.logo} alt="Sponsor Logo" height={30} width={30} />
                      </TableCell>
                      <TableCell style={{ display:'none'}}>{sponsor.description}</TableCell>
                      <TableCell align="right" style={{ display: "flex", gap: "15px" }}>
                        <button
                          type="button"
                          style={{ background: "none", fontSize: "1rem" }}
                          onClick={() => handleEditSponsor(sponsor)}
                        >
                          <CiEdit />
                        </button>
                        <button
                          type="button"
                          style={{ background: "none", fontSize: "1rem" }}
                          onClick={() => handleDelete(sponsor.id)}
                        >
                          <MdDelete />
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredSponsors.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <SponsorModal
        sponsorModalOpen={sponsorModalOpen}
        CloseModal={CloseModal}
        refetch={refetch}
        isUpdate={isUpdate}
        existingSponsor={existingSponsor}
      />
    </div>
  );
};

export default SponsorsPage;
