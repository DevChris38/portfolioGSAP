import VitePages from "vite-plugin-pages";

export default {
  plugins: [
    VitePages({
      pagesDir: "src/",
      extensions: ["vue", "js", "html"], // ajustez les extensions en fonction de votre projet
    }),
  ],
};
