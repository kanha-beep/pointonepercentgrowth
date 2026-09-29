import Link from "next/link";

import { siteContent } from "@/lib/site";

const logoUrl = "https://res.cloudinary.com/dw7elrwuy/image/upload/v1790411402/pointonepercentgrowth/branding/agency-logo.jpg";
const footerGroups = [
  { title: "Our work", links: [{ label: "Graphic Design", href: "/projects" }, { label: "UI/UX Design", href: "/projects" },{ label: "Software Development", href: "/projects" }] },
  { title: "Studio", links: [{ label: "About us", href: "/about" }, { label: "Contact us", href: "/contact" }] }
] as const;

export default function Footer() {
  const content = siteContent;
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-2.5"><div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border"><img src={logoUrl} alt=".1% Growth" className="h-full w-full object-contain" /></div><span className="text-xl font-black tracking-tight text-[#1F30CC]">.1%Growth</span></div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">Graphic design, UI/UX, Software Development for brands and digital products. Explore our work and get in touch to discuss your project.</p>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4"><p className="text-xs font-semibold text-slate-300">Headquarters</p><p className="mt-1 text-xs text-slate-400">{content.contact.officeAddress}</p><p className="mt-1 text-xs text-indigo-400">{content.contact.email} • {content.contact.phoneDisplay}</p></div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">{footerGroups.map((group) => <div key={group.title} className="space-y-3"><h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">{group.title}</h4><ul className="space-y-2.5 p-0">{group.links.map((link) => <li key={link.label}><Link href={link.href} className="text-xs text-slate-400 transition hover:text-indigo-400">{link.label}</Link></li>)}</ul></div>)}</div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row"><p>© {new Date().getFullYear()} Point One Percent Growth. All rights reserved.</p><div className="flex items-center gap-6"><Link href="/contact" className="transition hover:text-slate-400">Privacy Policy</Link><Link href="/contact" className="transition hover:text-slate-400">Terms of Service</Link><Link href="/contact" className="transition hover:text-slate-400">Security</Link></div></div>
      </div>
    </footer>
  );
}
