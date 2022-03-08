"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ config)
/* harmony export */ });
const getEnvironmentVariable = (environmentVariable)=>{
    const unvalidatedEnvironmentVariable = process.env[environmentVariable];
    if (!unvalidatedEnvironmentVariable) {
        throw new Error(`Couldn't find environment variable: ${environmentVariable}`);
    } else {
        return unvalidatedEnvironmentVariable;
    }
};
const config = {
    USER_ID: getEnvironmentVariable("USER_ID"),
    TEMPLATE_ID: getEnvironmentVariable("TEMPLATE_ID"),
    SERVICE_ID: getEnvironmentVariable("SERVICE_ID"),
    GA_ID: getEnvironmentVariable("NEXT_PUBLIC_GOOGLE_ANALYTICS")
};


/***/ }),

/***/ 6239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app),
  "reportWebVitals": () => (/* binding */ reportWebVitals)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/navbarlogo.webp
/* harmony default export */ const navbarlogo = ({"src":"/_next/static/media/navbarlogo.72ad1030.webp","height":99,"width":300,"blurDataURL":"data:image/webp;base64,UklGRnAAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAIjEQW0YADhRITDFFYm4+IzxNEiJBWD0wAFZQOCAwAAAAEAIAnQEqCAADAAJAOCWgAnS6AAMJDoiDAAD+9Nxlgj4v/zBP1++fPah+j4UjhmAA"});
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./components/dropdown.js



function Dropdown({ closeMenu  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "z-5 fixed top-[64px] flex w-screen flex-col justify-between overflow-hidden bg-black text-left font-bold text-white opacity-90",
        id: "Dropdown",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-6",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-8 pl-10 lg:pl-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-8",
                            onClick: closeMenu,
                            children: "HOME"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-8 pl-10 lg:pl-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/menu.pdf",
                        alt: "alt text",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-8",
                            onClick: closeMenu,
                            children: "MENU"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-8 pl-10 lg:pl-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./order",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-4",
                            onClick: closeMenu,
                            children: "ORDER"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-8 pl-10 lg:pl-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-4",
                            onClick: closeMenu,
                            children: "ABOUT"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "pb-8 pl-10 lg:pl-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./contact",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-4",
                            onClick: closeMenu,
                            children: "CONTACT"
                        })
                    })
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./components/footer.js





function Footer() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex w-full flex-row justify-around border-t bg-white py-8 text-center text-sm font-bold text-gray-600 sm:px-2 sm:text-xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row sm:flex-wrap",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                icon: free_solid_svg_icons_namespaceObject.faCopyright,
                                className: "mx-2 inline-block",
                                width: "14px"
                            }),
                            "2022 C\xd4 T\xc2M."
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-2",
                        children: " All Rights Reserved."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row sm:flex-wrap",
                children: [
                    "Interact with us:",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "ml-2 sm:mt-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.facebook.com/Cotamrestaurant/",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                    icon: free_brands_svg_icons_namespaceObject.faFacebook,
                                    className: "color-blue-400",
                                    width: "25px"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://www.instagram.com/cotam.restaurant/?hl=en",
                                target: "_blank",
                                rel: "noreferrer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                    icon: free_brands_svg_icons_namespaceObject.faInstagram,
                                    className: "bg-color-purple",
                                    width: "25px"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://linktr.ee/Cotamrestaurant",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Linktree"
                    }),
                    " ",
                    "- ",
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./privacy-policy",
                        children: "Privacy policy"
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./components/details.js


