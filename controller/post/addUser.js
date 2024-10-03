import { sql } from "../../database";

export const addUser = async (request, response) => {
  const { email, name, password, avatar_img } = request.body;
  try {
    await sql`INSERT INTO users(email, name, avatar_img,password)
                VALUES(${email},${name},${avatar_img}, ${password})`;

    response.status(200).json({ message: "request has been done" });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
