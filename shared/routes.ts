import { z } from 'zod';
import { insertInquirySchema } from './schema';

export const api = {
  inquiries: {
    create: {
      method: 'POST' as const,
      path: '/api/inquiries' as const,
      input: insertInquirySchema,
      responses: {
        200: z.object({ success: z.boolean() })
      }
    }
  }
};
