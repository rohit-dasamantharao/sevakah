# Sevakah

## GitHub Copilot SDK Program

A Node.js program that uses the GitHub Copilot SDK to send a message to Claude Haiku 4.5 and display the response.

### Prerequisites

- Node.js (v16 or higher)
- A GitHub personal access token (generate it at https://github.com/settings/tokens)

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your GitHub token:
     ```
     GITHUB_TOKEN=your_github_token_here
     ```

### Running the Program

```bash
npm start
```

Or directly with Node:
```bash
node index.js
```

### How it works

The program:
1. Initializes the Copilot client with your GitHub token
2. Sends the message "hi" to Claude Haiku 4.5 via Copilot SDK
3. Receives and displays the response
4. Shows additional details like token usage and model information

### Output Example

```
Sending message to Copilot (Claude Haiku 4.5)...

Response from Copilot (Claude Haiku 4.5):
==========================================

Hello! How can I help you today?

==========================================
Response Details:
- Model: claude-haiku-4.5
- Completion Tokens: 12
- Prompt Tokens: 10
- Total Tokens: 22
```

### Notes

- Keep your GitHub token secure and never commit `.env` to version control
- Claude Haiku 4.5 is accessed through the GitHub Copilot SDK
- Token usage is displayed to help you monitor API costs

---

## Original Project

Sevakah is a cli based executable which allows users to use a personal loyal servent on your loal to follow your oders
