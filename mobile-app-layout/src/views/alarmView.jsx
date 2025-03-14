import { Box, Typography, Button, BottomNavigation, BottomNavigationAction, Switch, IconButton  } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AlarmIcon from "@mui/icons-material/Alarm";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import EditIcon from "@mui/icons-material/Edit";
import CustomSwitch from "../components/customSwitch";
import { useState } from "react";

export default function NewAlarm() {
  //const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#080B23",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* Encabezado */}
      <Box sx={{ backgroundColor: "#4A37B8", padding: "16px", display: "flex", justifyContent: "space-between",  alignItems: "center", position: "relative"  }}>
        <Typography variant="h6"  sx={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>Alarmas</Typography>
        <IconButton 
          sx={{ color: "white", position: "relative", left: "90%" }} 
          href="/login"
        >
          <LogoutIcon />
        </IconButton>
      </Box>

      {/* Tarjeta de alarma */}
      <Box
        sx={{
          backgroundColor: "#1A1D42",
          padding: "37px",
          borderRadius: "10px",
          width: "80%",
          alignSelf: "center",
          position: "relative",
          top:-114,
        }}
      >
        {/* Días de la alarma */}
        <Typography variant="subtitle1" align="center">L M V</Typography>

        {/* Hora de la alarma */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Typography variant="h3">07:00 AM</Typography>
          {/* <Switch color="primary" defaultChecked /> */}
          <CustomSwitch defaultChecked />
        </Box>
      </Box>
        
      {/* Botón Editar (posicionado correctamente) */}
      <IconButton
        sx={{
          position: "relative",
          alignSelf: "center",
          right: "-160px",
          bottom: "-80px",
          backgroundColor: "#6E56CF",
          color: "white",
          width:"70px",
          height: "70px"
        }}
        href="/alarm-config"
      >
        <EditIcon />
      </IconButton>

      

      {/* Barra de navegación inferior */}
      <BottomNavigation
        /*value={value}*/
        showLabels
        sx={{ backgroundColor: "#2E1A47" }}
      >
        <BottomNavigationAction label="Alarma" icon={<AlarmIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Reporte" icon={<BarChartIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Tendencias" icon={<TrendingUpIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Dispositivos" icon={<DevicesIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Config" icon={<SettingsIcon />} sx={{ color:"white" }} />
      </BottomNavigation>
    </Box>
  );
}