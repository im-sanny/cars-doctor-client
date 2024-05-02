import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const date = form.date.value;
    // const email =event.email.value;
    const booking = {
      customerName: name,
      email: user?.email,
      date,
      img,
      service_id: _id,
      price: price,
    };
    console.log(booking);

    fetch('http://localhost:5000/bookings', {
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        if (data.inserted) {
            alert('service booking added successfully')
        }
    })
  };
  return (
    <div>
      <h2 className="text-3xl text-center">Book Service:{title} </h2>

      <form onSubmit={handleBookService} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder={user?.displayName}
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="data"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder={user?.email}
              readOnly
              disabled
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due Amount</span>
            </label>
            <input
              type="text"
              defaultValue={"$ " + price}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className=" btn btn-block btn-primary">
            {" "}
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookService;
