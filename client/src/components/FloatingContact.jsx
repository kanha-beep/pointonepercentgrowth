function FloatingContact({ contact }) {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 flex flex-col gap-3 sm:left-auto sm:right-[18px] sm:bottom-[18px] sm:w-auto">
      <a
        className="min-w-0 rounded-full border border-slate-950/10 bg-white/95 px-[18px] py-[13px] text-center font-bold text-slate-950 shadow-soft sm:min-w-[146px]"
        href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.whatsappText)}`}
      >
        WhatsApp
      </a>
      <a
        className="min-w-0 rounded-full border border-slate-950/10 bg-white/95 px-[18px] py-[13px] text-center font-bold text-slate-950 shadow-soft sm:min-w-[146px]"
        href={contact.phoneHref}
      >
        Call Now
      </a>
    </div>
  );
}

export default FloatingContact;
