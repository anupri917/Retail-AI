async function fetchInsight(metrics, elementId) {
  try {
    const res = await fetch("http://localhost:5000/ai/insight", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        store_id: "store_001",
        metrics
      })
    });

    if (!res.ok) throw new Error();

    const data = await res.json();

    document.getElementById(elementId).innerText =
      data.insight.message;
  } catch {
    document.getElementById(elementId).innerText =
      "AI insight unavailable";
  }
}

/* 🔹 1. Expiry Risk */
fetchInsight(
  {
    totalRevenue: 25000,
    totalTransactions: 410
  },
  "expiryInsight"
);

/* 🔹 2. Demand Surge */
fetchInsight(
  {
    totalRevenue: 32000,
    totalTransactions: 520
  },
  "demandInsight"
);

/* 🔹 3. Layout Opportunity */
fetchInsight(
  {
    totalRevenue: 18000,
    totalTransactions: 290
  },
  "layoutInsight"
);
