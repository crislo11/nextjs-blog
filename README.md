# Next.js Blog with Real-Time Comments

This project is a blog built with **Next.js 14** that includes a real-time commenting system. It uses **React Server Components**, **Zustand** for client-side state management, and **WebSocket** for real-time comment synchronization.

## Key Features

- **Server-Side Rendering (SSR)**: Blog pages and comments are rendered on the server for better performance and SEO.
- **Real-Time Comments**: Users can add comments and see them update in real time.
- **State Management**: Zustand is used to manage comment state on the client side.
- **Modular Design**: Components are organized by responsibility and follow best development practices.
- **Testing**: Includes unit, integration, and end-to-end (E2E) tests to ensure code quality.


## Project Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/crislo11/nextjs-blog.git
   cd nextjs-blog

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

### Running Tests

To run tests, use the following command:

```bash
npm test
```

### End-to-End (E2E) Tests

Start the application in development mode:

```bash
npm run dev
```

Run cypress:

```bash
npx cypress open
```

The E2E tests use [Cypress](https://www.cypress.io/) to interact with the application and verify its behavior.

## License

This project is licensed under the MIT License.
