const gtagTrack = (event, data) => typeof window !== 'undefined' && 'gtag' in window && window.gtag('event', event, { ...data });
export default gtagTrack;
