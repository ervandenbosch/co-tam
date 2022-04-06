import Head from "next/head";
import Script from "next/script";

export default function Reservation() {
  return (
    <>
      <Head>
        <title>Reserve a table at Cô Tâm</title>
      </Head>
      <div className="flex flex-col justify-center bg-white">
        <div className="h-72">
          <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(g,s,t,p,l,n){
      g["_gstpln"]={};
      (l=s.createElement(t)),(n=s.getElementsByTagName(t)[0]);
      l.async=1;l.src=p;n.parentNode.insertBefore(l,n);
    })(window,document,"script","https://cdn.guestplan.com/widget.js");
 	_gstpln.accessKey = "a61e9fd2920eb894b1f8ca80c3b0984b5e6b6059";
	_gstpln.open = true;`,
            }}
          />
        </div>
        <div className="bg-gray-600 py-12 text-center">
          <h2 className="px-8 pb-12 text-2xl font-bold text-white">
            Enjoyed our food at Cô Tâm? Let us know below at your favorite
            platform!
          </h2>
          <a
            href="https://www.facebook.com/Cotamrestaurant/reviews/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Facebook
            </button>
          </a>
          <a
            href="https://g.page/cotam_restaurant/review?gm"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Google
            </button>
          </a>
          <a
            href="https://www.tripadvisor.nl/Restaurant_Review-g188593-d21491723-Reviews-Co_Tam-Haarlem_North_Holland_Province.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="m-2 w-[200px] rounded-lg bg-[#F7C12F] p-2 text-center">
              Tripadvisor
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
