export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy({"src/assets/images/favicon.ico": "favicon.ico"});
  eleventyConfig.addPassthroughCopy({"src/assets/docs": "docs"});
  eleventyConfig.addPassthroughCopy({"./src/site.webmanifest": "site.webmanifest"});
  
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};