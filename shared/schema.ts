import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const artworks = pgTable("artworks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  medium: text("medium").notNull(),
  year: integer("year").notNull(),
  imageUrl: text("image_url").notNull(),
  featured: boolean("featured").default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertArtworkSchema = createInsertSchema(artworks).pick({
  title: true,
  description: true,
  medium: true,
  year: true,
  imageUrl: true,
  featured: true,
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Artwork = typeof artworks.$inferSelect;
export type InsertArtwork = z.infer<typeof insertArtworkSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
