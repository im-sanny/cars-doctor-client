const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/0Y5T1RY/fe5f21c5-eff6-4683-b7a3-d18e5e446dbc.jpg"
              className="w-3/4 rounded-lg shadow-2xl"
            />
            <img
              src="https://i.ibb.co/0Y5T1RY/fe5f21c5-eff6-4683-b7a3-d18e5e446dbc.jpg"
              className="w-1/2 absolute rounded-lg  right-5 border-8 border-red-600  shadow-2xl top-1/2"
            />
          </div>
          <div className="lg:w-1/2 space-y-3 p-4">
            <h1 className="text-3xl font-bold text-orange-500 ">About Us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.{" "}
            </p>
            <button className="btn bg-orange-500 text-white">Get more info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
