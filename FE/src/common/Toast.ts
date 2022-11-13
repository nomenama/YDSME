import {toast} from "react-toastify";

export const ToastSuccess = (message: string) => {
    return toast.success(message, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 4000})
}

export const ToastError = () => {
    return toast.error("Error. Try again!", {position: toast.POSITION.BOTTOM_CENTER, autoClose: 4000})
}

export const ToastInfo = (message: string) => {
    return toast.info(message, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 4000})
}

export const ToastWarning = (message: string) => {
    return toast.warning(message, {position: toast.POSITION.BOTTOM_CENTER, autoClose: 4000})
}