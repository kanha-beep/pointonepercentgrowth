const footerLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Categories", path: "/categories" },
  { label: "Contact", path: "/contact" }
];

function Footer({ content, navigate }) {
  return (
    <footer className="border-t border-slate-950/10 px-0 py-9 pb-12">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-6 md:grid-cols-[1.2fr_0.8fr_0.8fr] max-[720px]:w-[min(100%-28px,1180px)]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#be7b3f]">
            Sale Portfolio
          </p>
          <h3 className="mb-3 mt-0 text-2xl text-slate-950">{content.businessName}</h3>
          <p className="leading-8 text-slate-500">{content.seoLine}</p>
        </div>

        <div>
          <h4 className="mb-3 mt-0 text-lg text-slate-950">Pages</h4>
          <div className="flex flex-col items-start gap-2.5">
            {footerLinks.map((link) => (
              <a
                key={link.path}
                className="text-slate-600 transition hover:text-slate-950"
                href={link.path}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(link.path);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 mt-0 text-lg text-slate-950">Contact</h4>
          <div className="flex flex-col items-start gap-2.5">
            <a className="text-slate-600 transition hover:text-slate-950" href={`mailto:${content.contact.email}`}>
              {content.contact.email}
            </a>
            <a className="text-slate-600 transition hover:text-slate-950" href={content.contact.phoneHref}>
              {content.contact.phoneDisplay}
            </a>
            <a
              className="text-slate-600 transition hover:text-slate-950"
              href={`https://wa.me/${content.contact.whatsappNumber}`}
            >
              WhatsApp Direct
            </a>
            <p className="m-0 text-slate-600">{content.contact.officeAddress}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
