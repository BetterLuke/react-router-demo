import { useSearchParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

export default function HelloPage() {
  const [searchParams] = useSearchParams();

  // You can get more help here： https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const params = new URLSearchParams(searchParams);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
      }}
    >
      <Typography variant="h1">{`Hello👋, ${params.get("name")} !`}</Typography>
    </Stack>
  );
}
