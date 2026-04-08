/** Google sample test publisher; set NEXT_PUBLIC_ADSENSE_CLIENT_ID for production. */
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? "ca-pub-3946412746626275";

/** Sample display slot for the test client; set NEXT_PUBLIC_ADSENSE_SLOT to your ad unit id. */
export const ADSENSE_DEFAULT_SLOT =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT ?? "1234567890";
