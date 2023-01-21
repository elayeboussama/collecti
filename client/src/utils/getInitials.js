export default function getInitials(string) {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[1].substring(0, 1).toUpperCase();
    }
    return initials;
};