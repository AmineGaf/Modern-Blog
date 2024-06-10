import { useSanityClient } from "astro-sanity";

export async function getAllPosts() {
  const client = useSanityClient();
  const query = `{
    "posts": *[_type == "post"]{
      title,
      slug,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      },
      categories[]->{
        title
      },
      "contentSections": contentSections[]{
        name,
        description
      }
    },
    "categories": *[_type == "category"]{
      title
    }
  }`;
  const data = await client.fetch(query);
  return data;
}
