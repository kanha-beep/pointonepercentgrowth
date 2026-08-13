import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function ProjectsPage({ content, navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Project-driven portfolio pages for salon, grocery, medical, cosmetics, stationery, and e-commerce businesses"
        description="Each project direction has its own number, a clear category fit, and direct WhatsApp or call actions for faster client response."
        actions={
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
            onClick={() => navigate("/contact")}
          >
            Request Customization
          </button>
        }
      />

      <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio showcase"
              title="Choose a project style, then we customize it for your brand"
              description="This structure helps customers feel the quality before they even contact you."
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {content.projects.map((item, index) => (
              <Reveal key={item.id} delay={index * 70}>
                <ProjectCard item={item} contact={content.contact} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
