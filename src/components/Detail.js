import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { db, moviesRef } from "./firebase/firebase";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    async function getData() {
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      <div className="w-full flex justify-center items-center min-h-screen">
        <img className="h-96 block md:sticky top-24" src={data.image} />
        <div className="ml-4 w-1/2">
          <div className="">
            <h1 className=" text-4xl font-bold text-white-500">
              {data.title} <span className="text-red-500">({data.year})</span>
            </h1>
          </div>
          <ReactStars size={20} half={true} value={4.5} edit={false} />
          <p className="mt-4 w-full ">{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
