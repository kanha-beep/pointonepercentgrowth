module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/site-shell.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell,
    "useEnquiryStatus",
    ()=>useEnquiryStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const EnquiryContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const navItems = [
    {
        label: "Home",
        path: "/"
    },
    {
        label: "About",
        path: "/about"
    },
    {
        label: "Projects",
        path: "/projects"
    },
    {
        label: "Categories",
        path: "/categories"
    },
    {
        label: "Contact",
        path: "/contact"
    }
];
const footerGroups = [
    {
        title: "Solutions",
        links: [
            {
                label: "Businesses",
                href: "/categories"
            },
            {
                label: "Agencies",
                href: "/about"
            },
            {
                label: "Freelancers",
                href: "/projects"
            }
        ]
    },
    {
        title: "Resources",
        links: [
            {
                label: "How it works",
                href: "/about"
            },
            {
                label: "Help center",
                href: "/contact"
            },
            {
                label: "Blog",
                href: "/projects"
            }
        ]
    },
    {
        title: "Developers",
        links: [
            {
                label: "Software developers",
                href: "/projects"
            },
            {
                label: "WooCommerce developers",
                href: "/projects"
            },
            {
                label: "Apply as an Expert",
                href: "/contact"
            }
        ]
    },
    {
        title: "Company",
        links: [
            {
                label: "Our story",
                href: "/about"
            },
            {
                label: "Our team",
                href: "/about"
            },
            {
                label: "Manifesto",
                href: "/about"
            }
        ]
    }
];
function SiteShell({ children }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        type: "",
        message: ""
    });
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            status,
            setStatus
        }), [
        status
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EnquiryContext.Provider, {
        value: value,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"]
                    }, void 0, false, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBanner, {}, void 0, false, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"]
                    }, void 0, false, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingContact, {}, void 0, false, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
function useEnquiryStatus() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(EnquiryContext);
    if (!context) {
        throw new Error("useEnquiryStatus must be used inside SiteShell.");
    }
    return context;
}
function StatusBanner() {
    const { status } = useEnquiryStatus();
    if (!status.message) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `px-5 py-2.5 text-center text-[0.95rem] ${status.type === "success" ? "bg-emerald-700/10 text-emerald-700" : "bg-red-700/10 text-red-700"}`,
        children: status.message
    }, void 0, false, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
function Header({ content }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    function closeMenu() {
        setOpen(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 border-b border-slate-950/10 bg-[#f8f3ec]/85 backdrop-blur-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between gap-6 py-[18px] max-[720px]:w-[min(100%-28px,1180px)] max-[720px]:items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        className: "inline-flex items-center gap-3.5 border-0 p-0 text-left",
                        href: "/",
                        onClick: closeMenu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#be7b3f]/25 bg-gradient-to-br from-white/95 to-[#f1dcc9]/95 font-bold text-slate-950 shadow-soft",
                                children: "SP"
                            }, void 0, false, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "block text-[1.02rem] text-slate-950",
                                        children: content.businessName
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-shell.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        className: "block text-[0.78rem] text-slate-500",
                                        children: content.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-shell.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-3.5 md:flex",
                        "aria-label": "Primary navigation",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: item.path,
                                className: `relative text-[0.96rem] ${pathname === item.path ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-2.5 after:h-0.5 after:rounded-full after:bg-[#be7b3f] after:content-['']" : "text-slate-500 hover:text-slate-950"}`,
                                onClick: closeMenu,
                                children: item.label
                            }, item.path, false, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "hidden min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5 md:inline-flex",
                                href: `https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`,
                                children: "WhatsApp"
                            }, void 0, false, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 px-5 py-3 text-slate-950 transition duration-200 hover:-translate-y-0.5 md:hidden",
                                onClick: ()=>setOpen((current)=>!current),
                                type: "button",
                                children: "Menu"
                            }, void 0, false, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/site-shell.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-slate-950/10 bg-[#faf6f0]/95 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto grid w-[min(1180px,calc(100%-40px))] gap-4 py-[18px] pb-[22px] max-[720px]:w-[min(100%-28px,1180px)]",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.path,
                            className: pathname === item.path ? "text-slate-950" : "text-slate-500",
                            onClick: closeMenu,
                            children: item.label
                        }, item.path, false, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 143,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/site-shell.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
