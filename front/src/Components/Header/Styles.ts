/* eslint-disable */
import { AppBar } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "inherit",
  background:"#02354D !important",
  "& .MuiButtonBase-root": {
    color: "#fff",
  },
  "& .MuiTypography-root": {
    color: "#fff",
  },
  "& .MuiInputBase-root": {
    color: "#fff",
  },
  "& .MuiSvgIcon-root": {
    color: "#fff",
  },
}));
