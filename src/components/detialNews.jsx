import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import '../App.css'

export const DetialNews = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.minggatu.com/api/v1/news/${id}`)
    .then((response) => setData(response.data.data))
    .catch((err) => console.log(err));
  });

  return (
    <>
    <div className="contain">
        <img src={data.photo} alt="" />
        <div>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
        </div>
    </div>
    </>
  )
}
