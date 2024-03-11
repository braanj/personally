export default function usePreloadImage(link: HTMLElement) {
  const head = document.querySelector("head");
  head?.appendChild(link);
}
