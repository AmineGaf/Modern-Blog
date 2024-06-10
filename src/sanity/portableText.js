import { portableTextToHtml } from 'astro-sanity'; 
import { urlForImage } from './urlForImage'; 


const customComponents = {
  types: {

    image: ({ value }) => `<img src="${urlForImage(value).url()}" style="max-width:100%;" />`,
    
    code: ({ value }) => `<pre><code>${value.code}</code></pre>`,
  },
};

/**
 * Function to convert Sanity Portable Text to HTML using custom components
 * @param {Array} portabletext - The Sanity Portable Text array
 * @returns {string} - The HTML string representation of the Portable Text
 */
export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
