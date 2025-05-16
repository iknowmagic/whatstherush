# What's The Rush

## About this Project

This is a Next.js project that presents an alternative philosophy to accelerationism in tech culture. The app promotes more sustainable, ethical, and humane approaches to technology development and use.

### Project Structure

- `src/app` - Next.js App Router structure
- `src/components` - React components including:
  - `Hero.tsx` - Landing section with parallax scroll effects
  - `Manifesto.tsx` - Project philosophy statement
  - `Tools.tsx` - Practical tools and approaches
  - `Join.tsx` - Newsletter/community signup form
  - `Footer.tsx` - Site footer with navigation
  - `Motion.tsx` - Wrapper for framer-motion animations

### Technical Details

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Fonts**: Next.js optimized fonts (Inter, Spectral, Anton)
- **State Management**: React useState/useEffect hooks
- **Code Quality**: ESLint, Prettier

### Key Concepts

The app challenges accelerationist tech culture, advocating for technology that:

- Prioritizes sustainability over rapid growth
- Values human wellbeing over technological progress
- Encourages thoughtful deployment rather than rushing to market
- Respects planetary limits and ecological boundaries

### Development Commands

- `pnpm dev` - Run development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Note to GitHub Copilot

This project uses Tailwind v4 with the `@import "tailwindcss"` syntax in globals.css. The project follows a philosophy of "humane technology" and is structured as a landing page with sections explaining an anti-accelerationist approach to technology. The Motion.tsx component serves as a wrapper for framer-motion to fix Next.js client component issues with "export \*" syntax.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
