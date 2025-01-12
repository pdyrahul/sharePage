"use client";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import React, { useMemo, useState } from "react";
import { getSponsors } from "../../../services/api";
import useFetchData from "../../../hooks/useFetchData";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import "react-loading-skeleton/dist/skeleton.css"; // Import the skeleton styles
import SponsorModal from "../submit-event/component/SponsorModal"; // Import the SponsorModal component
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
} from "@mui/material";

const SponsorsPage = () => {
  const apiRequests = useMemo(() => [getSponsors], []);
  const { data, loading, error } = useFetchData(apiRequests);

  // Modal state
  const [sponsorModalOpen, setSponsorModalOpen] = useState(false);

  // Error Handling
  if (error) {
    return (
      <div>
        <h3>Error(s):</h3>
        <ul>
          {error.map((err, idx) => (
            <li key={idx}>{err.message || "Unknown error occurred"}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Extracting data safely
  const sponsorData = data?.[0] || {};

  // Transforming sponsor data
  const sponsorList =
    sponsorData?.data?.map((sponsor) => ({
      id: sponsor.id,
      name: sponsor.sponsorName,
      description: sponsor.sponsorDescription,
      category: sponsor.sponsorCategory,
      website: sponsor.sponsorWebsite,
      profileName: sponsor.profile_name,
      price: sponsor.sponsorPrice,
      logo: sponsor.sponsorImg,
    })) || [];

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Handle add sponsor (Open modal)
  const handleAddSponsor = () => {
    setSponsorModalOpen(true); // Open the modal
  };

  // Close modal
  const CloseModal = () => {
    setSponsorModalOpen(false); // Close the modal
  };

  return (
    <div className="event-body">
      <div className="heading">Sponsors List</div>
      <div className="event-page">
        <div className="table-wrapper">
          {/* Right Align Add Sponsor Button */}
          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddSponsor}
            >
              Add Sponsor
            </Button>
          </div>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Sponsor Name</TableCell>
                  <TableCell align="center">Website</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Profile</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Logo</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading
                  ? // Display Skeletons until data is fetched
                    Array.from(new Array(rowsPerPage)).map((_, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">
                          <Skeleton width={150} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={150} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={150} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={150} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={100} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={30} height={30} />
                        </TableCell>
                        <TableCell align="center">
                          <Skeleton width={60} height={30} />
                        </TableCell>
                      </TableRow>
                    ))
                  : sponsorList
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((sponsor) => (
                        <TableRow key={sponsor.id}>
                          <TableCell align="center">{sponsor.name}</TableCell>
                          <TableCell align="center">
                            <a
                              href={sponsor.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sponsor.website}
                            </a>
                          </TableCell>
                          <TableCell align="center">
                            {sponsor.category}
                          </TableCell>
                          <TableCell align="center">
                            {sponsor.profileName}
                          </TableCell>
                          <TableCell align="center">{sponsor.price}</TableCell>
                          <TableCell align="center">
                            <img
                              src={sponsor.logo}
                              alt="Sponsor Logo"
                              height={30}
                              width={30}
                            />
                          </TableCell>
                          <TableCell
                            align="center"
                            style={{
                              display: "flex",
                              gap: "15px",
                              fontSize: "21px",
                            }}
                          >
                            <button
                              type="button"
                              style={{ background: "none" }}
                            >
                              <CiEdit />
                            </button>
                            <button
                              type="button"
                              style={{ background: "none" }}
                            >
                              <MdDelete />
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={sponsorList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>

      {/* Add Sponsor Modal */}
      <SponsorModal
        sponsorModalOpen={sponsorModalOpen}
        CloseModal={CloseModal}
      />
    </div>
  );
};

export default SponsorsPage;
