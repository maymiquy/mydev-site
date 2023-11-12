# 🔗 [mydev-portfolio.vercel.app](https://mydev-portfolio.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Fmaymiquy%2Fmydev-portfolio&env=GH_TOKEN,VC_TOKEN)

My personal portfolio website, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and deployed to [Vercel](https://vercel.com/). Inspired by [chronark's site](https://chronark.com/).

## Tech stack

- **Programming Language**: [JavaScript](https://www.javascript.com)
- **Framework**: [Next.js](https://nextjs.org/), [Node.js](https://www.npmjs.com)
- **Library**: [React.js](https://react.dev), [Framer-Motion](https://www.framer.com/motion)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com), [Primer](https://primer.style/), [NextUI](https://nextui.org)

## Running Locally

```sh
git clone https://github.com/maymiquy/mydev-portfolio.git
cd mydev-portfolio
```

Create a `.env` file similar to `.env.example`.

```sh
mv .env.example .env.local
```

Add GitHub token into the new file.

```sh
GH_TOKEN=YOUR_GH_TOKEN
# If you have Vercel projects, create a token here https://vercel.com/account/tokens to get more info.
VC_TOKEN=YOUR_VERCEL_TOKEN
```

Then install dependencies and run the development server:

```sh
# Install dependencies.
npm install
# Replace my previous personal info.
npm run setup
# Start hacking.
npm dev
```

Edit `data.json` to put your personal information there.

## Cloning / Forking

Please remove all of my personal information in `data.json` before deploying your own version of this site by running `npm run setup`. Once you are happy with your `data.json`, set

```sh
# .env or .env.local

IS_TEMPLATE=false
```

in your ENVs to prevent `npm build` from reverting `data.json` .
