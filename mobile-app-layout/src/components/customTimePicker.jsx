import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, TextField, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

export default function CustomTimePicker() {
  const [hour, setHour] = useState("07");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");

  const handleHourChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    setHour(value);
  };

  const handleMinuteChange = (event) => {
    let value = event.target.value.replace(/\D/g, "");
    setMinute(value);
  };

  const validateHour = () => {
    let num = parseInt(hour, 10);
    if (isNaN(num) || num < 1) num = 1;
    if (num > 12) num = 12;
    setHour(num.toString().padStart(2, "0"));
  };

  const validateMinute = () => {
    let num = parseInt(minute, 10);
    if (isNaN(num) || num < 0) num = 0;
    if (num > 59) num = 59;
    setMinute(num.toString().padStart(2, "0"));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6E56CF",
          borderRadius: "12px",
          padding: "20px",
          width: "320px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          flexDirection: "column"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              value={hour}
              onChange={handleHourChange}
              onBlur={validateHour}
              variant="outlined"
              inputProps={{
                style: { textAlign: "center", fontSize: "24px", width: "50px" },
                maxLength: 2,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#A89CFF",
                  borderRadius: "8px",
                  color: "#000",
                },
              }}
            />
            <Typography variant="caption" color="white">Horas</Typography>
          </Box>
          <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: "bold" }}>:</Typography>
          <Box sx={{ textAlign: "center" }}>
            <TextField
              value={minute}
              onChange={handleMinuteChange}
              onBlur={validateMinute}
              variant="outlined"
              inputProps={{
                style: { textAlign: "center", fontSize: "24px", width: "50px" },
                maxLength: 2,
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "#A89CFF",
                  borderRadius: "8px",
                  color: "#000",
                },
              }}
            />
            <Typography variant="caption" color="white">Minutos</Typography>
          </Box>
          <ToggleButtonGroup
            value={ampm}
            exclusive
            onChange={(event, newValue) => newValue && setAmPm(newValue)}
            orientation="vertical"
            sx={{
                borderRadius: "8px",
                "& .MuiToggleButton-root": {
                  fontSize: "14px",
                  width: "60px",
                  height: "30px",
                  backgroundColor: "#2E1A47",
                  color: "#6E56CF",
                  border: "1px solid #fff",
                  "&.Mui-selected": {
                    backgroundColor: "#4B0082",
                    color: "white",
                  },
                  "&:hover": {
                    backgroundColor: "#6E56CF",
                    color: "white",
                  },
                },
              }}
          >
            <ToggleButton value="AM">AM</ToggleButton>
            <ToggleButton value="PM">PM</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
