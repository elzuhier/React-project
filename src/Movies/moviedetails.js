import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../axiosconfig/axiosinstance";

export default function moviedetails(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [movie, setmovie] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosInstance
      .get(`/movie/${params.id}`)
      .then((res) => {
        console.log(res.data.results);
        setmovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" key={movie.id}>
          <div className="card h-100 card border-warning mb-3 text-danger">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              className="card-img-top"
              style={{ height: "400px", width: "100%" }}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
