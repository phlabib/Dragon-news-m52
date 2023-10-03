import { useParams } from "react-router-dom";
import Header from "../sheard/Header/Header";
import RightSideNav from "../sheard/RightSideNav/RightSideNav";
import Navbar from "../sheard/Navbar";


const News = () => {
    const {id} = useParams();
    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">
                    Dragon News 
                    </h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;