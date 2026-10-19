# Snow Seasons

Snow Seasons is a visual portfolio about two exchange seasons in the United States. The project combines real travel photos with a dark editorial interface inspired by snowboarding, winter landscapes and adventure game menus.

## Features

- Responsive home page with season covers and selected highlights.
- Separate pages for the 1st Season and 2nd Season.
- Moments, Snowboard and Trips categories.
- Featured image selection and thumbnail navigation.
- Lightbox with previous and next controls.
- Circular image navigation.
- Keyboard controls: `Escape`, `ArrowLeft` and `ArrowRight`.
- Automatic image loading with Vite `import.meta.glob`.
- Fallback styling for missing images.

## Stack

- React 18
- Vite
- React Router DOM 6
- JavaScript
- Plain CSS
- No backend or database

## Requirements

- Node.js 18 or newer
- npm

## Getting started

Clone the repository and enter the project folder:

```bash
git clone https://github.com/joaobagatim/snow-seasons.git
cd snow-seasons
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173/
```

## Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
```

## Routes

- `/` — Home page
- `/season-1` — 1st Season gallery
- `/season-2` — 2nd Season gallery
- Unknown routes redirect to `/`

## Project structure

```text
src/
├── assets/images/
│   ├── about/
│   ├── covers/
│   ├── season-1/
│   │   ├── moments/
│   │   ├── snowboard/
│   │   └── trips/
│   └── season-2/
│       ├── moments/
│       ├── snowboard/
│       └── trips/
├── data/seasons.js
├── App.jsx
├── main.jsx
└── styles.css
```

Images are stored as WebP files and loaded automatically from their folders. To add new photos, place them in the matching season/category folder and restart the development server if Vite does not detect the change immediately.

## Build verification

Before publishing changes, run:

```bash
npm install
npm run build
```

The build should finish without errors.
