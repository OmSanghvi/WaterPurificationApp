export async function POST(req) {
  const { url } = new URL(req.url);
  const formData = await req.formData();
  const action = formData.get('action');

  if (url.endsWith('/submit-form')) {
    const name = formData.get('name');
    const message = formData.get('message');
    return new Response(JSON.stringify({ name, message }), { status: 200 });
  }

  if (url.endsWith('/start-purification')) {
    if (action === 'start') {
      return new Response(JSON.stringify({ message: 'Purification started!' }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: 'Unknown action' }), { status: 400 });
  }

  if (url.endsWith('/data')) {
    // Fetch data from an external source
    const data = { message: 'Data fetched successfully' };
    return new Response(JSON.stringify(data), { status: 200 });
  }

  if (url.endsWith('/integration')) {
    const response = await fetch('https://external-api.com/data');
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  }

  return new Response(JSON.stringify({ message: 'Endpoint not found' }), { status: 404 });
}
