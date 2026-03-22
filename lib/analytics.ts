type GTagFunction = (command: string, eventName: string, params?: Record<string, string>) => void;

declare global {
  interface Window {
    gtag?: GTagFunction;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
};
