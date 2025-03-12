import { useState } from "react";
import React from "react";
import {
  Box,
  Typography,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CustomTimePicker from "../components/customTimePicker";
import WeekdaySelector from "../components/weekDaySelector";
import CustomSwitch from "../components/customSwitch";
import dayjs from "dayjs";

export default function AlarmConfig() {
  const [selectedTime, setSelectedTime] = useState(dayjs("07:00"));
  const [selectedDays, setSelectedDays] = useState([]);

  const options = [
    { label: "Tipo de sonido", value: "Pájaros" },
    { label: "Desafío", value: "Matemático" },
  ];

  const handleDaysChange = (days) => {
    setSelectedDays([...days]);
  };

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
        <Typography variant="h6">Configuración de Alarma</Typography>
      </Box>

      {/* Tarjeta de alarma */}
      <Box
        sx={{
          backgroundColor: "#4B3A85",
          padding: "20px",
          borderRadius: "5px",
          width: "90%",
          alignSelf: "center",
          position: "relative",
          top: -33,
        }}
      >
        {/* Selector de hora */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
          <CustomTimePicker  />
        </Box>
      </Box>

       {/* Mensaje de error si no hay días seleccionados */}
       {selectedDays.length === 0 && (
        <Typography color="error" sx={{ marginBottom: "10px" }}>
          Selecciona al menos una opción
        </Typography>
      )}

      {/* Días de la alarma */}
      <Box sx={{ width: "90%", alignSelf: "center" }}>
        <Divider sx={{ bgcolor: "#080B23", width: "100%" }} />
        <WeekdaySelector selectedDays={selectedDays} onChange={setSelectedDays} />
        <Divider sx={{ bgcolor: "#080B23", width: "100%" }} />
      </Box>

      {/* Configuración de sonido */}
      <Box sx={{ width: "90%", alignSelf: "center", marginBottom: "30px" }}>
        <List sx={{ bgcolor: "transparent", color: "#fff" }}>
          <Divider sx={{ bgcolor: "#4A37B8", width: "100%" }} />
          {/* Sonido */}
          <ListItem sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <ListItemText primary={<Typography variant="h5">Sonido</Typography>} sx={{ textAlign: "left" }} />
            <CustomSwitch defaultChecked />
          </ListItem>
          <Divider sx={{ bgcolor: "#4A37B8", width: "100%" }} />

          {/* Tipo de Sonido y Desafío */}
          {options.map((option, index) => (
            <React.Fragment key={option.label}>
              <ListItem
                secondaryAction={<NavigateNextIcon sx={{ color: "#8B5CF6" }} />}
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <ListItemText primary={<Typography variant="h5">{option.label}</Typography>} sx={{ textAlign: "left" }} />
                <ListItemText primary={<Typography variant="h5">{option.value}</Typography>} sx={{ textAlign: "right" }} />
              </ListItem>
              <Divider sx={{ bgcolor: "#4A37B8", width: "100%" }} />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Botón Guardar */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "16px",
          color: "white",
          textTransform: "none",
          alignSelf: "center",
          marginBottom: "20px",
          "&.Mui-disabled": {
            bgcolor: "#2E1A47",
            color: "#6E56CF",
          },
        }}
        disabled={selectedDays.length === 0}
        href="/alarm-view"
      >
        Guardar
      </Button>
    </Box>
  );
}
