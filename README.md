# Vue 3 + Vite Starter Template

A modern Vue.js starter template with TypeScript, Pinia, Vue Router, and more.

## Features

- 🚀 Vue 3 + Vite + TypeScript
- 🎨 Tailwind CSS for styling
- 📦 Pinia for state management
- 🛣️ Vue Router for routing
- ✅ Form validation with Vuelidate
- 🌙 Dark mode support
- 🧪 Testing with Vitest
- 📝 ESLint + Prettier for code quality

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env`
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run format` - Format code
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## Project Structure

```
src/
├── assets/        # Static assets
├── components/    # Reusable components
├── composables/   # Vue composables
├── router/        # Route configurations
├── stores/        # Pinia stores
├── utils/         # Utility functions
└── views/         # Page components
```

## Environment Variables

Create a `.env` file with the following variables:

```env
VITE_API_BASE_URL=https://api.example.com/v1
VITE_API_TIMEOUT=5000
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_DARK_MODE=true
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request