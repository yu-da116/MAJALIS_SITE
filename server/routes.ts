import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactFormEmail } from "./utils/email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: '必須項目が入力されていません' 
        });
      }

      const success = await sendContactFormEmail({ name, email, message });

      if (success) {
        res.json({ 
          success: true, 
          message: 'お問い合わせを受け付けました' 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: 'メールの送信に失敗しました' 
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: '内部サーバーエラーが発生しました' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}