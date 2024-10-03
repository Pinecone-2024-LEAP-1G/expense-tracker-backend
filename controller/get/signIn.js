import { sql } from "../../database";

export const signIn = async (request, response) => {
  const { email, password } = request.body;
  console.log(request.body);
  try {
    const user =
      await sql`SELECT * FROM users where email=${email} AND password=${password}`;

    response.status(200).json({ user: user });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
