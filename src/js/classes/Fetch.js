const Fetch = async ({ url, method, headers, body }) => {
    const response = await fetch(url, {
        method,
        headers,
        body: method === 'GET' ? undefined : JSON.stringify(body ?? {})
    });
    return response.json();
};

export default Fetch;