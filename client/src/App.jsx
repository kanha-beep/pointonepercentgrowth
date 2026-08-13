import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Layout from "./components/Layout";
import FloatingContact from "./components/FloatingContact";
import { fallbackContent } from "./data/fallbackContent";
import AboutPage from "./pages/AboutPage";
import CategoriesPage from "./pages/CategoriesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";

const routes = {
  "/": HomePage,
  "/about": AboutPage,
  "/projects": ProjectsPage,
  "/categories": CategoriesPage,
  "/contact": ContactPage
};

const initialForm = {
  name: "",
  businessType: "",
  phone: "",
  packageName: "",
  message: ""
};

const apiBaseUrl = import.meta.env.DEV ? "http://localhost:5000" : "";

function getCurrentPath() {
  return window.location.pathname || "/";
}

function App() {
  const [content, setContent] = useState(fallbackContent);
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [pathname, setPathname] = useState(getCurrentPath);

  useEffect(() => {
    async function loadContent() {
      try {
        const response = await axios.get(`${apiBaseUrl}/api/site-content`);
        setContent(response.data);
      } catch {
        setStatus({
          type: "error",
          message: "Live content API unavailable, fallback portfolio data is being shown."
        });
      } finally {
        setLoading(false);
      }
    }

    loadContent();
  }, []);

  useEffect(() => {
    function handleNavigation() {
      setPathname(getCurrentPath());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  function navigate(nextPath) {
    if (nextPath === pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", nextPath);
    setPathname(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await axios.post(`${apiBaseUrl}/api/enquiries`, formData);

      setStatus({
        type: "success",
        message: "Your enquiry has been sent successfully."
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong while submitting your enquiry."
      });
    } finally {
      setSubmitting(false);
    }
  }

  const pageProps = useMemo(
    () => ({
      content,
      navigate,
      formData,
      status,
      loading,
      submitting,
      onInputChange: handleChange,
      onFormSubmit: handleSubmit
    }),
    [content, formData, loading, status, submitting]
  );

  const CurrentPage = routes[pathname] ?? NotFoundPage;

  return (
    <>
      <Layout
        content={content}
        navigate={navigate}
        pathname={pathname}
        status={status}
        loading={loading}
      >
        <CurrentPage {...pageProps} />
      </Layout>
      <FloatingContact contact={content.contact} />
    </>
  );
}

export default App;
