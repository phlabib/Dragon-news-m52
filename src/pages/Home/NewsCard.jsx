import { Link } from "react-router-dom";


const NewsCard = ({news}) => {

    const {title,  details, _id, image_url} = news;
    return (
        <div className="card card-compact mb-6 bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {
          details.length > 200 ? 
          <p>{details.slice(0,200)}
          <Link to = {`/news/${_id}`} 
          className="text-blue-500 font-semibold">Read More...</Link>
          </p>
          :
          <p>{details}</p>
        }
          
        </div>
      </div>
    );
};

export default NewsCard;