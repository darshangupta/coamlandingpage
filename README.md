# COAM Landing Page

A minimal, professional landing page for a Class B COAM business in Georgia. Built with React, shadcn/ui components, and Tailwind CSS.

## Features

- **Hero Section**: Clear headline and call-to-action
- **What I Offer**: Four key service cards with icons
- **About Me**: Professional background information
- **Contact Section**: Phone and email with smooth scroll navigation
- **Mobile Responsive**: Optimized for all device sizes
- **Clean Design**: Professional appearance with soft shadows and rounded corners

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vite (build tool)
- Lucide React (icons)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization

### Contact Information
Update the contact details in `src/App.tsx`:
- Phone: `(555) 123-4567`
- Email: `partner@coamgeorgia.com`

### Content
All content is in the `src/App.tsx` file. You can easily modify:
- Headlines and subheadlines
- Service descriptions
- About me section
- Contact information

### Styling
The design uses Tailwind CSS classes. Key styling features:
- Soft shadows: `shadow-lg`
- Rounded corners: `rounded-2xl`
- Gradient background: `bg-gradient-to-br from-slate-50 to-blue-50`
- Glass effect: `bg-white/80 backdrop-blur-sm`

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder

## File Structure

```
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main landing page
│   ├── main.tsx          # React entry point
│   └── index.css         # Tailwind CSS
├── index.html            # HTML template
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## License

This project is for private use. All rights reserved. 