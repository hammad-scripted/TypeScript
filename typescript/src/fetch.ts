const url = `https://www.course-api.com/react-tours-project`;

async function fetchData(url: string): Promise<[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    const err = error instanceof Error ? error.message : 'Something went wrong';
    console.log(err);
    return [];
  }
}
fetchData(url).then((data) => data.map((item) => console.log(item.name))).catch((error) => console.log(error));
