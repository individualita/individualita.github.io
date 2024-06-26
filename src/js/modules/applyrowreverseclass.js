export function applyReverseClass (elementSelector, reverseClass) {

    const elements = document.querySelectorAll(elementSelector);

    if(!elements) {
        return 
    }

    elements.forEach((item, index) => {
        if ((index + 1) % 2 === 0) {
            item.classList.add(reverseClass);
        }
    });

};