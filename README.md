# Cloud Cache

Deployed at [https://streamify-dev.vercel.app](https://streamify-dev.vercel.app)

## Video

https://github.com/user-attachments/assets/4c5e81f8-23ef-4332-ba9d-10bc64ad4eb3

## Thought Process

When working on frontend projects, I like to follow a structured approach to keep things clean, maintainable, and scalable.

### Breaking Down the App

I divide the application into three main parts:

- **Data Layer** – Handles communication with the backend (fetching & sending data).
- **State Management** – Using React Query (TanStack Query) for asynchronous server state management and data fetching (API requests) and Zustand for client state because these are lightweight and easy to use.
- **UI Components** – Follows a Container & Presentational pattern, where:
  Feature components handle data logic.
  UI components focus only on rendering data.
  This approach keeps things modular and makes future updates easier.

### Design System

I have implemented a simple design system to keep the UI consistent and make components reusable across the app. This helps maintain a clean codebase and speeds up development.

### Patterns & Best Practices

Some of the patterns I use:

- **Custom Hooks** – To encapsulate reusable logic and make components cleaner.
- **Container & Presentational Pattern** – For better separation of concerns.
- **Render Props & Higher-Order Components** (HOCs) – Where needed, to enhance component reusability.

- Designed all components to be fully responsive for all screens using Tailwind CSS.
- Mocked backend requests using JavaScript Promises and setTimeout.

### Testing

I wrote tests using Vitest and React Testing Library to ensure core functionality works as expected.

## Trade-offs & Future Improvements

- **No Storybook** – Given more time, I would have added Storybook for UI component documentation and testing.
- **Test Cases** - I would have implemented test cases for all the UI components.
- **Limited E2E Testing** – Cypress would have been great for testing the full user flow, but due to time constraints, I focused on Vitest tests for now.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)

## Setup Instructions

1. **Clone the repository**

   ```sh
   git clone git@github.com:dev-rathore/streamify.git
   cd streamify
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Start the server**

   ```sh
   npm run dev
   ```

4. **Server is live 🎉**

   Check application running live at [http://localhost:5173](http://localhost:5173)

5. **Test Cases**

   ```sh
   npm run test
   npm run test:ui
   ```
