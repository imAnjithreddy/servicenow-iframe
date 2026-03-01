export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const sysId = searchParams.get('sys_id');

    const response = await fetch(
        `https://dev208775.service-now.com/api/1056856/iframeproxy/proxy?sys_id=123`,
        {
            headers: {
                'Authorization': `Basic ${btoa('admin:jDt1nM=B1=cD')}`,
                'Accept': 'text/html,*/*',
                // Add auth if needed:
                // 'Authorization': `Basic ${btoa('your-username:your-password')}`,
            }
        }
    );

    const html = await response.text();
    return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
    });
}
