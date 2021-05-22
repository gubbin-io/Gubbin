import app from "./app";

// Use port from environment variables and 5000 as fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
