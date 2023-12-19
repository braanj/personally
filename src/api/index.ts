import axios from "axios";

/**
 * Fetcher function for making asynchronous requests to the API.
 *
 * @param {string} route - The specific route or endpoint to be appended to the base URL.
 * @returns {Promise<any>} - A Promise that resolves to the JSON response if the request is successful.
 *                           If the request fails (non-2xx status), the Promise is rejected.
 */
export const fetcher = async (route: string) => {
  /**
   * Base URL for the API. It represents the root URL of the Nuxt.js API.
   */
  const baseUrl = import.meta.env.VITE_MEDIA_STACK_API_BASE_URL;
  const apiKey = import.meta.env.VITE_MEDIA_STACK_API_KEY as string;

  // Construct the full URL for the API request.
  const request = `${route}`;

  // Make the fetch request to the constructed URL.
  const instance = axios.create({
    baseURL: baseUrl,
  });

  const response = await instance.get(request, {
    params: {
      access_key: apiKey,
    },
  });

  if (response.status === 200) {
    return response.data;
  }
};
