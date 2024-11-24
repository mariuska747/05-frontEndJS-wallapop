import { paintNotification } from "./notifications-view.js"

export function notificationController(notifHtmlNode){
    const showNotification = (message, type = "success") => {
        notifHtmlNode.innerHTML = paintNotification(message, type);
    }
    return {
        showNotification
    }
}