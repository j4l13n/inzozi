const BookForm = () => {
  return (
    <div className="container px-10">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Names</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your names" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Mobile</label>
        <input type="mobile" className="form-control" id="exampleFormControlInput1" placeholder="+250788000000" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
        <button className="btn btn-md btn-success">Send</button>
      </div>
    </div>
  )
}

export default BookForm