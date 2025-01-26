"use client";
import React, { useState } from "react";
import { IconButton, Tooltip, CircularProgress, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, ThumbUp, ThumbUpAltOutlined, Share } from "@mui/icons-material";
import performAction from "../app/services/api";
import useFetchData from "../app/hooks/useFetchData";
const ActionButtons = ({ pageType, eventId, userId, profileId }) => {
  const [state, setState] = useState({
    isInterested: false,
    isFavorited: false,
    loading: false,
    likeCount: 0,
    favoriteCount: 0,
    shareCount: 0,
  });

  const handleAction = (actionType, isActive) => {
    setState(prev => ({ ...prev, loading: true }));
  
    try {
      const payload = {
        user_id: userId,
        profile_id: profileId,
        event_id: eventId,
        type: actionType,
        for: pageType,
        status: isActive ? 0 : 1,
      };
      const response = performAction(payload);
      if (response.data.status === "Success") {
        const { is_interested, type } = response.data.data;
        updateState(actionType, isActive, is_interested, type);
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
  
  const updateState = (actionType, isActive, is_interested, type) => {
    setState(prev => ({
      ...prev,
      isInterested: actionType === "like" ? is_interested : prev.isInterested,
      isFavorited: actionType === "Favorite" ? type === "Favorite" : prev.isFavorited,
      likeCount: updateCount(actionType === "like", isActive, prev.likeCount),
      favoriteCount: updateCount(actionType === "Favorite", isActive, prev.favoriteCount),
    }));
  };
  
  const updateCount = (isActionType, isActive, count) => 
    isActionType ? (isActive ? count - 1 : count + 1) : count;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
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
            onClick={() =>
              setState((prev) => ({
                ...prev,
                shareCount: prev.shareCount + 1,
              }))
            }
            color="default"
            disabled={state.loading}
          >
            <Share />
          </IconButton>
        </Tooltip>

        {/* Loading Indicator */}
        {state.loading && <CircularProgress size={24} />}
      </div>

      {/* Counts Display */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Typography variant="body2" color="textSecondary">
          Likes: {state.likeCount}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Favorites: {state.favoriteCount}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Shares: {state.shareCount}
        </Typography>
      </div>
    </div>
  );
};

export default ActionButtons;
