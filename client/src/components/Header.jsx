import { useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Categories", path: "/categories" },
  { label: "Contact", path: "/contact" }
];

function Header({ content, navigate, pathname }) {
  const [open, setOpen] = useState(false);

  function handleNavigate(path) {
    navigate(path);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-950/10 bg-[#f8f3ec]/85 backdrop-blur-xl">
      <div className="overflow-hidden border-b border-white/20 bg-[#182434] text-white/80">
        <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] justify-between gap-5 overflow-hidden whitespace-nowrap py-2.5 text-[0.82rem] uppercase tracking-[0.05em] max-[820px]:justify-start max-[820px]:gap-7 max-[820px]:animate-marquee-mobile max-[720px]:w-[min(100%-28px,1180px)]">
          <p className="m-0">{content.topLabel}</p>
          <p className="m-0">{content.contact.officeAddress}</p>
        </div>
      </div>

      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between gap-6 py-[18px] max-[720px]:w-[min(100%-28px,1180px)] max-[720px]:items-start">
        <button
          className="inline-flex items-center gap-3.5 border-0 p-0 text-left"
          onClick={() => handleNavigate("/")}
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#be7b3f]/25 bg-gradient-to-br from-white/95 to-[#f1dcc9]/95 font-bold text-slate-950 shadow-soft">
            SP
          </span>
          <span>
            <strong className="block text-[1.02rem] text-slate-950">{content.businessName}</strong>
            <small className="block text-[0.78rem] text-slate-500">{content.tagline}</small>
          </span>
        </button>

        <nav className="hidden items-center gap-3.5 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`relative text-[0.96rem] ${
                pathname === item.path
                  ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-2.5 after:h-0.5 after:rounded-full after:bg-[#be7b3f] after:content-['']"
                  : "text-slate-500 hover:text-slate-950"
              }`}
              onClick={(event) => {
                event.preventDefault();
                handleNavigate(item.path);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            className="hidden min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5 md:inline-flex"
            href={buildWhatsAppLink(content.contact)}
          >
            WhatsApp
          </a>
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 px-5 py-3 text-slate-950 transition duration-200 hover:-translate-y-0.5 md:hidden"
            onClick={() => setOpen((current) => !current)}
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-950/10 bg-[#faf6f0]/95 md:hidden">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-4 py-[18px] pb-[22px] max-[720px]:w-[min(100%-28px,1180px)]">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={pathname === item.path ? "text-slate-950" : "text-slate-500"}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavigate(item.path);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function buildWhatsAppLink(contact) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappText)}`;
}

export default Header;
