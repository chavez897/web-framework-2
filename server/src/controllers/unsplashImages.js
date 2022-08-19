import { createApi } from "unsplash-js";
import fetch from "node-fetch";
global.fetch = fetch;
// on your node server
const unsplash = createApi({
  accessKey: "5SKY4ruXCQCYhONfeUA2nMJQ_vMs77E_Qq8HHoEX_6w",
  //...other fetch options
});

export const unsplashImages = (page) => {
  console.log("Burup");
  return unsplash.search.getPhotos({
    query: "man faces",
    page: page,
    perPage: 30,
  });
};
