import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import authRouter from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.route.js";
import galleryCategoryRoutes from "./routes/category.route.js";
import galleryRoutes from "./routes/gallery.route.js";

dotenv.config();

const app = express();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

app.use(express.json());

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (server-to-server, curl, test scripts)
    if (!origin) {
      return callback(null, true);
    }
    
    // In development, allow all origins for easier testing
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    // In production, only allow the frontend URL
    const allowedOrigins = [FRONTEND_URL];
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// ---------------- CORS FIX ----------------
app.use(cors(corsOptions));

// ----------- HELMET FIX FOR CORS ----------
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: false,
  })
);

// -------------------------------------------
app.use(morgan("dev"));

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Routes
app.use("/api/auth", authRouter);
app.use("/api/blogs", blogRoutes);
app.use("/api/gallery-category", galleryCategoryRoutes);
app.use("/api/gallery", galleryRoutes);

// Start server
const PORT = process.env.PORT || 5001; // Changed from 5000 to avoid AirPlay conflict on macOS
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
