export const formatDate = (date: string) => {
    if (!date) return;

    const formattedDate = new Date(date).toLocaleDateString();
    const localeDateArr = formattedDate.split("/");
    const rawMonth: string = localeDateArr[0];
    const rawDate: string = localeDateArr[1];
    const year: string = localeDateArr[2];

    let day;
    let month;

    switch (rawDate) {
        case "01":
            day = "01st";
            break;
        case "21":
            day = "21st";
            break;
        case "02":
            day = "02nd";
            break;
        case "22":
            day = "22nd";
            break;
        case "03":
            day = "03rd";
            break;
        default:
            day = `${rawDate}th`;
            break;
    }

    switch (rawMonth) {
        case "01":
            month = "Jan";
            break;
        case "02":
            month = "Feb";
            break;
        case "03":
            month = "March";
            break;
        case "04":
            month = "April";
            break;
        case "05":
            month = "May";
            break;
        case "06":
            month = "June";
            break;
        case "07":
            month = "July";
            break;
        case "08":
            month = "Aug";
            break;
        case "09":
            month = "Sept";
            break;
        case "10":
            month = "Oct";
            break;
        case "11":
            month = "Nov";
            break;
        case "12":
            month = "Dec";
            break;
        default:
            month = rawMonth;
            break;
    }

    return {
        formattedDate,
        day,
        month,
        year
    }
}