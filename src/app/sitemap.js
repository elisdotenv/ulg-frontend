import axios from 'axios';

export default async function sitemap() {
  const API_URL = 'https://tranquil-morning-50f1598ff6.strapiapp.com/api/posts?populate=*';

  try {
    const response = await axios.get(API_URL);
    const { data } = response.data;

    // Create entries for the sitemap
    const postEntries = data
      .map(({ id, attributes }) => {
        // Get categories associated with the post
        const categories = attributes.categories.data.map((category) => category.attributes.NavigationItem);

        // Create an array of URLs for each category
        const categoryUrls = categories.map((category) => ({
          url: `https://www.uptown-lobby.com/${category.toLowerCase()}/${attributes.slug}`,
          lastModified: new Date(attributes.updatedAt), // Adding last modified date
        }));

        return categoryUrls;
      })
      .flat(); // Flatten the array of arrays

    // Return the main URL and all post entries
    return [{ url: 'https://www.uptown-lobby.com' }, ...postEntries];
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error);
    return [{ url: 'https://www.uptown-lobby.com' }]; // Fallback to main URL if there is an error
  }
}
