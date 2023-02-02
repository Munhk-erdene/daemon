import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`[Server] Listening on :${PORT}`);
});
