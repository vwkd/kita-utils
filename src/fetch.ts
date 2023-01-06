export async function fetchGithub(url: string, token: string) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github.raw",
      Authorization: `Bearer ${token}`,
    }
  });

  const data = await res.text();

  if (data.startsWith("{") && data.endsWith("}")) {
    const error = JSON.parse(data);
    throw new Error(error.message);
  }

  return data;
}