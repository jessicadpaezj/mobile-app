import React from "react";
import { ToggleButton } from "@mui/material";

const daysOfWeek = [
  { label: "L", value: "Lunes" },
  { label: "M", value: "Martes" },
  { label: "X", value: "Miércoles" }, // Corregí "M" repetido a "X"
  { label: "J", value: "Jueves" },
  { label: "V", value: "Viernes" },
  { label: "S", value: "Sábado" },
  { label: "D", value: "Domingo" },
];

export default function WeekdaySelector({ selectedDays, onChange }) {
  const handleSelection = (dayValue) => {
    const newSelectedDays = selectedDays.includes(dayValue)
      ? selectedDays.filter((day) => day !== dayValue)
      : [...selectedDays, dayValue];

    onChange(newSelectedDays); // Llama a la función del padre
  };

  return (
    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      {daysOfWeek.map((day) => (
        <ToggleButton
          key={day.value}
          value={day.value}
          selected={selectedDays.includes(day.value)}
          onClick={() => handleSelection(day.value)}
          sx={{
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            fontSize: "14px",
            fontWeight: "bold",
            backgroundColor: selectedDays.includes(day.value) ? "#6E56CF" : "#2E1A47",
            color: "#fff",
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: "#6E56CF",
              color: "#fff",
            },
          }}
        >
          {day.label}
        </ToggleButton>
      ))}
    </div>
  );
}
