import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactController } from "./controllers/contact.controller";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form API route
  app.post('/api/contact', contactController.submitContactForm);

  const httpServer = createServer(app);

  return httpServer;
}
