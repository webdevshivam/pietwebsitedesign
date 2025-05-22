import { Request, Response } from 'express';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number should be at least 10 digits'),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(10, 'Message should be at least 10 characters')
});

export const contactController = {
  submitContactForm: async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = contactSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        return res.status(400).json({ 
          message: 'Validation error', 
          errors: validatedData.error.errors 
        });
      }
      
      // In a real application, you might save this to a database
      // or send an email notification
      
      // Just log the data for now
      console.log('Contact form submission:', validatedData.data);
      
      // Simulate a slight delay to show loading state on the frontend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return res.status(200).json({ 
        message: 'Contact form submitted successfully' 
      });
      
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  }
};
