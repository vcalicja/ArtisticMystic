import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all artworks
  app.get("/api/artworks", async (req, res) => {
    try {
      const artworks = await storage.getArtworks();
      res.json(artworks);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artworks" });
    }
  });

  // Get single artwork
  app.get("/api/artworks/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid artwork ID" });
      }
      
      const artwork = await storage.getArtwork(id);
      if (!artwork) {
        return res.status(404).json({ message: "Artwork not found" });
      }
      
      res.json(artwork);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch artwork" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Log the contact form submission
      console.log("Contact form submission:", {
        ...validatedData,
        timestamp: new Date().toISOString(),
        destination: "theelementsart@gmail.com"
      });
      
      // In a production environment, you would integrate with an email service
      // like SendGrid, Mailgun, or AWS SES to send the email to theelementsart@gmail.com
      // For now, we'll just log it and confirm receipt
      
      res.json({ 
        message: "Thank you for your message. We will get back to you soon!",
        sent_to: "theelementsart@gmail.com"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation failed",
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
