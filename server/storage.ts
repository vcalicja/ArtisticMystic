import { users, artworks, type User, type InsertUser, type Artwork, type InsertArtwork } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getArtworks(): Promise<Artwork[]>;
  getArtwork(id: number): Promise<Artwork | undefined>;
  createArtwork(artwork: InsertArtwork): Promise<Artwork>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private artworks: Map<number, Artwork>;
  private currentUserId: number;
  private currentArtworkId: number;

  constructor() {
    this.users = new Map();
    this.artworks = new Map();
    this.currentUserId = 1;
    this.currentArtworkId = 1;
    
    // Initialize with sample artworks
    this.initializeArtworks();
  }

  private initializeArtworks() {
    const sampleArtworks: Omit<Artwork, 'id'>[] = [
      {
        title: "Elemental Flow I",
        description: "Acrylic on canvas",
        medium: "Acrylic",
        year: 2024,
        imageUrl: "/assets/IMG_0200_1751908631019.jpeg",
        featured: true
      },
      {
        title: "Elemental Flow II",
        description: "Acrylic on canvas",
        medium: "Acrylic",
        year: 2024,
        imageUrl: "/assets/D5FD6A96-D987-444B-9AAB-0E4738A82DEF_1751908631020.jpeg",
        featured: true
      },
      {
        title: "Elemental Flow III",
        description: "Acrylic on canvas",
        medium: "Acrylic",
        year: 2024,
        imageUrl: "/assets/1CD865CC-676B-45A1-92C2-563AEA19D704_1751908631020.jpeg",
        featured: true
      }
    ];

    sampleArtworks.forEach(artwork => {
      const id = this.currentArtworkId++;
      this.artworks.set(id, { ...artwork, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getArtworks(): Promise<Artwork[]> {
    return Array.from(this.artworks.values());
  }

  async getArtwork(id: number): Promise<Artwork | undefined> {
    return this.artworks.get(id);
  }

  async createArtwork(insertArtwork: InsertArtwork): Promise<Artwork> {
    const id = this.currentArtworkId++;
    const artwork: Artwork = { 
      ...insertArtwork, 
      id,
      featured: insertArtwork.featured ?? false
    };
    this.artworks.set(id, artwork);
    return artwork;
  }
}

export const storage = new MemStorage();
