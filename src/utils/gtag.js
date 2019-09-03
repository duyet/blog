const gtagTrack = (eventCategory, eventAction, eventLabel, data) => typeof window !== 'undefined' && 'gtag' in window && window.gtag('send', 'event', eventCategory, eventAction, eventLabel, { ...data });
export default gtagTrack;
