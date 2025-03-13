import { useState } from "react";
import {
  Button,
  Typography,
  Box,
  useMediaQuery,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Slide,
} from "@mui/material";
import logo from "../assets/Logo.png";
export default function Register() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [openGmail, setOpenGmail] = useState(false);
  const [openIcloud, setOpenIcloud] = useState(false);
  const handleOpenGmail = () => setOpenGmail(true);
  const handleCloseGmail = () => {
    setOpenGmail(false);
    setOpenIcloud(false); // Asegura que también se cierre iCloud
  };
  const handleOpenIcloud = () => setOpenIcloud(true);
  const handleCloseIcloud = () => {
    setOpenIcloud(false);
    setOpenGmail(false); // Asegura que también se cierre Gmail
  };
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
        Regístrate
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
        onClick={handleOpenGmail}
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
        }}
        onClick={handleOpenIcloud}
      >
        iCloud
      </Button>
      {/* Texto "Ya tienes cuenta.." */}
      <Typography variant="h5" color="white" mb={2} mt={3}>
        ¿Ya tienes cuenta?
      </Typography>
      {/* Botón "Inicia sesión" */}
      <Button
        variant="contained"
        sx={{
          bgcolor: "#6E56CF",
          borderRadius: "20px",
          width: "80%",
          fontSize: "20px",
          color: "white",
          textTransform: "none",
          mb: 3, // Ajustado para subir un poco más el botón
        }}
        href="/login"
      >
        Inicia sesión
      </Button>
      {/* Modal de confirmación para Gmail */}
      <Dialog
        open={openGmail}
        onClose={handleCloseGmail}
        TransitionComponent={(props) => <Slide direction="up" {...props} />}
        disableEscapeKeyDown
        sx={{
          "& .MuiPaper-root": {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: "100%",
            maxWidth: "500px",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          ¿Autorizas la creación de tu cuenta utilizando tu correo de Google?
        </DialogTitle>
        <DialogActions sx={{ display: "flex", flexDirection: "column", gap: 1.5, pb: 2 }}>
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
            onClick={handleCloseGmail}
            href="/new-alarm"
          >
            Sí
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
            }}
            onClick={handleCloseGmail}
            href="/register"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
      {/* Modal de confirmación para iCloud */}
      <Dialog
        open={openIcloud}
        onClose={handleCloseIcloud}
        TransitionComponent={(props) => <Slide direction="up" {...props} />}
        disableEscapeKeyDown
        sx={{
          "& .MuiPaper-root": {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            margin: "auto",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: "100%",
            maxWidth: "500px",
          },
        }}
      >
        <DialogTitle sx={{ textAlign: "center" }}>
          ¿Autorizas la creación de tu cuenta utilizando tu correo de iCloud?
        </DialogTitle>
        <DialogActions sx={{ display: "flex", flexDirection: "column", gap: 1.5, pb: 2 }}>
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
            onClick={handleCloseIcloud}
            href="/new-alarm"
          >
            Sí
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
            }}
            onClick={handleCloseIcloud}
            href="/register"
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}