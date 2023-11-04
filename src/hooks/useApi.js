import {useState, useEffect} from 'react'

export const useApi = () => {
  const [data, setData] = useState(null);

  const getInfoAPI = async () => {
    // console.log(area)
    try {
      const apidata = await fetch("./src/mapinfo.json")
      const mapdata = await apidata.json()
      // console.log(mapdata)
      setData(mapdata)
    }
    catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {getInfoAPI();}, []);

  return [data];
}
