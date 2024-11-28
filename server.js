const express = require("express");
const axios = require("axios");
const cors = require("cors");
const checklistRules = require("./config/rules");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// API Endpoint to fetch and evaluate checklist
app.get("/api/checklist", async (req, res) => {
  try {
    const response = await axios.get(
      "http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639"
    );
    const inputData = response.data;

    const results = checklistRules.map((rule) => ({
      id: rule.id,
      description: rule.description,
      status: rule.evaluate(inputData) ? "Passed" : "Failed",
    }));

    res.json({ success: true, results });
  } catch (error) {
    console.error("Error fetching API data:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch data" });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
