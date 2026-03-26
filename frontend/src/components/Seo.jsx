import { useEffect } from "react";

const DEFAULT_TITLE = "Tender Management Portal";
const DEFAULT_DESCRIPTION =
  "Tender Management Portal for user registration, secure login, tender submission, and report management.";

function ensureMetaTag(name, attribute = "name") {
  let meta = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  return meta;
}

function Seo({ title, description, robots = "noindex, nofollow" }) {
  useEffect(() => {
    document.title = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    ensureMetaTag("description").setAttribute(
      "content",
      description || DEFAULT_DESCRIPTION
    );
    ensureMetaTag("robots").setAttribute("content", robots);
  }, [description, robots, title]);

  return null;
}

export default Seo;
