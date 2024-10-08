import { sql } from "../../database";

export const addCategory = async (request, response) => {
  const { name, description, category_image } = request.body;
  try {
    await sql`INSERT INTO categories(name, description,category_image)
                                    VALUES(${
                                      (name, description, category_image)
                                    })`;
    response.status(200).json({ message: "Request has been done" });
  } catch (error) {
    response.status(400).json({ message: "bad request" });
  }
};
