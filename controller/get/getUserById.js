import { sql } from "../../database";

export const getUser = async (request, response) => {
  const { id } = request.body;
  try {
    const user = await sql`SELECT * FROM user where id=${id}`;
    response.status(200).json({ user: user });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
