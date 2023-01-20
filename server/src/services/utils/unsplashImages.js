import { createApi } from "unsplash-js";
import fetch from "node-fetch";
import dotenv from "dotenv";
global.fetch = fetch;
dotenv.config();
// on your node server
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const unsplashImages = (page) => {
  return unsplash.search.getPhotos({
    query: "man faces",
    page: page,
    perPage: process.env.RANDOM_TUTORS_NUMBER,
  });
};
