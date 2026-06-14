import { CopilotClient, approveAll } from "@github/copilot-sdk";

// Create and start client
const client = new CopilotClient();
await client.start()

const session = await client.createSession({
    model: "claude-haiku-4.5",
    streaming: true,
});

// Wait for completion using typed event handlers
const done = new Promise((resolve) => {
    session.on("assistant.message_delta", (event) => {
        // Streaming message chunk - print incrementally
        process.stdout.write(event.data.deltaContent);
    });

    session.on("assistant.reasoning_delta", (event) => {
        // Streaming reasoning chunk (if model supports reasoning)
        process.stdout.write(event.data.deltaContent);
    });

    session.on("assistant.message", (event) => {
        // Final message - complete content
        console.log("\n--- Final message ---");
        console.log(event.data.content);
    });

    session.on("assistant.reasoning", (event) => {
        // Final reasoning content (if model supports reasoning)
        console.log("--- Reasoning ---");
        console.log(event.data.content);
    });

    session.on("session.idle", () => {
        // Session finished processing
        resolve();
    });
});

await session.send({ prompt: "Tell me a short story" });
console.log("sent a request, waiting for response...");
await done; // Wait for streaming to complete