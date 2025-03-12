import { Box, Typography, Button, BottomNavigation, BottomNavigationAction } from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";
import BarChartIcon from "@mui/icons-material/BarChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DevicesIcon from "@mui/icons-material/Devices";
import SettingsIcon from "@mui/icons-material/Settings";
import { useState } from "react";

export default function NewAlarm() {

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
      <Box sx={{ backgroundColor: "#4A37B8", padding: "16px" }}>
        <Typography variant="h6">Alarmas</Typography>
      </Box>

      {/* Mensaje */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h5">No tienes alarmas</Typography>
        <Typography variant="h5">agrega una</Typography>
      </Box>

      {/* Botón Agregar Alarma */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "20px",
          color: "white",
          textTransform: "none",
          alignSelf: "center",
          marginBottom: "16px",
          mb: 4,
        }}
        href="/alarm-config"
      >
        Agrega alarma
      </Button>

      {/* Barra de navegación inferior */}
      <BottomNavigation
        showLabels
        sx={{ backgroundColor: "#2E1A47" }}
      >
        <BottomNavigationAction label="Alarma" icon={<AlarmIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Reporte" icon={<BarChartIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Tendencias" icon={<TrendingUpIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Dispositivos" icon={<DevicesIcon />} sx={{ color: "white" }} />
        <BottomNavigationAction label="Config" icon={<SettingsIcon />} sx={{ color: "white" }} />
      </BottomNavigation>
    </Box>
  );
}
