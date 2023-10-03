import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex border p-4 bg-slate-200 rounded-lg">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to = '/'>I can be a React component, multiple React components.....</Link>
        <Link className="mr-12" to = '/'>I can be a React component, multiple React components.....</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
