import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
  mongoose.connect("mongodb+srv://aryan12a17:OqLGXwPTqTWwaI38@cluster0.7fzy5qd.mongodb.net/");
  if (await isAdmin()) {
    const users = await User.find();
    return Response.json(users);
  } else {
    return Response.json([]);
  }
}