# Cloud Cache

Deployed at [https://cloud-cache-dev.vercel.app](https://cloud-cache-dev.vercel.app)

## Video
https://github.com/user-attachments/assets/b7c17649-9092-4967-bce3-01e3b9c0b78c

## Thought Process

### Section Breakdown

I divided the landing page into 6 main sections:

1. **Hero Section** - This is the first thing users see, so it should be engaging. Includes a catchy headline, a brief value proposition, and a strong call-to-action (CTA).
2. **Features Section** - Highlights the core benefits of the cloud cache. Uses icons and concise descriptions to keep it scannable. Designed in a grid or card-based layout for better readability.
3. **Projects Section** - Showcases previous achievements, case studies, or implementation processes. Ensures each process has a brief description.
4. **Testimonials Section** - Builds credibility by displaying reviews from real users. Uses images, and short quotes for authenticity. Includes a grid layout for readability.
5. **Pricing Section** - Provides clear pricing tiers for different plans. Uses comparison cards to highlight differences. Ensures transparency to build trust with potential customers.
6. **CTA (Call to Action) Section** - Reinforces the main CTA from the hero section. Uses high-contrast buttons and compelling copy.

### Design & Technical Implementation

- Developed using **React** + **TypeScript** + **Tailwind CSS** + **Shadcn** for fast and scalable UI.
- Uses Framer Motion for animations and smooth transitions.
- Implemented dark mode for better accessibility.
- Used **Zustand** for client state management and **Tanstack query** for data fetching and asynchronous server state management.
- [Mocked backend requests](https://github.com/dev-rathore/cloud-cache/blob/main/src/services/data.service.ts) using JavaScript Promises and setTimeout.
- **Consistent color scheme** - Follows brand colors for a professional look.
- **Typography** - Uses Tailwind CSS readable fonts with hierarchy (text-lg, text-base, text-sm).
- **Spacing & alignment** - Ensures enough padding and margin for a clean layout.
- **Responsive design** - Mobile-first approach to ensure a seamless experience across devices.

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)

## Setup Instructions

1. **Clone the repository**

   ```sh
   git clone git@github.com:dev-rathore/cloud-cache.git
   cd cloud-cache
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Start the server**

   ```sh
   npm run dev
   ```

4. **Page is live 🎉**

   Check the page running live at [http://localhost:5173](http://localhost:5173)
