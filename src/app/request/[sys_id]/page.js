import RequestItem from '../../../components/RequestItem';

export default function Page({ params }) {
  const { sysId } = params;

  return (
    <main style={{ padding: '2rem' }}>
      <h1>ServiceNow Request Item / Incident</h1>
      <RequestItem sysId={sysId} />
    </main>
  );
}