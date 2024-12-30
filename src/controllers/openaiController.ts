import { Request, Response } from "express";
import axios from "axios";

export const generateResponse = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error generating response:", error);
    res.status(500).json({ message: "Error generating response", error });
  }
};
