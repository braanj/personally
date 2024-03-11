export default function useCreateLink(href: string) {
  const link = document.createElement("link");
  link.href = href;
  link.rel = "preload";
  link.as = "image";

  return link;
}
