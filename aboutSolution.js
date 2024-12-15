```javascript
// pages/aboutSolution.js
import { useEffect, useState } from 'react';

export default function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data after the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```
```javascript
// pages/api/data.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Data from the server' });
}
```