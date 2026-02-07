import { inquiries, type Inquiry, type InsertInquiry } from "@shared/schema";

// This is a static site, so we don't really need storage, 
// but we keep the interface for consistency with the framework.
export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
}

export class MemStorage implements IStorage {
  private inquiries: Map<number, Inquiry>;
  private currentId: number;

  constructor() {
    this.inquiries = new Map();
    this.currentId = 1;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentId++;
    const inquiry: Inquiry = { ...insertInquiry, id, contacted: false };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
