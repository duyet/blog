import { track } from '@amplitude/analytics-browser';

const gtagTrack = (eventCategory, eventAction, eventLabel, data) => {
  // Amplitude
  track(eventAction, {
    event_category: eventCategory,
    event_action: eventAction,
    event_label: eventLabel,
    ...data
  });

  if (typeof window === 'undefined') return;
  if (!('gtag' in window)) return;
  window.gtag('event', eventAction, {
    event_category: eventCategory,
    event_label: eventLabel,
    ...data
  });

};

export default gtagTrack;
