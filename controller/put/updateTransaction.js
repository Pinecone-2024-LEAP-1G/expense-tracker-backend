import { sql } from "../../database";

export const updateTransaction = async (request, response) => {
  const { id } = request.params;
  const { user_id, name, amount, transaction_type, description, category_id } =
    request.body;

  try {
    await sql`UPDATE transactions
                SET user_id= ${user_id} ,name=${name}, amount=${amount}, transaction_type=${transaction_type}, description = ${description} category_id=${category_id}
                WHERE id=${id}`;
    response.status(200).json();
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
