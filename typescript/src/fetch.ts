const url = `https://www.course-api.com/react-tours-project`;

type Tour={
    id:string,
    name:string,
    info:string,
    image:string,
    price:number,
    something:boolean
}
async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data: Tour[] = await response.json();
    return data;
  } catch (error) {
    const err = error instanceof Error ? error.message : 'Something went wrong';
    console.log(err);
    return [];
  }
}
fetchData(url).then((data) => console.log(data)).catch((error) => console.log(error));