function SocialIcon({ kind }) {
    if (kind === "x") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            "aria-hidden": "true",
            className: "h-5 w-5 fill-current",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-7.43L5.54 22H2.43l7.24-8.28L1.6 2h6.4l4.43 6.9L18.9 2Zm-1.1 18h1.73L7.07 3.9H5.2Z"
            }, void 0, false, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 158,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/site-shell.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        className: "h-5 w-5 fill-current",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.5 22v-8.2h2.8l.42-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.71V4.13c-.3-.04-1.33-.13-2.52-.13-2.5 0-4.21 1.53-4.21 4.34v2.42H7.25v3.2h2.88V22h3.37Z"
        }, void 0, false, {
            fileName: "[project]/components/site-shell.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
function Footer({ content }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#192129] px-0 py-16 pb-10 text-white max-[720px]:py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[290px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "m-0 text-[clamp(2.3rem,3vw,3rem)] leading-none tracking-[-0.05em] text-white",
                                    children: "pointonepercentgrowth"
                                }, void 0, false, {
                                    fileName: "[project]/components/site-shell.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 flex items-center gap-2 text-[1.05rem] font-medium text-[#f6ad93]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[1rem]",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-shell.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Build with heart"
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-shell.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-shell.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 leading-8 text-white/68",
                                    children: "When you absolutely, positively need the highest quality Software development work."
                                }, void 0, false, {
                                    fileName: "[project]/components/site-shell.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-7 flex items-center gap-5 text-[#f6ad93]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "aria-label": "X",
                                            className: "transition hover:text-white",
                                            href: "https://x.com",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                                kind: "x"
                                            }, void 0, false, {
                                                fileName: "[project]/components/site-shell.tsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-shell.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "aria-label": "Facebook",
                                            className: "transition hover:text-white",
                                            href: "https://facebook.com",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialIcon, {
                                                kind: "facebook"
                                            }, void 0, false, {
                                                fileName: "[project]/components/site-shell.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/site-shell.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/site-shell.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        footerGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "m-0 text-[1.15rem] leading-none tracking-[-0.03em] text-white",
                                        children: group.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-shell.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 h-px w-full bg-white/28"
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-shell.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-5 flex flex-col gap-3.5",
                                        children: group.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "text-[1rem] text-white/68 transition hover:text-white",
                                                href: link.href,
                                                children: link.label
                                            }, link.label, false, {
                                                fileName: "[project]/components/site-shell.tsx",
                                                lineNumber: 202,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/site-shell.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, group.title, true, {
                                fileName: "[project]/components/site-shell.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-shell.tsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-16 flex flex-wrap items-center justify-center gap-4 text-center text-[0.98rem] text-white/85 max-[720px]:mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "2026 (c) ",
                                content.businessName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#f6ad93]",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "transition hover:text-white",
                            href: "/contact",
                            children: "Terms of Service"
                        }, void 0, false, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#f6ad93]",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "transition hover:text-white",
                            href: "/contact",
                            children: "Privacy Policy"
                        }, void 0, false, {
                            fileName: "[project]/components/site-shell.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/site-shell.tsx",
                    lineNumber: 211,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/site-shell.tsx",
            lineNumber: 173,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
function FloatingContact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-3 left-3 right-3 z-40 flex flex-col gap-3 sm:bottom-[18px] sm:left-auto sm:right-[18px] sm:w-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "min-w-0 rounded-full border border-slate-950/10 bg-white/95 px-[18px] py-[13px] text-center font-bold text-slate-950 shadow-soft sm:min-w-[146px]",
                href: `https://wa.me/${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].contact.whatsappNumber}?text=${encodeURIComponent(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].contact.whatsappText)}`,
                children: "WhatsApp"
            }, void 0, false, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                className: "min-w-0 rounded-full border border-slate-950/10 bg-white/95 px-[18px] py-[13px] text-center font-bold text-slate-950 shadow-soft sm:min-w-[146px]",
                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["siteContent"].contact.phoneHref,
                children: "Call Now"
            }, void 0, false, {
                fileName: "[project]/components/site-shell.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/site-shell.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/site.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "siteContent",
    ()=>siteContent
]);
const connectedCategories = [
    {
        slug: "grocery",
        name: "Grocery",
        accent: "accent-grocery",
        description: "Real package data connected for grocery businesses with starter, growth, and premium website directions.",
        audience: "Kirana stores, fresh market stores, delivery-first grocery brands",
        websites: [
            "Fresh Start Grocery",
            "Market Lane Grocery",
            "Prime Harvest Grocery"
        ],
        packages: [
            {
                tier: "Low",
                name: "Fresh Start Grocery",
                price: "Rs 25,000 - Rs 35,000",
                pages: "5",
                features: "2",
                summary: "Starter grocery website for neighborhood stores that need trust, quick contact, and simple product highlights."
            },
            {
                tier: "Medium",
                name: "Market Lane Grocery",
                price: "Rs 45,000 - Rs 70,000",
                pages: "10",
                features: "5",
                summary: "Growth package with offers, category storytelling, testimonials, and stronger local SEO sections."
            },
            {
                tier: "High",
                name: "Prime Harvest Grocery",
                price: "Rs 85,000 - Rs 1,40,000",
                pages: "15",
                features: "7",
                summary: "Premium grocery direction for supermarket brands, corporate inquiries, and multi-branch presentation."
            }
        ]
    },
    {
        slug: "milk",
        name: "Milk",
        accent: "accent-milk",
        description: "Package data for dairy businesses with lean, growth, and premium website directions.",
        audience: "Milk shops, dairy brands, subscription delivery businesses",
        websites: [
            "Shree Fresh Milk",
            "Morning Basket Dairy",
            "Urban A2 Creamery"
        ],
        packages: [
            {
                tier: "Low",
                name: "Shree Fresh Milk",
                price: "Rs 14,999",
                pages: "5",
                features: "2",
                summary: "Lean dairy website focused on WhatsApp reorder flow and subscription enquiry capture for local families."
            },
            {
                tier: "Medium",
                name: "Morning Basket Dairy",
                price: "Rs 29,999",
                pages: "10",
                features: "5",
                summary: "Balanced dairy package with subscription plans, delivery slot enquiries, testimonials, and FAQ-led conversion."
            },
            {
                tier: "High",
                name: "Urban A2 Creamery",
                price: "Rs 54,999",
                pages: "15",
                features: "7",
                summary: "Premium dairy experience with traceability, bundles, loyalty, B2B supply, and stronger brand storytelling."
            }
        ]
    },
    {
        slug: "stationery",
        name: "Stationery",
        accent: "accent-stationery",
        description: "Package variants for stationery businesses covering starter, growth, and established supplier layouts.",
        audience: "School supply stores, office stationery shops, wholesale suppliers",
        websites: [
            "Stationery Low Package",
            "Stationery Medium Package",
            "Stationery High Package"
        ],
        packages: [
            {
                tier: "Low",
                name: "Stationery Low Package",
                price: "Rs 18,000",
                pages: "5",
                features: "2",
                summary: "Starter business website for local stationery shops with contact form and WhatsApp CTA."
            },
            {
                tier: "Medium",
                name: "Stationery Medium Package",
                price: "Rs 42,000",
                pages: "10",
                features: "5",
                summary: "Growing stationery brand layout with category showcase, bulk order enquiry, testimonials, and FAQ."
            },
            {
                tier: "High",
                name: "Stationery High Package",
                price: "Rs 78,000",
                pages: "15",
                features: "7",
                summary: "Advanced stationery supplier website for institutional, school, and corporate conversion flows."
            }
        ]
    }
];
const connectedProjects = connectedCategories.flatMap((category, categoryIndex)=>category.packages.map((pkg, packageIndex)=>({
            id: `${category.slug}-${pkg.tier.toLowerCase()}`,
            number: String(categoryIndex * 3 + packageIndex + 1).padStart(2, "0"),
            title: pkg.name,
            category: `${category.name} (${pkg.tier})`,
            summary: pkg.summary,
            packageFit: pkg.tier,
            gradient: category.slug === "grocery" ? "gradient-grocery" : category.slug === "milk" ? "gradient-milk" : "gradient-stationery",
            stats: [
                `${pkg.pages} pages`,
                `${pkg.features} features`,
                pkg.price
            ],
            ctaLabel: `Use ${pkg.name}`
        })));
