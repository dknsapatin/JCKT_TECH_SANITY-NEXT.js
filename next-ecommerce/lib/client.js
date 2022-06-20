import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
//Run sanity manage under "sanity_ecommerce"
export const client = sanityClient({
  projectId: "9d3ht0jq", // So Sanity knows which project to connect this wiht
  dataset: "production", // Dev or prod?
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);
// Sanity gives us access to the URLs where the images are stored

export const urlFor = (source) => builder.image(source);
