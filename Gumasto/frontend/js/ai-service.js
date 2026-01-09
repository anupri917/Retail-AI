export async function fetchAIInsight(payload) {
  const res = await fetch("http://localhost:5000/ai/insight", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    throw new Error("AI request failed");
  }

  return res.json();
}
