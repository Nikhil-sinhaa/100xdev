import { z } from "zod";
import express from "express";

const app = express();
app.use(express.json());

// Define the schema
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18).optional(),
});

// Infer TypeScript type from the schema
type UserProfile = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const result = userProfileSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(411).json(result.error);
  }

  // Type-safe object
  const updateBody: UserProfile = result.data;

  console.log(updateBody.name);
  console.log(updateBody.email);
  console.log(updateBody.age);

  res.json({
    message: "User updated",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
