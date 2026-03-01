export default function Home() {
  return (
    <div style={{ height: "100vh", margin: 0 }}>
      <div>
        text data
      </div>
      <iframe
        src="https://dev208775.service-now.com/api/1056856/iframeproxy/proxy&embedded=true"
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="ServiceNow Portal"
      />
    </div>
  );
}
