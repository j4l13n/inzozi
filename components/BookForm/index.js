import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const BookForm = () => {
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false)
  
  const onSubmit = data => {
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        console.log('Response successful')
        setSubmitted(true)
        reset()
      }
    })
  }
  
  return (
    <div className="container px-5 col-md-8">
      <h4 className="pb-3">Contact Us</h4>
      {submitted && <div onClick={() => setSubmitted(false)} className="alert alert-success alert-dismissible fade show" role="alert">
        You have successfully sent your message
      </div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Names*</label>
          <input type="text" {...register("names", {pattern: /^[A-Za-z ]+$/i, required: true, })} className="form-control" id="exampleFormControlInput1" placeholder="Your names" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
          <input type="email" {...register("email",  { required: true })} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Mobile*</label>
          <input type="mobile" {...register("mobile",  { required: true })} className="form-control" id="exampleFormControlInput1" placeholder="+250788000000" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
          <textarea className="form-control" {...register("message")} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div>
          <button className="btn btn-md btn-success">Send</button>
        </div>
      </form>
    </div>
  )
}

export default BookForm