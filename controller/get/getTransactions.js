import { sql } from "../../database";

export const getTransactions = async (request, response) => {
  try {
    const transactions =
      await sql`SELECT  transactions.id as transactionsId, transactions.name as transactionName, category_id, categories.name as categoryName, transactions.created_at as transactionCreatedAt, amount,  json_build_object(
        'name', categories.name,
        'description', categories.description
    ) AS category, transactions.transaction_type as transactionType  FROM transactions
    INNER JOIN categories ON transactions.category_id = categories.id
    `;
    response.status(200).json({ transactions: transactions });
  } catch (error) {
    response.status(400).json({ message: error });
  }
};
