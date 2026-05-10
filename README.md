# web

My personal website, built with NextJS and Tailwind CSS.

## Infrastructure

GitHub Actions:

- A new production build is made for pushes to `main`.
- The build is pushed to my private container registry.
- The image is manually deployed on a VPS, behind a reverse proxy.
