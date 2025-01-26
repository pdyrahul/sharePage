import React, { useMemo, useState, useEffect } from 'react'
import useFetchData from "../app/hooks/useFetchData";
import { userProfiles, setProfile } from "../app/services/api";

import { Dropdown } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
export default function Profile() {
    const [selectedProfile, setSelectedProfile] = useState(null);

    const apiRequests = useMemo(() => [userProfiles], []);
    const { data, isLoading, error } = useFetchData(apiRequests);
    const profiles = data?.[0]?.data || [];

    useEffect(() => {
        // Function to handle resizing
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Check for default profile selection
        const initializeProfile = () => {
            if (!selectedProfile && profiles.length > 0) {
                const defaultProfile =
                    profiles.find((profile) => profile.spProfilesDefault === 1) ||
                    profiles[0];
                setSelectedProfile(defaultProfile);
            }
        };

        // Initialize profile and set up resize listener
        initializeProfile();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [profiles, selectedProfile]);

    const handleProfileSelect = async (profile) => {
        try {
            // Set the selected profile locally
            setSelectedProfile(profile);

            // Store the selected profile in sessionStorage
            sessionStorage.setItem("selectedProfile", JSON.stringify(profile));

            // Update the profile on the server
            const response = await setProfile(profile.idspProfiles);
        } catch (error) {
            console.error(
                "Error setting default profile:",
                error.response?.data || error.message
            );
        }
    };
    return (
        <>
            <div className="profile-section ">
                {profiles.length > 0 ? (
                    <Dropdown style={{ width: "220px", textTransform: "capitalize" }}>
                        <Dropdown.Toggle
                            variant="link"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                color: "#fff",
                                textDecoration: "none",
                                width: "100%",
                            }}
                        >
                            <div
                                className="profileWrapper d-flex align-items-center  w-100"
                                style={{ justifyContent: "space-between" }}
                            >
                                <div className="figure">
                                    {selectedProfile?.spProfilePic ? (
                                        <img
                                            src={selectedProfile.spProfilePic}
                                            width={32}
                                            height={32}
                                            style={{ borderRadius: "50%" }}
                                        />
                                    ) : (
                                        <CgProfile size={32} style={{ color: "#ccc" }} />
                                    )}
                                </div>
                                <div className="figDetails d-flex flex-column align-items-end ">
                                    <strong
                                        style={{ fontSize: "14px", textTransform: "capitalize" }}
                                    >
                                        {selectedProfile?.spProfileName}
                                    </strong>
                                    <span
                                        style={{
                                            marginTop: "-5px",
                                            fontSize: "12px",
                                            maxWidth: "200px",
                                        }}
                                    >
                                        {selectedProfile?.profile_type?.spProfileTypeName}
                                    </span>
                                </div>
                            </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ translate: "-35px" }}>
                            {profiles.map((profile) => (
                                <Dropdown.Item
                                    key={profile.idspProfiles}
                                    onClick={() => handleProfileSelect(profile)}
                                    style={{
                                        cursor: "pointer",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        borderBottom: "1px solid #d9d9d9",
                                    }}
                                >
                                    {profile.spProfilePic ? (
                                        <img
                                            src={profile.spProfilePic}
                                            alt={profile.spProfileName}
                                            className="rounded-circle me-2"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <CgProfile
                                            size={40}
                                            className="rounded-circle me-2"
                                            style={{ color: "#ccc" }}
                                        />
                                    )}
                                    <div className="d-flex flex-column align-items-end">
                                        <strong>{profile.spProfileName}</strong>
                                        <small className="text-muted">
                                            {profile.profile_type.spProfileTypeName}
                                        </small>
                                    </div>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <div className="profileWrapper d-flex align-items-center  w-100"
                        style={{ justifyContent: "space-between" }}>
                        <div className="figure">
                            {selectedProfile?.spProfilePic ? (
                                <img
                                    src={selectedProfile.spProfilePic}
                                    width={32}
                                    height={32}
                                    style={{ borderRadius: "50%" }}
                                />
                            ) : (
                                <CgProfile size={32} style={{ color: "#ccc" }} />
                            )}
                        </div>
                        <div className="figDetails d-flex flex-column align-items-end ">
                            <strong
                                style={{ fontSize: "14px", textTransform: "capitalize", color: "#fff", padding: "0 10px" }}
                            >
                                Login
                            </strong>

                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
