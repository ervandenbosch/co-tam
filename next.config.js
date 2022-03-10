module.exports = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  env: {
    USER_ID: "18V8a-KBr3rQwVnIZ",
    TEMPLATE_ID: "template_li1jygo",
    SERVICE_ID: "service_u7hyqd6",
    NEXT_PUBLIC_GA_ID: "G-HFN3SJJB67",
  },
  async redirects() {
    return [
      {
        source: "/pages/menu",
        destination: "/files/menu.pdf",
        permanent: true,
      },
      {
        source: "/pages/menukaart",
        destination: "/files/menu.pdf",
        permanent: true,
      },
      {
        source: "/pages/contact",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pages/about",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};
