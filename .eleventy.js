module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/assets/images");
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