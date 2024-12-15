# Next.js 15 Client-Side Window Object Error

This repository demonstrates a common runtime error encountered in Next.js 15 applications when attempting to access the `window` object within a client component before it's available.  The error occurs because the `window` object is not defined during server-side rendering.

## Issue

The `pages/about.js` file attempts to access `window.myData`, which is only available in the browser.  This causes a runtime error in the client when the component tries to read properties from an undefined `window` object.

## Solution

The `pages/aboutSolution.js` file provides a solution by using the `useEffect` hook to conditionally render the content after the component mounts, ensuring that the `window` object is available.  This prevents the runtime error by only accessing `window.myData` after the component has been mounted on the client-side.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`. You'll initially see an error.  Refresh the page; this will correct the issue.
