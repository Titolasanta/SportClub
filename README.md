# Project Setup Guide

This guide will walk you through setting up and running the Node.js and Next.js application, including Redis configuration.

## Prerequisites

Make sure you have the following installed before proceeding:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** (optional): [Install npm](https://www.npmjs.com/get-npm) or [Install Yarn](https://classic.yarnpkg.com/en/docs/install)
- **Redis**: [Install Redis](https://redis.io/download)



## BackEnd

```bash
cd backend
npm install
redis-server (you will have to use WSL on windows)
npx ts-node src/server.ts
```


### Tests Backend

```bash
npx jest
```


## FrontEnd
npm run dev