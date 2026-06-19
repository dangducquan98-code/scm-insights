exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = new URLSearchParams(event.body);
  const email = params.get("email");

  if (!email) {
    return { statusCode: 302, headers: { Location: "/?subscribed=error" }, body: "" };
  }

  try {
    const resp = await fetch("https://api.buttondown.com/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: "Token " + process.env.BUTTONDOWN_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const ok = resp.ok || resp.status === 400;
    return {
      statusCode: 302,
      headers: { Location: "/?subscribed=" + (ok ? "ok" : "error") },
      body: "",
    };
  } catch (e) {
    return { statusCode: 302, headers: { Location: "/?subscribed=error" }, body: "" };
  }
};
