import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosconfig/axiosinstance";
import ReactPaginate from "react-paginate";
export default function Movies() {
  const [movies, setmovies] = useState([]);

  const [page, setpage] = useState(1);
  useEffect(() => {
    axiosInstance
      .get("/movie/popular")
      .then((res) => {
        console.log(res.data.results);
        setmovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);



  const { items, setitem } = useState([]);
  const handelpageclick = (data) => {
    console.log(data.selected);

  }

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return (
            <div class="col" key={movie.id}>
              <div className="card h-100">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  className="card-img-top"
                  style={{ height: "300px", width: "100%" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <Link to={`/movie/${movie.id}`}><button class="btn btn-success">Details</button></Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ margin: "80px" }}>
        <ReactPaginate
          previousLable={'previous'}
          nextLable={'next'}
          breakLable={'...'}
          pageCount={15}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handelpageclick}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />

      </div>

    </>
  );
}
