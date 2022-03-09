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
      <div className="m-auto w-1/2 px-16 py-[64px] sm:w-full sm:px-12 md:w-2/3">
        <h2 className="mt-12 text-center text-xl font-bold">
          Send us a message
        </h2>
        <p className="m-auto mt-6 py-4 text-justify">
          We love to hear your thoughts whether it is positive or negative. Feel
          free to let us know if you have any comment on your recent experience
          or any suggestion would be appreciated for our improvement.
        </p>
        <Form onSubmit={handleSubmit}>
          Email *
          <Form.Field
            id="form-input-control-email"
            control={Input}
            name="email"
            placeholder=" …"
            required
            icon="mail"
            iconPosition="left"
            className="my-2 rounded-md border-2"
            style={{
              padding: 5,
              paddingLeft: 1,
            }}
          />
          Name *
          <Form.Field
            id="form-input-control-name"
            control={Input}
            name="name"
            placeholder=" …"
            required
            icon="user circle"
            iconPosition="left"
            className="my-2 rounded-md border-2"
            style={{
              padding: 5,
              paddingLeft: 1,
            }}
          />
          Phone number *
          <Form.Field
            id="form-input-control-phone"
            control={Input}
            name="phone"
            placeholder=" …"
            required
            icon="user circle"
            iconPosition="left"
            className="my-2 rounded-md border-2"
            style={{
              padding: 5,
              paddingLeft: 1,
            }}
          />
          Message *
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            name="message"
            placeholder=" Text here.."
            required
            className="my-2 rounded-md border-2"
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
              paddingLeft: 1,
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
