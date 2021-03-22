export const formatDate = dateString => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const nth = function (d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    }
    const d = new Date(dateString);
    const dayName = days[d.getDay()];
    const monthName = months[d.getMonth()];
    const date = d.getDate() + nth(d.getDate());
    const year = d.getFullYear();
    return `${dayName} ${date} ${monthName}, ${year}`
}