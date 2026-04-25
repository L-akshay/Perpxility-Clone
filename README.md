# perplexity-clone

> AI-powered search engine that answers queries with real-time web results using OpenAI + MERN stack.

![Node.js](https://img.shields.io/badge/Node.js-Express-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-brightgreen) ![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-blue) ![React](https://img.shields.io/badge/Frontend-React-61dafb)

## What it does

Takes a natural language query, searches the web, feeds results as context to GPT, and streams back a cited, grounded answer — just like Perplexity AI.

## Architecture

\`\`\`
User Query
  → Express API (/api/search)
  → Web Search (SerpAPI / Brave Search)
  → Context injection into OpenAI prompt
  → Streamed GPT response
  → MongoDB (save query + response history)
  → React frontend (streaming UI)
\`\`\`

## Tech Stack

- **Frontend:** React, Axios, streaming response rendering
- **Backend:** Node.js, Express
- **Database:** MongoDB + Mongoose (query history)
- **AI:** OpenAI GPT-4o (chat completions, streaming)
- **Search:** SerpAPI / Brave Search API

## Key Features

- Real-time web search grounding — no hallucinated answers
- Streamed responses via OpenAI streaming API
- Source citations in every answer
- Query history stored in MongoDB
- Follow-up question support (conversation context)

## Getting Started

\`\`\`bash
git clone https://github.com/yourusername/perplexity-clone
cd perplexity-clone
cp .env.example .env      # add your API keys
npm install               # install backend deps
cd client && npm install  # install frontend deps
npm run dev               # start backend
cd client && npm start    # start frontend
\`\`\`

## Environment Variables

\`\`\`env
OPENAI_API_KEY=
SERPAPI_KEY=
MONGODB_URI=
PORT=5000
\`\`\`

## API Reference

\`\`\`
POST /api/search
Body: { "query": "what is quantum computing" }
Response: streamed text/event-stream

GET /api/history
Response: [{ query, answer, sources, createdAt }]
\`\`\`

## Learnings / What's Interesting

- Prompt engineering for grounded answers (system prompt forces citation)
- Handling OpenAI streaming with chunked HTTP responses in Express
- Context window management — trimming search results to fit token limits

## Roadmap

- [ ] Follow-up questions with full conversation memory
- [ ] Source ranking by relevance before injection
- [ ] Switch LLM provider via env flag (OpenAI / Gemini)
- [ ] Deploy on Railway / Render
  
