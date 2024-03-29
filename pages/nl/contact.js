import Head from "next/head";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import useScript from "/components/useScript";

export default function ContactNL() {
  useScript(`(function (g, s, t, p, l, n) {
          g["_gstpln"] = {};
          (l = s.createElement(t)), (n = s.getElementsByTagName(t)[0]);
          l.async = 1;
          l.src = p;
          n.parentNode.insertBefore(l, n);
        })(window, document, "script", "https://cdn.guestplan.com/widget.js");
        _gstpln.accessKey = "a61e9fd2920eb894b1f8ca80c3b0984b5e6b6059";
        _gstpln.open = false;
        _gstpln.locale = "nl";`);

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
            title: "Bericht succesvol verzonden",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Er ging wat verkeerd!",
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
        <meta
          name="beschrijving"
          content="Welkom bij Cô Tâm Vietnamees restaurant. De authentieke Vietnamese keuken in het centrum van Haarlem. Geniet van heerlijk Vietnamees eten aan het Spaarne."
        />
    
        <meta property="og:locale" content="nl_NL"></meta>
        <meta property="og:locale:alternate" content="en_US"></meta>
      </Head>
      <div className="m-auto w-1/2 px-16 py-[64px] md:w-2/3 sm:w-full sm:px-12">
        <h2 className="mt-12 text-center text-xl font-bold">
          Stuur een bericht
        </h2>
        <p className="m-auto mt-8 text-justify">
          We horen graag uw mening, of deze nu positief of negatief is. Laat het
          ons gerust weten als u opmerkingen heeft over uw recente ervaring of
          als u een suggestie voor onze verbetering op prijs stelt.
        </p>
        <p className=" py-2 text-sm">Let op: Alle velden zijn verplicht.</p>
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
            Telefoonnummer
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
            Bericht
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              name="message"
              placeholder=" Text hier.."
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
                paddingLeft: 14,
                paddingRight: 14,
                marginTop: 12,
              }}
            >
              Verzenden
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
