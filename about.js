```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause an error because it's trying to access a property of undefined
  const data =  window.myData;
  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p> {/* Error: Cannot read properties of undefined (reading 'message') */}
    </div>   
  );
}
```