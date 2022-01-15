import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/resquests";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

function Listing() {

  

    const[pageNumber, setPagenumber] = useState(0);

    useEffect(()=>{
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response =>{
            const data = response.data as MoviePage
            setPagenumber(data.number)
            console.log(response.data);
        });
    },[]);

  

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sn-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sn-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sn-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-sn-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                

                </div>

            </div>
        </>
    );
}

export default Listing;