import { apiSlice } from "./apiSlice";
const SERVER1_BASE_URL = "http://localhost:8000";
const SERVER2_BASE_URL = "http://localhost:3001";

const UPLOAD_URL = "/api/upload";
const SCRAPE_URL = "/api/scraper";

export const analyzeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    analyzeData: builder.mutation({
      query: (data) => ({
        url: `${SERVER1_BASE_URL}${UPLOAD_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
    scrapeReview: builder.mutation({
      query: (data) => ({
        url: `${SERVER2_BASE_URL}${SCRAPE_URL}/`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAnalyzeDataMutation, useScrapeReviewMutation } =
  analyzeApiSlice;
