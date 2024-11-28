
export function customErrorEvent(event, error, targetHtmlElement){
    const customEvent = new CustomEvent(event, {
        detail: {
            message: error.message,
            type: "error"
        }
    })
    targetHtmlElement.dispatchEvent(customEvent)
}

export function toggleElement(targetHtmlElement, classChange){
    targetHtmlElement.classList.toggle(classChange);
}