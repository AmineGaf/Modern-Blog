import { useSanityClient } from 'astro-sanity';

// Function to fetch posts with optional category filtering
export async function getAllPosts(category = '') {
  const client = useSanityClient();
  // GROQ query with dynamic category filtering
  const categoryFilter = category ? `&& "${category}" in categories[]->title` : '';
  const query = `*[_type == "post" ${categoryFilter}]{
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    author->{
      name,
      image
    },
    categories[]->{
      title
    },
    contentSections
  }`;

  // Fetch filtered posts
  const posts = await client.fetch(query);

  // Fetch all categories
  const categoriesQuery = `*[_type == "category"]{title}`;
  const categories = await client.fetch(categoriesQuery);

  return { posts, categories };
}