const siteContent = {
    businessName: "pointonepercentgrowth",
    tagline: "Conversion-focused websites for local Indian businesses",
    topLabel: "Responsive portfolio. Motion-rich sections. Category-led selling.",
    seoLine: "Designing digital storefronts that make local businesses look premium online.",
    contact: {
        email: "hello@saleportfolio.in",
        phoneDisplay: "+91 91313 95725",
        phoneHref: "tel:+919131395725",
        whatsappNumber: "919131395725",
        whatsappText: "Hi, I saw your Sale Portfolio website and I want a professional business website.",
        officeLabel: "Studio office",
        officeName: "pointonepercentgrowth",
        officeAddress: "Om Shiv Nagar, Lalghati",
        officeHours: "Mon to Sat, 10:00 AM to 7:30 PM"
    },
    hero: {
        eyebrow: "Portfolio websites for local growth brands",
        title: "We build polished websites that make salons, grocery stores, milk brands, stationery shops, clinics, cosmetics brands, and local shops look ready for serious business.",
        description: "This main portfolio website helps clients browse our work by category, compare low, medium, and high service plans, and contact us directly on WhatsApp or phone for customization.",
        primaryCta: "Explore Projects",
        secondaryCta: "See Packages"
    },
    metrics: [
        {
            value: "07",
            label: "business categories"
        },
        {
            value: "09",
            label: "connected package directions"
        },
        {
            value: "03",
            label: "service packages"
        },
        {
            value: "100%",
            label: "mobile responsive layouts"
        }
    ],
    highlights: [
        "Dedicated pages for About, Projects, Categories, and Contact",
        "Motion-based reveals, floating shapes, and premium section layering",
        "Direct WhatsApp and mobile call actions on every project card"
    ],
    packages: [
        {
            tier: "Low",
            name: "Launch Package",
            price: "Rs 14,999",
            meta: "Up to 5 pages",
            featured: false,
            description: "For local shops that want a clean online presence quickly.",
            features: [
                "Home, About, Services, Contact, Portfolio",
                "Direct WhatsApp button",
                "Simple enquiry form",
                "Responsive mobile-first design",
                "Basic speed optimization"
            ]
        },
        {
            tier: "Medium",
            name: "Growth Package",
            price: "Rs 34,999",
            meta: "Up to 10 pages",
            featured: true,
            description: "For businesses that want category showcases and stronger conversion.",
            features: [
                "Everything in Launch Package",
                "Gallery or product showcase sections",
                "Google Maps and trust blocks",
                "Lead-focused landing sections",
                "Category filtering and custom CTAs",
                "On-page SEO structure"
            ]
        },
        {
            tier: "High",
            name: "Scale Package",
            price: "Rs 64,999",
            meta: "Up to 15 pages",
            featured: false,
            description: "For premium local brands moving toward full e-commerce positioning.",
            features: [
                "Everything in Growth Package",
                "Advanced multi-section storytelling",
                "Custom forms and lead routing",
                "Conversion analytics setup",
                "Speed and structure optimization",
                "Large project or multi-category architecture"
            ]
        }
    ],
    story: {
        title: "Who we are",
        description: "We are a small business web studio building premium-feel portfolio and business websites for local markets. Our approach is simple: show clients category-specific work first, then customize the design to match their brand, offers, and target customers.",
        principles: [
            "Professional visual system that builds trust fast",
            "Practical layouts that help customers call or message immediately",
            "Category-first presentations so local clients know exactly what they are buying"
        ]
    },
    office: {
        title: "Our office and working style",
        description: "We blend agency-level visual polish with local business practicality. Every project is designed to feel premium on mobile, clean on desktop, and easy for real customers to act on.",
        bullets: [
            "Clear process from category selection to launch",
            "Custom branding for salon, grocery, stationery, medical, cosmetics, e-commerce, and milk businesses",
            "Direct support through WhatsApp and voice call"
        ]
    },
    categories: [
        {
            slug: "salon",
            name: "Salon",
            accent: "accent-salon",
            description: "Luxury service presentation, pricing blocks, appointment messaging, stylist sections, and beauty-led visuals.",
            audience: "Salons, spas, grooming, makeover studios",
            websites: [
                "Fusion Unisex Salon",
                "Lucky Family Salon",
                "Urban Glow Studio"
            ]
        },
        {
            slug: "grocery",
            name: "Grocery",
            accent: "accent-grocery",
            description: "Connected package directions for grocery businesses with starter, growth, and premium website variants.",
            audience: "Kirana stores, quick commerce brands, fresh market stores",
            websites: connectedCategories.find((item)=>item.slug === "grocery").websites,
            packages: connectedCategories.find((item)=>item.slug === "grocery").packages
        },
        {
            slug: "milk",
            name: "Milk",
            accent: "accent-milk",
            description: "Subscription-friendly, trust-led website directions for local dairies and premium milk brands.",
            audience: "Local dairies, milk subscriptions, premium dairy brands",
            websites: connectedCategories.find((item)=>item.slug === "milk").websites,
            packages: connectedCategories.find((item)=>item.slug === "milk").packages
        },
        {
            slug: "medical",
            name: "Medical",
            accent: "accent-medical",
            description: "Trust-focused pages for medicines, diagnostic information, working hours, and nearby contact.",
            audience: "Pharmacies, clinics, wellness stores",
            websites: [
                "CarePlus Medical",
                "City Medico Hub",
                "Health Direct Pharmacy"
            ]
        },
        {
            slug: "stationery",
            name: "Stationery",
            accent: "accent-stationery",
            description: "Connected package layouts for shop, school, office, and wholesale stationery selling.",
            audience: "Local stationery shops, office suppliers",
            websites: connectedCategories.find((item)=>item.slug === "stationery").websites,
            packages: connectedCategories.find((item)=>item.slug === "stationery").packages
        },
        {
            slug: "cosmetics",
            name: "Cosmetics",
            accent: "accent-cosmetics",
            description: "Product-led storytelling with clean grids, premium visuals, and beauty brand positioning.",
            audience: "Makeup brands, beauty stores, skincare boutiques",
            websites: [
                "Velvet Glow Cosmetics",
                "Blush & Bloom",
                "Radiant Beauty House"
            ]
        },
        {
            slug: "ecommerce",
            name: "E-Commerce",
            accent: "accent-commerce",
            description: "Sales-first product experiences for local businesses moving online with stronger digital credibility.",
            audience: "Any local business ready to sell online",
            websites: [
                "Local Cart Pro",
                "Neighborhood Storefront",
                "ScaleUp Commerce"
            ]
        }
    ],
    projects: connectedProjects,
    process: [
        {
            step: "01",
            title: "Choose category",
            description: "Salon, grocery, milk, medical, stationery, cosmetics, or e-commerce."
        },
        {
            step: "02",
            title: "Shortlist a project",
            description: "Pick the project direction that matches your business personality."
        },
        {
            step: "03",
            title: "Select low, medium, or high",
            description: "We map your pages, features, and conversion flow to the right package."
        },
        {
            step: "04",
            title: "Customize and launch",
            description: "Your branding, content, direct contact links, and local positioning go live."
        }
    ],
    testimonials: [
        {
            quote: "The website immediately looked more expensive than what local competitors had. Clients trusted us faster.",
            name: "Salon Business Owner"
        },
        {
            quote: "The category-based portfolio made it easy to pick a direction. We knew what we were buying before we called.",
            name: "Grocery Store Founder"
        },
        {
            quote: "Mobile responsiveness and clear WhatsApp buttons made the biggest difference for our local leads.",
            name: "Medical Store Manager"
        }
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1jq2hwk._.js.map