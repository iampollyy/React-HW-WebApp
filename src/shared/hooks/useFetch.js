export function useFetch() {

  const fetchData = async (url)=> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Can't establish connection with API.");
    }

    return await response.json();
  }


  const fetchDataWithLogger = async (url) => {
    return await fetchData(url).then(res => {
      localStorage.setItem("lastResponse", JSON.stringify(res))
      return res;
    })
  }
  return { fetchDataWithLogger, fetchData };
}
