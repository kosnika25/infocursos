export default function imageSrc(path) {
  if (!path) return "";
  // garante que o caminho comece com '/' e funciona em dev e build
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${process.env.PUBLIC_URL || ""}${p}`;
}