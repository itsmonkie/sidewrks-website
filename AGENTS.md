# Agent Rules

## Package Manager

Use `yarn` for all package management commands:

- `yarn` - Install dependencies
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server

Do not use `npm`.

## Environment Variables

- `.env.local` contains secrets and should never be committed
- For production, set environment variables in the hosting platform (e.g., Vercel)
