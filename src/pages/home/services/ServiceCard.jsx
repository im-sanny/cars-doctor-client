import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 ">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl flex-1 h-48 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500">Price: ${price}</p>
          <div className="flex justify-end">
            <Link className="text-orange-500" to={`/services/${_id}`}>
              <FaArrowRight></FaArrowRight>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
