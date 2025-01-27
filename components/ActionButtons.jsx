"use client";
import React, { useState, useEffect } from "react";
import { IconButton, Tooltip, CircularProgress } from "@mui/material";
import { Favorite, FavoriteBorder, ThumbUp, ThumbUpAltOutlined, Share } from "@mui/icons-material";
import axios from "axios";

const ActionButtons = ({ pageType, eventId }) => {
  const [state, setState] = useState({
    isInterested: false,
    isFavorited: false,
    loading: false,
  });

  // Fetch initial state on mount
  useEffect(() => {
    const fetchInitialState = async () => {
      setState(prev => ({ ...prev, loading: true })); // Set loading to true while fetching data
      try {
        const response = await axios.get(`https://peru-grouse-335420.hostingersite.com/api/v1/event/favorite/${eventId}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
          }
        });

        if (response.data.status === "Success") {
          const { is_interested, is_favorited } = response.data.data;
          setState(prev => ({
            ...prev,
            isInterested: Boolean(is_interested), // Ensure boolean
            isFavorited: Boolean(is_favorited),    // Ensure boolean
          }));
        } else {
          throw new Error("Unexpected API response");
        }
      } catch (error) {
        console.error("Failed to fetch initial state:", error);
      } finally {
        setState(prev => ({ ...prev, loading: false })); // Reset loading state
      }
    };

    fetchInitialState();
  }, [eventId]);

  const handleAction = async (actionType, isActive) => {
    setState(prev => ({ ...prev, loading: true }));
    const payload = {
      event: eventId,
      type: actionType,
      for: pageType,
      status: isActive ? 0 : 1, // Toggle between 0 and 1
    };
    console.log("Calling axios with payload:", payload);
  
    try {
      const response = await axios.post("https://peru-grouse-335420.hostingersite.com/api/v1/event/favorite", payload, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        }
      });
  
      console.log("API Response:", response.data);
  
      if (response.data.status === "Success") {
        // Update state based on action type
        setState(prev => ({
          ...prev,
          isInterested: actionType === "like" ? !prev.isInterested : prev.isInterested, // Toggle isInterested for "like"
          isFavorited: actionType === "Favorite" ? !prev.isFavorited : prev.isFavorited, // Toggle isFavorited for "Favorite"
        }));
      } else {
        throw new Error("Unexpected API response");
      }
    } catch (error) {
      console.error("Failed to update action:", error);
      // Optionally, show error to user
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", position:"relative"}}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Like Button */}
        <Tooltip title={state.isInterested ? "Dislike" : "Like"}>
          <IconButton
            onClick={() => handleAction("like", state.isInterested)}
            color={state.isInterested ? "primary" : "default"}
            disabled={state.loading}
          >
            {state.isInterested ? <ThumbUp /> : <ThumbUpAltOutlined />}
          </IconButton>
        </Tooltip>

        {/* Favorite Button */}
        <Tooltip title={state.isFavorited ? "Unfavorite" : "Favorite"}>
          <IconButton
            onClick={() => handleAction("Favorite", state.isFavorited)}
            color={state.isFavorited ? "secondary" : "default"}
            disabled={state.loading}
          >
            {state.isFavorited ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>

        {/* Share Button */}
        <Tooltip title="Share">
          <IconButton
            onClick={() => { /* Handle share action */ }}
            color="default"
            disabled={state.loading}
          >
            <Share />
          </IconButton>
        </Tooltip>

        {/* Loading Indicator */}
        {state.loading && <CircularProgress size={24} style={{position:"absolute", left:"0", right:"0", margin:"0 auto"}} />}
      </div>
    </div>
  );
};

export default ActionButtons;