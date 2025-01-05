# Premium Python + React Starter Kit

A full-stack template designed to kickstart your next web application with ease and scalability.

## Overview

This premium starter kit provides a robust, production-ready foundation for building modern web applications with:

- Frontend: React + TypeScript, powered by Vite, styled with Tailwind CSS and DaisyUI.
- Backend: Python Flask with GraphQL and RESTful APIs.

Whether you’re building an MVP, scaling an enterprise app, or learning full-stack development, this template saves time and ensures you follow industry best practices.

## Premium Features

### Frontend

- Advanced Components: Fully reusable UI elements based on Atomic Design principles.
- Authentication: Pre-configured JWT-based authentication for secure user management.
- Custom Tailwind Theme: Tailored configuration for scalable and consistent styling.
- State Management: Integrated state management for seamless data flow.

### Backend

- GraphQL Integration: Flexible and efficient API querying.
- Secure Authentication: End-to-end JWT-based authentication flow.
- Modular API: Organized and extendable routes for easy scalability.

### Deployment

- Vercel-Optimized Frontend: Ready for instant deployment.
- Render or Heroku Backend: Pre-configured for quick cloud hosting.
- CI/CD Pipelines: Automated workflows for seamless deployment.

## Project Structure

```bash
root/
├── backend/           # Flask backend
│   ├── app.py         # Main Flask application
│   ├── requirements.txt # Python dependencies
│   ├── templates/     # Optional HTML templates
│   ├── static/        # Static assets (if needed)
│   ├── venv/          # Virtual Environment
│   ├── migrations/    # Database migrations
│   ├── config/        # Environment-based app configuration
│   ├── graphql/       # GraphQL schema and resolvers
│   └── auth/          # Authentication utilities and middleware
├── frontend/          # React frontend
│   ├── src/           # React source code
│   │   ├── components/ # Atomic UI components (atoms, molecules, organisms)
│   │   │   ├── atoms/ # Atomic UI components (single atoms (Button, Link, Heading, etc)
│   │   │   ├── molecules/ # Atomic UI components (multiple atoms to make one molecule)
│   │   │   ├── organisms/ # Atomic UI components (multiple molecules to make one organism)
│   │   │   ├── templates/ # Page-level components (templates that contain many organisms)
│   │   ├── services/   # API and GraphQL integrations
│   │   └── styles/     # Global CSS and Tailwind utilities
│   ├── dist/          # Production-ready build files
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── tsconfig.json  # TypeScript configuration
│   ├── vite.config.ts # Vite, build and dev settings
│   ├── App.tsx        # Main React component
│   └── main.tsx       # Entry point for React
```

## Setup Instructions

### Backend Setup

#### Prerequisites

- Python 3.8 or higher
- `pip` (Python package manager)

#### Verify Python Installation

Run the following command to check if Python is installed:

```bash
python3 --version
```

1. Navigate to the backend directory:

```bash
cd backend
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: `venv\Scripts\activate`
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run the Flask app:

```bash
flask run
```

The backend will be available at **<http://127.0.0.1:5000>**.

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The frontend will be available at **<http://localhost:5173>**.

## Deployment

### Backend Deployment

1. Install Gunicorn for production environments:

```bash
pip install gunicorn
```

2. Deploy the backend to a cloud platform like Render or Heroku.

### Frontend Deployment

1. Build the frontend:

```bash
npm run build
```

2. Deploy the dist/ folder to a static hosting platform such as:

- Vercel
- Netlify

## Customization

### Backend

- Update routes and business logic in app.py.
- Customize GraphQL schema and resolvers in the graphql/ folder.
- Modify database models in the models/ folder.

### Frontend

- Update global styles in src/styles/.
- Modify Tailwind configuration in tailwind.config.js.
- Add new components to the components/ folder.

## Technologies Used

### Frontend

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- Vite

### Backend

- Flask
- Python
- GraphQL

## Contribution

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature-name
```

3. Commit your changes and push:

```bash
git commit -m "Add new feature"
git push origin feature-name
```

4. Open a pull request.

### License

This project is licensed under a commercial license. Please see the premium purchase page for details.

### Support

For support, contact <zoefhall@gmail.com> or visit the GitHub Discussions.
