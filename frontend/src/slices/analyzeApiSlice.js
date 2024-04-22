import { apiSlice } from "./apiSlice";
const UPLOAD_URL = "/api/upload";
const SCRAPE_URL = "/api/scrape";

export const analyzeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    analyzeData: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}/`, // hit this url on backend
        method: "POST",
        body: data,
      }),
    }),
    scrapeReview: builder.mutation({
      query: (data) => ({
        url: `${SCRAPE_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAnalyzeDataMutation, useScrapeReviewMutation } =
  analyzeApiSlice;
