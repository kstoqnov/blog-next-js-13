# Lorem
An open source application built using the new router, server components and everything new in Next.js 13.

> **Warning**
> This app is a work in progress. I'm building this in public.
> See the roadmap below.

## Features

- New `/app` dir,
- Routing, Layouts, Nested Layouts and Layout Groups.
- Data fetching, Caching and Mutation.
- Loading UI,
- Server and Client Components.
- API Routes and Middlewares.
- Authentication using **NextAuth.js**.
- ORM using **Prisma**.
- UI Components built using **Radix UI**.
- Styled using **Tailwind CSS**.
- Validations using **Zod**.
- Written in **TypeScript**.

## Roadmap

> **Warning**
> This app is a work in progress. I'm building this in public.

- [ ] Responsive styles.
- [ ] Subscriptions using Stripe.
- [ ] Add Media Library.
- [ ] Add Pages.
- [ ] Build the front-end for blogs.
- [ ] Add support for custom domains for blogs.
- [ ] Build marketing pages (use a headless CMS?)
- [ ] Add MDX support for basic pages.
- [ ] Add OG image for blog using @vercel/og.
- [ ] Dark mode.

## Known Issues

A list of things not working right now:

1. GitHub authentication (use email)

## Running Locally

1. Install dependencies using Yarn:

```sh
yarn
```

2. Copy `.env.example` to `.env.local` and update the variables.

3. Start the development server:

```sh
yarn dev
```
