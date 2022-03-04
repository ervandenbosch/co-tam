import { useState, useEffect } from "react";

export default function Contact({ validateForm, getPayload }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function submitForm(data) {
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? setSubmitted(true) : "";
    });
  }

  return (
    <div className="m-auto w-1/2 px-16 py-[64px] sm:w-full md:w-2/3">
      <h2 className="mt-12 text-center text-xl font-bold">Send us a message</h2>
      <p className="m-auto mt-6 py-4 text-justify">
        We love to hear your thoughts whether it is positive or negative. Feel
        free to let us know if you have any comment on your recent experience or
        any suggestion would be appreciated for our improvement.
      </p>
      <form className="flex flex-col" onSubmit>
        <div className="py-2">
          <label htmlFor="first-name">First Name</label> <br />
          <input
            type="text"
            name="first-name"
            className="w-full rounded-md border-2"
          />
        </div>

        <div className="py-2">
          <label htmlFor="last-name">Last Name</label> <br />
          <input
            type="text"
            name="last-name"
            className="w-full rounded-md border-2"
          />
        </div>

        <div className="py-2">
          <label htmlFor="email">Email</label> <br />
          <input
            type="text"
            name="email"
            className="w-full rounded-md border-2"
          />
        </div>

        <div className="py-2">
          <label htmlFor="subject">Subject</label>
          <br />
          <input
            type="text"
            name="subject"
            className="w-full rounded-md border-2"
          />
        </div>
        <div className="py-2">
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            type="text"
            name="message"
            className="w-full rounded-md border-2"
          ></textarea>
        </div>
        <div className="py-2">
          <button
            type="submit"
            value="Submit"
            className="w=[100px] p rounded-lg bg-[#F7C12F] p-1 px-3"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
