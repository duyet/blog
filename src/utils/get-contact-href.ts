// @flow strict
const getContactHref = (name: string, contact: string) => {
    let href;

    switch (name) {
        case "twitter":
            href = `https://www.twitter.com/${contact}`;
            break;
        case "github":
            href = `https://github.com/${contact}`;
            break;
        case "vkontakte":
            href = `https://vk.com/${contact}`;
            break;
        case "telegram":
            href = `https://t.me/${contact}`;
            break;
        case "kofi":
            href = `https://ko-fi.com/${contact}`;
            break;
        case "email":
            href = `mailto:${contact}`;
            break;
        default:
            href = contact;
            break;
    }

    return href;
};

export default getContactHref;
