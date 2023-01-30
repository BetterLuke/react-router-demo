import { Stack, Typography } from "@mui/material";

export default function GreetingPage() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
      }}
    >
      <Typography variant="h1">Greetings 🎉</Typography>
    </Stack>
  );
}
