/* Work order 
0) Write tests? 
1) Basic functionality 
2) Refine and refactor 
3) Error handling 
4) Refine error handling 
5) Refine and refactor 
6) Refine project structure 
7) Refine and refactor 
8) Refine error handling 
9) commit and push
*/
const eventListenerTable = {

}

function createElement(tag, attributes = {}, ...children) {
    const element = document.createElement(tag);

    attributes.entires(attributes).forEach((key, value) => {
        let isEventFunction = (key.startsWith("on")) && typeof value === "function";
        let isStyle = typeof value === "object";

        if (isEventFunction) {
            const eventName = key.split("on")[1].toLowerCase();
            element.addEventListener(eventName, value);
        }
        else if (isStyle) {
            element.style.key = value; 
        } else {
            element.key = value;
        }
    });

    addChildren(element, ...children);

    return element;
}

function removeElement(element){
    // ensure safe removal of 
    // EVENT LISTENERS, CHILDREN,
    if(!element){
        console.warn(`Cannot remove element: ${element}`)
    } else {
        // #TODO: come up with good plan for keeping track of event listenrs
        element.event
        removeChildren(element);
        element.remove();
    }
}


function modifyElement(element,attribute, data){
    if (!element) {
        throw new ReferenceError(`Cannot modify element: ${element}`);
    } else {
        element.attribute = data;
    }
}

function addChildren(parent, ...children) {
    if (!parent || !children) {
        throw new ReferenceError(`Undefined family members provided as: Parent: ${parent}, Children: ${children}`);
    }
    if (!(parent instanceof Node)) {
        throw new TypeError(`Parent is not a DOM Node: ${parent}`);
    }
    for (const child of children) {
        if (!child) { 
            console.warn(`Cannot append undefined child node to parent: ${parent}`);
            continue;
        } else {
            parent.appendChild(child);
        }

    }
}

function removeChildren(parent){
    if (!(parent instanceof Node)) {
        console.warn(`Parent is not a DOM Node: ${parent}`);
        return;
    }

    while(parent.firstChild){
        removeElement(parent.firstChild);
    }
}