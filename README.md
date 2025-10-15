# Tiffin Box

A modern, responsive South Indian cuisine restaurant web app built with React and Vite.

## Features

- Home, Menu, About, Booking, Chef, Community, Location, Testimonial sections
- Swiper-based carousels for menu and testimonials
- Responsive design for mobile and desktop
- Custom CSS for beautiful UI
- Bootstrap grid for layout
- Image assets for branding and content

## Project Structure

```
public/           # Static images and assets
src/
  App.jsx        # Main app component
  main.jsx       # Entry point
  index.css      # Global styles
  components/
    Header/      # Navigation bar
    Footer/      # Footer section
    Home/        # Home page
    HomeComponents/
      Banner/    # Hero banner
      About/     # About section
      Menu/      # Menu carousel
      Booking/   # Table booking
      Chef/      # Chef info
      Community/ # Instagram/community
      Location/  # Location info
      Specialities/ # Special dishes
      Testimonial/ # Customer reviews
      Button/    # Custom buttons
      CustomSwiper.jsx # Swiper logic
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in the browser.

## Build for Production

```bash
npm run build
```

## Deployment

- Ready for deployment on Vercel, Netlify, or any static hosting.

## Customization

- Update images in `public/`
- Edit content in `src/components/HomeComponents/`
- Style with CSS in each component folder

## License

MIT

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