function Details() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row flex-wrap justify-around bg-gray-700 py-8 text-gray-300",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4 sm:px-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "C\xf4 T\xe2m Vietnamese Restaurant"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "Spaarne 104 ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "2011 CM Haarlem ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Directions to C\xf4 T\xe2m Restaurant"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "The nearest bus stop is",
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://www.google.com/maps/dir/verwulft+haarlem+bus/@52.3886846,4.6217076,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c5ef6b265bb9f3:0xec91f5ae73f24209!2m2!1d4.632842!2d52.3801086!3e3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-yellow-500",
                            children: " Centrum/Verwulft"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    "The nearest parking garage is",
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://www.google.com/maps/dir/Parkeergarage+de+Kamp,+De+Kamp,+De+Witstraat,+Haarlem/@52.3886846,4.6217076,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c5ef6a0bd632a5:0xc5b40fd003a4c966!2m2!1d4.636914!2d52.3774229!3e3",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-yellow-500",
                            children: " De Kamp"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Phone number:"
                    }),
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "tel:023-583-4384",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-yellow-500",
                            children: "(023) 583 4384"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-4 mt-6 flex flex-row px-6 sm:mt-8",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "mr-8 font-bold",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Mon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Tue "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Wed"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Thu "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Fri"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Sat"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Sun"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "Close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30 "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "py-1",
                                children: "16:00 - 21:30"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-4 flex flex-col sm:mt-2 md:mt-6 md:p-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "./location.jpg",
                        alt: "cotam-location",
                        width: "320",
                        height: "230"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "https://www.google.com/maps/place/C%C3%B4+T%C3%A2m+Restaurant/@52.3791754,4.6353804,16.33z/data=!4m12!1m6!3m5!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!2zQ8O0IFTDom0gUmVzdGF1cmFudA!8m2!3d52.3783644!4d4.6377021!3m4!1s0x47c5ef611944cb6f:0x18c54ffd336c3bac!8m2!3d52.3783644!4d4.6377021?authuser=1",
                        rel: "noreferrer",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "m-auto mt-8 w-[100px] rounded-lg bg-[#F7C12F] p-2 text-center text-black",
                            children: "Go to maps"
                        })
                    })
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: external "react-cookie-consent"
const external_react_cookie_consent_namespaceObject = require("react-cookie-consent");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./config.ts
var config = __webpack_require__(8288);
;// CONCATENATED MODULE: ./lib/ga/index.js

// log the pageview with their URL
const pageview = (url)=>{
    window.gtag("config", config/* config.GA_ID */.v.GA_ID, {
        page_path: url
    });
};
// log specific events happening.
const ga_event = ({ action , params  })=>{
    window.gtag("event", action, params);
};

;// CONCATENATED MODULE: ./pages/_app.js















function reportWebVitals(metric) {
    console.log(metric);
}
function MyApp({ Component , pageProps  }) {
    const { 0: open , 1: setOpen  } = (0,external_react_.useState)(false);
    const handleOpen = ()=>setOpen(!open)
    ;
    const closeMenu = ()=>setOpen(false)
    ;
    const router = (0,router_namespaceObject.useRouter)();
    function hideMenu() {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.transitionDuration = "0.3s";
                document.getElementById("navbar").style.top = "-78px";
                setOpen(false);
            }
            prevScrollpos = currentScrollPos;
        };
    }
    (0,external_react_.useEffect)(()=>{
        hideMenu();
    }, []);
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on("routeChangeComplete", handleRouteChange);
        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen",
        id: "app",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: " fixed top-0 flex h-[64px] w-full flex-row flex-nowrap justify-between bg-black p-4",
                id: "navbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "./",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "lg2:ml-4 mr-1 self-start",
                            onClick: closeMenu,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: navbarlogo,
                                placeholder: "blur",
                                width: "90",
                                height: "30"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-1",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "font-bold text-white md:hidden",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "./",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: closeMenu,
                                            children: "HOME"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-4",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "/menu.pdf",
                                        alt: "alt text",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: closeMenu,
                                            children: "MENU"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-4",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "./order",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: closeMenu,
                                            children: "ORDER"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-4",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "./about",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: closeMenu,
                                            children: "ABOUT"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-4",
                                        children: "|"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: "./contact",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            onClick: closeMenu,
                                            children: "CONTACT"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "px-4",
                                        children: "|"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "text-white",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.facebook.com/Cotamrestaurant/",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faFacebook,
                                            width: "40px"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://www.instagram.com/cotam.restaurant/?hl=en",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                            icon: free_brands_svg_icons_namespaceObject.faInstagram,
                                            width: "40px"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "md2:hidden pl-4 pr-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: handleOpen,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                        icon: open ? free_solid_svg_icons_namespaceObject.faXmark : free_solid_svg_icons_namespaceObject.faBars,
                                        size: "xl",
                                        className: "text-white"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "Dropdown",
                children: [
                    open && /*#__PURE__*/ jsx_runtime_.jsx(Dropdown, {
                        closeMenu: closeMenu
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Details, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_cookie_consent_default()), {
                style: {
                    textAlign: "center",
                    fontSize: "14px"
                },
                buttonStyle: {
                    marginRight: "50px",
                    padding: "10px",
                    textAlign: "center"
                },
                expires: 150,
                children: [
                    "This website uses cookies to enhance the user experience.",
                    " "
                ]
            })
        ]
    }));
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664,675], () => (__webpack_exec__(6239)));
module.exports = __webpack_exports__;

})();