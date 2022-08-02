import { toast } from "react-toastify";
import LaravelValidationParser from "./LaravelValidationParser"

const Handle422Error = (errorBag) => {
    let errors = LaravelValidationParser(errorBag);
    errors.forEach(error => {
        console.log(error)
        toast(error, {
            type: "error"
        });
    });
}

export default Handle422Error