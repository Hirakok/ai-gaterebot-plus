![GitHub deployments](https://img.shields.io/github/deployments/Hirakok/ai-gaterebot-plus/production?style=flat&logo=vercel&logoColor=white&label=vercel)\n\n# AI GatereBot Plus\n\nAI GatereBot Plus harnesses the OpenAI API for real-time natural language processing. Built using a combination of NextJS, Tailwind CSS, MongoDB, Mongoose, React Markdown, Vercel AI SDK, and Next Auth.\n\n<div align=\"center\">\n<a href=\"https://ai-gaterebot-plus.vercel.app/\">\n\n![AI GatereBot Plus Home](https://firebasestorage.googleapis.com/v0/b/Hirakok.appspot.com/o/ai-gaterebot-plus.png?alt=media&token=9900d90c-15a6-4c02-bad1-a5a3db557f73)\n\n</a>\n</div>\n\n---\n\n<div align=\"center\">\n<a href=\"https://ai-gaterebot-plus.vercel.app/\">\n\n![Complete GatereBot](https://firebasestorage.googleapis.com/v0/b/Hirakok.appspot.com/o/ai-gaterebot-plus.png?alt=media&token=0f51faf8-f61b-4a51-9320-14e13f3e0e10)\n\n</a>\n</div>\n\n## Table of Contents\n\n-   [Features](#features)\n-   [Technologies Used](#technologies)\n-   [Installation](#installation)\n-   [Deployment](#deployment)\n-   [Contributing](#contributing)\n\n## Features\n\n-   Utilizes NextJS and Tailwind CSS for a responsive and modern UI\n-   Real-time natural language processing using OpenAI API\n-   Chat storage in MongoDB with Mongoose\n-   User authentication with Next Auth\n-   Integration with Vercel AI SDK for enhanced functionality\n-   Supports rendering of React Markdown for rich content\n\n## Technologies\n\n-   [NextJS](https://nextjs.org/) : React framework for server-side rendering and optimal performance.\n-   [Tailwind CSS](https://tailwindcss.com/) : A utility-first CSS framework for rapidly designing responsive web pages.\n-   [OpenAI API](https://platform.openai.com/docs/overview) : Enables real-time natural language processing for user interactions.\n-   [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/) : NoSQL database and ODM for flexible data storage and modeling.\n-   [React Markdown](https://www.npmjs.com/package/react-markdown) : Library for rendering Markdown content as React components.\n-   [Vercel AI SDK](https://sdk.vercel.ai/docs) : Integrates AI capabilities into the application deployed on Vercel.\n-   [Next Auth](https://next-auth.js.org/) : Authentication library for secure user access with social authentication providers.\n\n## Installation\n\n1. Clone the repository:\n\n```bash\ngit clone https://github.com/Hirakok/ai-gaterebot-plus.git\n```\n\n2. Install dependencies:\n\n```bash\ncd ai-gaterebot-plus\npnpm install\n```\n\n3. Set up environment variables. Create a \`.env\` file in the root of your project and add the following:\n\n```bash\nNEXTAUTH_SECRET=replace_me\nGITHUB_ID=replace_me\nGITHUB_SECRET=replace_me\nGOOGLE_CLIENT_ID=replace_me\nGOOGLE_CLIENT_SECRET=replace_me\nOPENAI_API_KEY=replace_me\nMONGODB_URI=replace_me\n```\n\n4. Run the development server:\n\n```bash\npnpm run dev\n```\n\n5. Open your browser and navigate to http://localhost:3000.\n\n## Deployment\n\nAI GatereBot Plus is deployed using Vercel. Any changes pushed to the main branch will trigger an automatic deployment. You can visit the live version of AI GatereBot Plus at https://ai-gaterebot-plus.vercel.app/.\n\n## Contributing\n\nAll contributions are welcome to improve the project! To contribute, please follow these steps:\n\n1. Fork the repository.\n\n2. Create a new branch for your feature:\n```bash\ngit checkout -b feature-name\n```\n3. Make your changes and commit them:\n```bash\ngit commit -m \"Description of your changes\"\n```\n4. Push your changes to your fork:\n```bash\ngit push ori