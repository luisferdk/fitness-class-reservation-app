# Fitness Class Reservation App

## Project Description

Fitness Class Reservation App is a modern fitness class reservation application built with React, Vite, and TypeScript. It provides a user-friendly interface for browsing fitness classes, managing reservations, and a seamless user experience with a focus on performance and maintainability.

## Features

- User Authentication (Login, Register)
- Browse available fitness classes by category
- View class details
- Reserve and cancel classes
- Confirmation screen for reservations
- Weekly goal tracking
- Responsive design

## Technologies Used

- **Frontend:** React.js
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Canvas Confetti

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
