import { useEffect, useState } from "react";
import axios from "axios";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/test")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend Connected ✅</h1>
      <ul>
        {data.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  );
}
