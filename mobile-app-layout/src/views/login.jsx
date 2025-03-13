import { Button, Typography, Box, useMediaQuery, Divider } from "@mui/material";
import logo from "../assets/Logo.png";
export default function Login() {
  const isMobile = useMediaQuery("(max-width:600px)"); // Detecta si la pantalla es pequeña
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#080B23",
        textAlign: "center",
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: isMobile ? "239px" : "150px",
          height: isMobile ? "239px" : "150px",
          borderRadius: "50%",
          padding: "20px",
          mb: 2,
        }}
      />
      {/* Título */}
      <Typography variant={isMobile ? "h3" : "h2"} color="white" fontWeight="bold" mb={3}>
        Inicia sesión
      </Typography>
      
      <Divider sx={{ width: "80%", my: 3, bgcolor: "#6C7A92" }} />
      {/* Botones de inicio de sesión */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "20px",
          color: "white",
          textTransform: "none",
          mb: 2,
        }}
        href="/alarm-view"
      >
        Gmail
      </Button>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "20px",
          color: "white",
          textTransform: "none",
          mb: 2,
          mt:2
        }}
        href="/alarm-view"
      >
        iCloud
      </Button>
      {/* Texto "No tienes cuenta.." */}
      <Typography variant="h5" color="white" mb={3} mt={3}>
        No tienes cuenta..
      </Typography>
      {/* Botón "Regístrate" */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "20px",
          color: "white",
          textTransform: "none",
        }}
        href="/register"
      >
        Regístrate
      </Button>
    </Box>
  );
}

