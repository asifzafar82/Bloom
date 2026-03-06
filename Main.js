from flask import Flask, request, jsonify, render_template
import anthropic
import os

app = Flask(__name__)

client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")
    stage = data.get("stage", "preparing")
    mood = data.get("mood", "")
    history = data.get("history", [])

    stage_context = {
        "preparing": "just starting their IVF journey and feeling uncertain",
        "stimulation": "in the stimulation phase with daily injections",
        "retrieval": "going through or just had egg retrieval",
        "transfer": "preparing for or just had embryo transfer",
        "tww": "in the two-week wait, the most anxious period",
        "results": "just received their IVF results",
        "failed": "dealing with a failed IVF cycle and grief"
    }

    system_prompt = f"""You are a warm, compassionate emotional support companion specifically for IVF patients.

The user is currently {stage_context.get(stage, 'going through IVF')}.
{f"Their current mood is: {mood}" if mood else ""}

Your role:
- Provide genuine emotional support, warmth, and understanding
- Never give medical advice
- Acknowledge their feelings before anything else
- Be conversational, warm, and human — not clinical
- Keep responses concise (3-5 sentences max) so they feel like real conversation
- You understand IVF deeply — the injections, the waiting, the hope and heartbreak
- If someone seems in crisis, gently suggest speaking to their doctor or a counselor
- Never be dismissive. This is one of the hardest things a person can go through."""

    messages = history[-10:] if len(history) > 10 else history

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=300,
        system=system_prompt,
        messages=messages
    )

    reply = response.content[0].text
    return jsonify({"reply": reply})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
