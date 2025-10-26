# Tiffin Box - South Indian Restaurant Web Application

A modern, fully responsive restaurant web application showcasing authentic South Indian cuisine. Built with React 19, Vite, and modern web technologies to deliver a seamless user experience across all devices.

## 🚀 Features

### Core Functionality

- **Single Page Application (SPA)** with smooth scroll navigation
- **Fully Responsive Design** optimized for mobile, tablet, and desktop devices
- **Dark/Light Theme Toggle** with persistent theme preference using localStorage
- **Interactive Cursor Trail Effect** using GSAP for enhanced visual engagement
- **Smooth Scroll Animations** throughout the application for better UX

### Sections & Components

#### 1. **Hero Banner**

- Animated logo and title with Framer Motion
- Call-to-action button with custom styling
- Rotating banner image with gradient background
- Social media integration icons

#### 2. **Menu Section**

- Interactive carousel powered by Swiper.js
- 8 featured dishes with images, names, and pricing
- Alternating rotation animations on hover (clockwise/counter-clockwise)
- Responsive breakpoints for optimal viewing on all screen sizes
- Watermark logo background effect

#### 3. **About Section**

- Company story and mission statement
- Animated content reveal on scroll
- Professional imagery and branding

#### 4. **Specialities Section**

- Showcase of signature dishes
- Visual presentation of unique offerings
- Engaging layout with custom styling

#### 5. **Booking Section**

- Restaurant reservation information
- Call-to-action for table bookings
- Animated content transitions

#### 6. **Order Section**

- Online ordering information
- Delivery service details
- Quick access to ordering platform

#### 7. **Chef Section**

- Chef profile and credentials
- Professional presentation
- Background story and expertise

#### 8. **Community Section**

- Social media integration
- Customer engagement showcase
- Instagram-style gallery layout

#### 9. **Location Section**

- Restaurant address and contact information
- Embedded map integration
- Operating hours and contact details

#### 10. **Testimonials**

- Customer reviews carousel
- 5-star rating display
- Author information with timestamps
- Swiper-based navigation

### UI/UX Features

- **Custom Buttons**: Two variants (Outline and Filler) with hover effects
- **Smooth Animations**: Framer Motion integration for scroll-triggered animations
- **Theme System**: CSS custom properties for consistent theming
- **Bootstrap Grid**: Responsive layout system
- **Bootstrap Icons**: Comprehensive icon library integration
- **Accessibility**: ARIA labels and semantic HTML structure

## 🛠️ Technology Stack

### Frontend Framework

- **React 19.1.1** - Latest React with improved performance
- **React Router DOM 7.9.4** - Client-side routing

### Build Tool

- **Vite 7.1.7** - Next-generation frontend tooling with HMR

### UI Libraries & Frameworks

- **Bootstrap 5.3.8** - Responsive grid system and utilities
- **Bootstrap Icons 1.13.1** - Icon library
- **Swiper 12.0.2** - Modern touch slider
- **Framer Motion 12.23.24** - Production-ready animation library
- **GSAP 3.13.0** - Professional-grade animation platform

### Development Tools

- **ESLint** - Code quality and consistency
- **Vite Plugin React** - Fast Refresh support

## 📁 Project Structure

```
tiffin-box/
├── public/                    # Static assets
│   ├── logo-img.png
│   ├── banner-image.png
│   ├── dish images (8 items)
│   └── other assets
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation bar with theme toggle
│   │   ├── Footer/           # Footer section
│   │   ├── Home/             # Main page container
│   │   ├── ThemeToggle/      # Theme switcher component
│   │   └── HomeComponents/
│   │       ├── Banner/       # Hero section
│   │       ├── About/        # About section
│   │       ├── Menu/         # Menu carousel
│   │       ├── Specialities/ # Special dishes
│   │       ├── Booking/      # Reservation section
│   │       ├── Order/        # Online ordering
│   │       ├── Chef/         # Chef profile
│   │       ├── Community/    # Social media
│   │       ├── Location/     # Contact & location
│   │       ├── Testimonial/  # Customer reviews
│   │       ├── CursorTrail/  # GSAP cursor effect
│   │       ├── Button/       # Reusable button components
│   │       └── CustomSwiper.jsx # Swiper configuration
│   ├── context/
│   │   └── ThemeContext.jsx  # Theme state management
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles & CSS variables
├── index.html
├── package.json
├── vite.config.js
└── vercel.json               # Deployment configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd tiffin-box
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Theme Colors

Edit CSS custom properties in `src/index.css`:

```css
:root {
  --background-color: rgb(8, 8, 8);
  --yellow-color: rgb(252, 176, 23);
  --orange-color: rgb(255, 128, 0);
  --teal-green: #0dd1c8;
  /* ... more variables */
}
```

### Menu Items

Update menu data in `src/components/HomeComponents/Menu/Menu.jsx`

### Images

Replace images in the `public/` directory with your own assets

### Content

Modify text content in respective component files under `src/components/HomeComponents/`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 slide)
- **Small Tablets**: 640px - 1023px (2 slides)
- **Desktop**: 1024px - 1439px (3 slides)
- **Large Screens**: ≥ 1440px (4 slides)

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service.

## 🔧 Performance Optimizations

- Vite's lightning-fast HMR for development
- Code splitting and lazy loading
- Optimized image assets
- CSS custom properties for efficient theming
- Minimal bundle size with tree-shaking

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

---

**Built with ❤️ using React and Vite by Anusha Prathikantam**
