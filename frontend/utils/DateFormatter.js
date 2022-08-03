
import moment from "moment"
export const DateFormatter =(date) => {
    return moment(date).format("MMM D, YYYY");
}