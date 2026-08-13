import express from "express";
import cors from "cors";
import { siteContent } from "./siteContent.js";
import { saveEnquiry } from "./storage.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, service: "apniwebsite-server" });
});

app.get("/api/site-content", (_request, response) => {
  response.json(siteContent);
});

app.post("/api/enquiries", async (request, response) => {
  const { name, businessType, phone, packageName, message } = request.body ?? {};

  if (!name || !businessType || !phone || !packageName || !message) {
    return response.status(400).json({
      message: "Please fill in all required fields."
    });
  }

  try {
    await saveEnquiry({
      name,
      businessType,
      phone,
      packageName,
      message
    });

    return response.status(201).json({
      message: "Enquiry stored successfully."
    });
  } catch (error) {
    return response.status(500).json({
      message: "Unable to save enquiry right now."
    });
  }
});

app.listen(port, () => {
  console.log(`apniwebsite server running on http://localhost:${port}`);
});
