export const GA_TRACKING_ID = process.env.GA_ID; // This is your GA Tracking ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  (window as any)?.gtag?.('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: Gtag.EventNames,
  eventParams: Gtag.EventParams | { [key: string]: string }
) => {
  (window as any)?.gtag?.('event', action, eventParams);
};
