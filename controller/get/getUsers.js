import { sql } from "../../database";

export const getUsers = async (_request, response) => {
  try {
    const users = await sql`SELECT * FROM users`;
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
