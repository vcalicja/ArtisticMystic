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
        title: "Ethereal Flow",
        description: "Mixed media on canvas",
        medium: "Mixed media",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: true
      },
      {
        title: "Void Essence",
        description: "Acrylic on canvas",
        medium: "Acrylic",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: true
      },
      {
        title: "Transcendent Forms",
        description: "Oil on canvas",
        medium: "Oil",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: false
      },
      {
        title: "Infinite Dimension",
        description: "Mixed media",
        medium: "Mixed media",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: false
      },
      {
        title: "Sublime Consciousness",
        description: "Charcoal on paper",
        medium: "Charcoal",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1577720580479-7948dd2ba8fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: false
      },
      {
        title: "Emergence",
        description: "Ink on canvas",
        medium: "Ink",
        year: 2024,
        imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        featured: false
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
    const artwork: Artwork = { ...insertArtwork, id };
    this.artworks.set(id, artwork);
    return artwork;
  }
}

export const storage = new MemStorage();
