import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  fullWidth = false,
  startIcon,
  endIcon,
  sx = {},
  type = "button",
  onClick,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      type={type}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1.2,
        transition: "all 0.2s ease",
        ...sx,
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress
          size={22}
          color="inherit"
        />
      ) : (
        children
      )}
    </Button>
  );
};

export default CustomButton;