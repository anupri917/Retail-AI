import Transaction from "../models/Transaction.model.js";

export const getSalesSummary = async (storeId, startDate, endDate) => {
  const transactions = await Transaction.find({
    store: storeId,
    createdAt: { $gte: startDate, $lte: endDate }
  }).populate("products.product");

  let totalRevenue = 0;
  let productSales = {};

  transactions.forEach(tx => {
    totalRevenue += tx.totalAmount;

    tx.products.forEach(item => {
      const id = item.product._id.toString();
      productSales[id] = (productSales[id] || 0) + item.quantity;
    });
  });

  const topProducts = Object.entries(productSales)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const deadStock = Object.entries(productSales)
    .filter(([_, qty]) => qty <= 2);

  return {
    totalRevenue,
    totalTransactions: transactions.length,
    topProducts,
    deadStock
  };
};
