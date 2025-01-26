"use client";
import axios from "axios";
import React, { useState } from "react";
import { IconButton, Tooltip, CircularProgress, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, ThumbUp, ThumbUpAltOutlined, Share } from "@mui/icons-material";
import performAction  from "../app/services/api";
const ActionButtons = ({ eventId, userId }) => {
  const [state, setState] = useState({
    isInterested: false,
    isFavorited: false,
    loading: false,
    likeCount: 0,
    favoriteCount: 0,
    shareCount: 0,
  });

  const handleAction = async (actionType) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const payload = {
        event_id: eventId,
        user_id: userId,
        type: actionType,
      };

      const response = await performAction(actionType, payload)

      if (response.data.status === "Success") {
        const { is_interested, type } = response.data.data;

        setState((prev) => ({
          ...prev,
          isInterested: actionType === "Like" ? is_interested : prev.isInterested,
          isFavorited: actionType === "Favorite" ? type === "Favorite" : prev.isFavorited,
          likeCount: actionType === "Like" ? prev.likeCount + 1 : prev.likeCount,
          favoriteCount: actionType === "Favorite" ? prev.favoriteCount + 1 : prev.favoriteCount,
          loading: false,
        }));
      }
    } catch (error) {
      console.error("Failed to update action", error);
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* Like Button */}
        <Tooltip title="Like">
          <IconButton
            onClick={() => handleAction("Like")}
            color={state.isInterested ? "primary" : "default"}
            disabled={state.loading}
          >
            {state.isInterested ? <ThumbUp /> : <ThumbUpAltOutlined />}
          </IconButton>
        </Tooltip>

        {/* Favorite Button */}
        <Tooltip title="Favorite">
          <IconButton
            onClick={() => handleAction("Favorite")}
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
