const AddCoffee = () => {

    const handelSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const categoty = form.categoty.value
        const details = form.details.value
        const chef = form.chef.value
        const photo = form.photo.value
        const newCoffee ={name,quantity,supplier,categoty,details,chef,photo}
        console.log(newCoffee);

    }


  return (
    <div className=" w-3/4 mx-auto mt-20">
      <form onSubmit={handelSubmit} className=" space-y-6">
        {/* form--Row */}
        <div className="md:flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Enter coffee name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="quantity"
              placeholder="quantity"
              name="quantity"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form--Row */}
        <div className="md:flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="name"
              placeholder="Enter coffee supplier"
              name="supplier"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Chef</span>
            </label>
            <input
              type="quantity"
              name="chef"
              placeholder="Choces your Chef"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* form--Row */}
        <div className="md:flex gap-10">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="name"
              placeholder="Enter coffee Category"
              name="categoty"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="Taste"
              name="details"
              placeholder="Enter coffee details"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-10">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <input
              type="name"
              placeholder="Enter Your Photo"
              name="photo"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn text-white bg-[#D2B48C] w-full" />
      </form>
    </div>
  );
};

export default AddCoffee;
