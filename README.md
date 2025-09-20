# Fitness Class Reservation App

## 🌐 Live Demo

**[View Live Application](https://luisferdk.github.io/fitness-class-reservation-app/)**

## Project Description

Fitness Class Reservation App is a modern fitness class reservation application built with React, Vite, and TypeScript. It provides a user-friendly interface for browsing fitness classes, managing reservations, and a seamless user experience with a focus on performance and maintainability.

## Features

- 🎯 **User Authentication** (Login, Register)
- 🏋️ **Browse Classes** by category (Crossfit, Boxeo, Pilates)
- 📅 **Date Selection** with interactive date bar
- 📊 **Weekly Goal Tracking** with progress visualization
- ✅ **Reservation Confirmation** with confetti animation
- 📱 **Responsive Design** optimized for mobile
- 🎨 **Modern UI** with Tailwind CSS
- ⚡ **Fast Performance** with Vite build tool

## Technologies Used

- **Frontend:** React.js 18
- **Build Tool:** Vite 7
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Routing:** React Router DOM 6
- **Icons:** React Icons 5
- **Animations:** Canvas Confetti
- **Deployment:** GitHub Pages

## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- npm (Node Package Manager)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/luisferdk/fitness-class-reservation-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fitness-class-reservation-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Server

To run the application in development mode:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

To build the application for production:

```bash
npm run build
```

This command bundles React in production mode and optimizes the build for the best performance.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview:dist
```

This will serve the built application from the `dist` folder, simulating the GitHub Pages deployment.

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment process:

1. **Builds** the application using Vite
2. **Deploys** to GitHub Pages
3. **Available** at: [https://luisferdk.github.io/fitness-class-reservation-app/](https://luisferdk.github.io/fitness-class-reservation-app/)

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. Push to main branch: `git push origin main`
3. GitHub Actions will handle the deployment automatically

## Project Structure

The project follows a standard React application structure:

```
src/
├── App.tsx             # Main application component
├── main.tsx            # Entry point of the application
├── components/         # Reusable UI components
│   ├── ClassCard.tsx
│   ├── ConfettiBurst.tsx
│   ├── DateBar.tsx
│   ├── Header.tsx
│   ├── utils.ts
│   └── WeeklyGoal.tsx
├── screens/            # Pages/Views of the application
│   ├── CategoryList.tsx
│   ├── ClassList.tsx
│   ├── Confirmation.tsx
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── Splash.tsx
└── styles/             # Global styles
    └── index.css
```

## Routes

- `/` (Splash): Initial loading screen or welcome page.
- `/login`: User login page.
- `/register`: New user registration page.
- `/home`: Dashboard or main landing page after login.
- `/categories`: List of available fitness class categories.
- `/classes/:type`: Displays a list of classes for a specific category type.
- `/confirmation`: Reservation confirmation page.

## Alias

You can import modules using the `@/` alias (configured in `vite.config.ts` and `tsconfig.json`). For example:

```typescript
import { Header } from '@/components/Header';
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Luis Fernando - [@luisferdk](https://github.com/luisferdk)

Project Link: [https://github.com/luisferdk/fitness-class-reservation-app](https://github.com/luisferdk/fitness-class-reservation-app)
