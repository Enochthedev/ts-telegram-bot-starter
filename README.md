# 🤖 Telegram Bot Template (TypeScript)

A clean, scalable, and developer-friendly Telegram bot template built with TypeScript, Prisma, and modular architecture. Designed for real-world bots with AI, logging, database, and role-based access — ready to extend and deploy.

---

## 🚀 Features

- 📦 Modular Command and Message Handlers
- 🛡️ Middleware-based Authentication
- 🗃️ Integrated with Prisma ORM (SQLite by default)
- ⚙️ Environment-based config (.env.dev / .env.prod)
- 🔁 Auto-reloading in development (Nodemon)
- 🧱 Clean project structure ready for Discord, AI, or Admin bots
- ✅ Built-in logging, auth, and DB user tracking
- ☁️ Ready for GitHub Actions CI + deployment

---

## 🧰 Setup

```bash
git clone https://github.com/yourusername/telegram-bot-template.git
cd telegram-bot-template
npm install
cp .env.example .env.development
# Add your Telegram token + usernames to AUTHORIZED_USERS
npx prisma migrate dev --name init
npx prisma generate
npm run dev
```

To start in production mode:

```bash
cp .env.example .env.production
npm run start
```

## 🗂️ Project Structure

```bash
src/
├── bot.ts                     # Main bot entry
│
├── commands/                 # Slash command modules
│   ├── start.ts
│   ├── help.ts
│   └── index.ts              # Command registry
│
├── messages/                 # Plain text message processors
│   ├── hello.ts
│   ├── echo.ts
│   └── index.ts
│
├── config/                   # Env + config loader
│   └── index.ts
│
├── middlewares/             # Auth, guards, rate-limits, etc.
│   └── auth.ts
│
├── handlers/                # High-level bot logic
│   ├── commandHandler.ts
│   └── messageHandler.ts
│
├── services/                # Business logic and integrations
│   └── database.service.ts
│
├── utils/                   # Helpers and logging
│   ├── logger.ts
│   └── ...
│
└── types/                   # (Optional) Shared type definitions
```

## 🧪 Environment Setup

``` env
# .env.example
TELEGRAM_TOKEN=your_bot_token_here
AUTHORIZED_USERS=yourusername,adminuser
DATABASE_URL="file:./dev.db"
```

Use .env.development or .env.production based on your setup.

## 📜 Available Commands

- `/start` - Start the bot
- `/help` - List available commands
- `/echo` - Echo back your message
- `/hello` - Greet the user

## 🗃️ Database

 • Uses Prisma ORM with SQLite out of the box
 • Tracks every user who interacts with the bot

Run:

```bash
npx prisma studio
```

To browse your database with a GUI.

## ✅ Future Ideas

 • Add AI commands (e.g., /ask)
 • Discord version with shared core logic
 • Admin roles & permissions
 • Docker + PM2 + Webhook mode
 • GitHub Actions CI/CD template

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
This project is not affiliated with Telegram or any other third-party services. Use at your own risk.
This is a template project. Please customize it according to your needs and ensure compliance with Telegram's terms of service.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements, bug fixes, or new features.

## 👨‍💻 Built with ❤️ by [Enochthedev]
