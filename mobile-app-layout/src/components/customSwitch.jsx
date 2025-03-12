import { Switch, styled } from "@mui/material";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  display: "flex",
  "& .MuiSwitch-switchBase": {
    padding: 4,
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#6F53DB", // Color morado claro activado
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22,
    height: 22,
    backgroundColor: "#FFFFFF", // Color del círculo
  },
  "& .MuiSwitch-track": {
    borderRadius: 20,
    backgroundColor: "#2E1A47", // Color morado oscuro desactivado
    opacity: 1,
  },
}));

export default CustomSwitch;