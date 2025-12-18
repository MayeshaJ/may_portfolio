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

2. Run the development server:
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

