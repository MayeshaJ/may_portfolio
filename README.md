<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Mayesha's Creative Portfolio

A modern, neobrutalist portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features interactive 3D graphics, smooth animations, and a unique design aesthetic.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber + Drei
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set environment variables in `.env.local`:
   ```bash
   GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Contact.tsx
│   ├── HowIThink.tsx
│   ├── ThreeScene.tsx  # 3D background scene
│   ├── AnimatedGraphics.tsx
│   └── DraggableSticker.tsx
├── constants.tsx       # Data constants
├── types.ts           # TypeScript types
└── public/            # Static assets
```

## Deployment

This project can be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

## Features

- 🎨 Neobrutalist design with custom color palette
- 🎭 Smooth animations with Framer Motion
- 🎪 Interactive 3D background scene
- 📱 Fully responsive design
- ⚡ Optimized with Next.js App Router
- 🎯 TypeScript for type safety
