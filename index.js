export default async (req) => {
  try {
    // Only POST request (Telegram webhook)
    if (req.method === "POST") {
      const update = await req.json();

      // Check message exist
      if (update.message) {
        const chat_id = update.message.chat.id;
        const text = update.message.text || "";
        const name = update.message.from.first_name || "User";

        const token = Deno.env.get("8707141410:AAGHrf0XkMTB7aC-2eYLJb697AfJwpBRVB4"); // 👈 token

        // START command
        if (text === "/start") {
          await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              chat_id: chat_id,
              text: `👋 Hello ${name}!\n\n🚀 Bot is running successfully!`,
            })
          });
        }

        // Other message reply
        else {
          await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              chat_id: chat_id,
              text: "❓ Please use /start command",
            })
          });
        }
      }

      return new Response("OK");
    }

    // Browser open
    return new Response("🤖 Bot is running...");
    
  } catch (error) {
    return new Response("Error: " + error.message);
  }
};