import Head from "next/head";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Contact Cô Tâm</title>
      </Head>
      <div className="m-auto w-1/2 px-16 py-[64px] md:w-2/3 sm:w-full sm:px-12">
        <h2 className="mt-12 text-center text-xl font-bold">
          Send us a message
        </h2>
        <p className="m-auto mt-8 text-justify">
          We love to hear your thoughts whether it is positive or negative. Feel
          free to let us know if you have any comment on your recent experience
          or any suggestion would be appreciated for our improvement.
        </p>
        <p className=" py-2 text-sm">Note: All input fields are required.</p>
        <div className="w-full pt-6">
          <Form onSubmit={handleSubmit}>
            Name
            <Form.Field
              id="form-input-control-name"
              control={Input}
              name="name"
              placeholder=" ..."
              required
              icon="user circle"
              iconPosition="left"
              className="my-1 mb-4 rounded-md border-2"
              style={{
                padding: 5,
                paddingLeft: 3,
              }}
            />
            Email
            <Form.Field
              id="form-input-control-email"
              control={Input}
              name="email"
              placeholder=" ..."
              required
              className="text-yellow my-1 mb-4 rounded-md border-2 focus:placeholder:text-transparent"
              style={{
                padding: 5,
                paddingLeft: 3,
              }}
            />
            Phone number
            <Form.Field
              id="form-input-control-phone"
              control={Input}
              name="phone"
              placeholder=" ..."
              required
              className="my-1 mb-4 rounded-md border-2"
              style={{
                padding: 5,
                paddingLeft: 3,
              }}
            />
            Message
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              name="message"
              placeholder=" Text here..."
              required
              className="my-1 rounded-md border-2"
              style={{
                padding: 5,
                paddingLeft: 1,
              }}
            />
            <Button
              type="submit"
              color="green"
              className="rounded-md border bg-yellow-400 py-2 px-4"
              style={{
                padding: 5,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
