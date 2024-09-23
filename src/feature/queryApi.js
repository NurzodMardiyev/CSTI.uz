import axios from "axios";

const api = "http://backend.csti.uz";

export const csti = {
  heroSection: async () => {
    try {
      const { data } = await axios.get(`${api}/hero-section/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  news: async () => {
    try {
      const { data } = await axios.get(`${api}/news/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  gallary: async () => {
    try {
      const { data } = await axios.get(`${api}/photo-gallery/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  leaders: async () => {
    try {
      const { data } = await axios.get(`${api}/leadership/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  about: async () => {
    try {
      const { data } = await axios.get(`${api}/about/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  activity: async () => {
    try {
      const { data } = await axios.get(`${api}/activity/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  appeals: async (appeal) => {
    try {
      const { data } = await axios.post(`${api}/appeal`, appeal);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  dyjes: async () => {
    try {
      const { data } = await axios.get(`${api}/digests/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  fotogalary: async () => {
    try {
      const { data } = await axios.get(`${api}/photo-gallery/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  videogallery: async () => {
    try {
      const { data } = await axios.get(`${api}/video-gallery/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  projects: async () => {
    try {
      const { data } = await axios.get(`${api}/projects/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
  getProjectFiles: async () => {
    try {
      const { data } = await axios.get(`${api}/document/?format=json`);
      return data;
    } catch (error) {
      console.error(
        "API error:",
        error.response ? error.response.data : error.message
      );
      throw new Error(error.response ? error.response.data : error.message);
    }
  },
};
