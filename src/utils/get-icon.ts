// @flow strict
import { ICONS } from "../constants";

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case "twitter":
      icon = ICONS.TWITTER;
      break;
    case "github":
      icon = ICONS.GITHUB;
      break;
    case "vkontakte":
      icon = ICONS.VKONTAKTE;
      break;
    case "telegram":
      icon = ICONS.TELEGRAM;
      break;
    case "email":
      icon = ICONS.EMAIL;
      break;
    case "rss":
      icon = ICONS.RSS;
      break;
    case "kofi":
      icon = ICONS.KOFI;
      break;
    case "unsplash":
      icon = ICONS.UNSPLASH;
      break;
    case "rust":
      icon = ICONS.RUST;
      break;
    case "blog":
      icon = ICONS.BLOG;
      break;
    case "about":
      icon = ICONS.ABOUT;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
