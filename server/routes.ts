import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact form email generation endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, subject, message } = req.body;

      // Validate required fields
      if (!firstName || !lastName || !email || !subject || !message) {
        return res.status(400).json({
          error: "Missing required fields",
          required: ["firstName", "lastName", "email", "subject", "message"]
        });
      }

      // Generate email content using the template format
      const emailContent = generateEmailTemplate({
        firstName,
        lastName,
        email,
        subject,
        message
      });

      // Store the contact submission (optional)
      // await storage.insertContact({ firstName, lastName, email, subject, message });

      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
        emailContent
      });

    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        error: "Internal server error",
        message: "Failed to process contact form"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

function generateEmailTemplate(data: ContactFormData): string {
  return `
Subject: ${data.subject}

Contact Form Submission
• First Name: ${data.firstName}
• Last Name: ${data.lastName}
• Email: ${data.email}

Message:
${data.message}
  `.trim();
}
