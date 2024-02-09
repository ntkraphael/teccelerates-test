This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project is a test from Teccelerates requiring OpenID Connect (OIDC)single-logon to Azure Directory user account to fetch user data. The data is shown to a logged in page.

React framework Next.js version 14 is used in the project with next-auth for OIDC authentication

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost](http://localhost) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Build and Run Container

1. Install Docker at [https://docs.docker.com/desktop/install/mac-install](https://docs.docker.com/desktop/install/mac-install). For Windows, [https://docs.docker.com/desktop/install/windows-install](https://docs.docker.com/desktop/install/windows-install)

2. You can build an image by following command at root directory:
- Since redirect url does not use port 3000, the 
```bash
docker build -t test-teccelerates .
docker run --name test-demo -p 80:80 test-teccelerates
```

