'use client'; // client-side component

import { useEffect, useState } from 'react';

export default function RequestItem({ sysId }) {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchHTML() {
      try {
        const res = await fetch(
          `https://dev208775.service-now.com/api/iframe_proxy/iframeProxy/proxy?sys_id=${sysId}`,
          {
            method: 'GET',
            headers: { 'Accept': 'text/html' },
            credentials: 'include' // include ServiceNow session cookies
          }
        );

        if (!res.ok) {
          throw new Error(`Error fetching HTML: ${res.status}`);
        }

        const html = await res.text();
        setHtmlContent(html);
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