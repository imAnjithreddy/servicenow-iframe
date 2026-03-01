'use client'; // client-side component

import { useEffect, useState } from 'react';

export default function RequestItem({ sysId }) {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchHTML() {
      try {
        // ✅ CORRECT - uses proxy
        const res = await fetch(`/api/servicenow?sys_id=123`);


        if (!res.ok) {
          throw new Error(`Error fetching HTML: ${res.status}`);
        }

        const html = await res.text();
        const abc = JSON.parse(html);
        const finalPayload = abc.result.html;
        setHtmlContent(finalPayload);
      } catch (err) {
        console.error(err);
        setError('Failed to load request item.');
      } finally {
        setLoading(false);
      }
    }

    fetchHTML();
  }, [sysId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="request-item-container"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}