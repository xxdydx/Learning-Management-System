import { Typography, Button, Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const NotFoundPage = () => {
  const theme = createTheme({
    typography: {
      fontFamily: inter.style.fontFamily,
    },
    palette: {
      mode: "dark",
      primary: {
        main: "#fec006",
      },
    },
  });

  return (
    <div className="dark">
      <div className="dark:bg-bg h-screen flex items-center justify-center">
        <div className="w-full">
          <ThemeProvider theme={theme}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              textAlign="center"
              p={2}
            >
              <Typography
                variant="h1"
                component="h1"
                color="primary"
                fontWeight={700}
                gutterBottom
              >
                404
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                color="textSecondary"
                gutterBottom
              >
                Oops! The page you are looking for does not exist.
              </Typography>
              <Button
                variant="outlined"
                size={"large"}
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => {
                  window.location.href = "/";
                }}
                sx={{ mt: 4 }}
              >
                Go to Homepage
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
