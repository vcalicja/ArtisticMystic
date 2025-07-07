// Content Management System
// This file handles loading and managing site content

export interface ArtworkConfig {
  id: number;
  title: string;
  medium: string;
  year: number;
  description: string;
  imageUrl: string;
  available: boolean;
  featured: boolean;
}

export interface SiteConfig {
  site: {
    title: string;
    description: string;
    contact: {
      email: string;
      instagram: string;
      location: string;
    };
  };
  hero: {
    text: string;
    videoUrl: string;
  };
  artworks: ArtworkConfig[];
}

// Load configuration from JSON file
export async function loadSiteConfig(): Promise<SiteConfig> {
  try {
    const response = await fetch('/content/config.json');
    if (!response.ok) {
      throw new Error('Failed to load site configuration');
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading site config:', error);
    // Return default config as fallback
    return getDefaultConfig();
  }
}

// Default configuration (fallback)
function getDefaultConfig(): SiteConfig {
  return {
    site: {
      title: "The Elements Art",
      description: "Abstract art portfolio by The Elements Art, Vienna, Austria",
      contact: {
        email: "theelementsart@gmail.com",
        instagram: "theelements.art",
        location: "Vienna, Austria"
      }
    },
    hero: {
      text: "Abstract art comes from what it inspires within you- your feelings, thoughts, and personal response. The space between the artwork and your experience is where the art truly lives.",
      videoUrl: "/attached_assets/Video Project_1751915436061.mp4"
    },
    artworks: [
      {
        id: 1,
        title: "EARTH + FIRE",
        medium: "Mixed technique",
        year: 2025,
        description: "Available for sale",
        imageUrl: "/attached_assets/D5FD6A96-D987-444B-9AAB-0E4738A82DEF_1751908631020.jpeg",
        available: true,
        featured: true
      },
      {
        id: 2,
        title: "WATER + AIR",
        medium: "Mixed technique",
        year: 2025,
        description: "Available for sale",
        imageUrl: "/attached_assets/1CD865CC-676B-45A1-92C2-563AEA19D704_1751908631020.jpeg",
        available: true,
        featured: true
      },
      {
        id: 3,
        title: "WATER + EARTH",
        medium: "Mixed technique",
        year: 2024,
        description: "SOLD",
        imageUrl: "/attached_assets/2675AF41-D9ED-4CA2-BE6B-6BCCCC67B3F2_1751915436060.png",
        available: false,
        featured: true
      }
    ]
  };
}

// Utility functions for content management
export function getArtworkStatus(artwork: ArtworkConfig): string {
  return artwork.available ? 'Available for sale' : 'SOLD';
}

export function getFeaturedArtworks(artworks: ArtworkConfig[]): ArtworkConfig[] {
  return artworks.filter(artwork => artwork.featured);
}

export function getAvailableArtworks(artworks: ArtworkConfig[]): ArtworkConfig[] {
  return artworks.filter(artwork => artwork.available);
}