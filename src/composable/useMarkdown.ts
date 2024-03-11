// @ts-ignore
import showdown from "showdown";

export default async function useMarkdown(content: string) {
  const converter = new showdown.Converter();
  return await converter.makeHtml(content);
}
