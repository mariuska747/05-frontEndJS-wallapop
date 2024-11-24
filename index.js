import { notificationController } from "./notifications/notifications-controller.js";
import { productsController } from "./products/products-controller.js"


document.addEventListener("DOMContentLoaded", () => {
    
    const productsHtmlNode = document.querySelector("#products-list");
    const notifHtmlNode = document.querySelector("#notifications")

    productsController(productsHtmlNode);
    const { showNotification } = notificationController(notifHtmlNode);

    productsHtmlNode.addEventListener("loading-products-error", (event) => {
        showNotification(event.detail.message, event.detail.type);
    })
})