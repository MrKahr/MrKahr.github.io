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

export { createElement, registerListener, deregisterListener, addChildren, removeChildren };

const eventListenerTable = new Map();

function registerListener(element, type, callbackfn) {
    if (eventListenerTable[element][type]) {
        console.warn(`Listener is already defined in table of type ${element}`);
        return;
    } else if (!(element instanceof Node)) {
        console.warn(`Cannot register listener to element that is not a node`);
        return;
    } else if (!callbackfn instanceof Function) {
        console.warn(`Cannot register invalid function to element. Function given as: ${callbackfn}`);
        return;
    } else {
        element.addEventListener(type, callbackfn);
        eventListenerTable.set(element, { type: callbackfn });
    }
}

function deregisterListener(element, type) {
    let listeners = eventListenerTable[element];
    if (!listeners) {
        console.warn(`Listeners not defined on: ${element}`);
        return;
    }
    element.removeEventListener(listener[type]);
    eventListenerTable.delete(element);
}

function createElement(tag, className = "", attributes = {}, ...children) {
    const element = document.createElement(tag);
    if (className) {
        element.classList.add(className);
    }


    Object.entries(attributes).forEach(([key, value]) => {
        let isEventFunction = key === "listeners" && typeof value === "object";
        let isStyle = key === "style" && typeof value === "object";
        let isproperties = key === "properties" && typeof value === "object";


        if (isEventFunction) {
            Object.entries(value).forEach(([listenerkey, listenertvalue]) => {
                const eventName = listenerkey.split("on")[1].toLowerCase();
                element.addEventListener(eventName, listenertvalue);
            });
        }
        else if (isStyle) {
            Object.entries(value).forEach(([stylekey, stylevalue]) => {
                element.style[stylekey] = stylevalue;
            });
        } else if (isproperties) {
            Object.entries(value).forEach(([propertykey, propertyvalue]) => {
                element[propertykey] = propertyvalue;
            });
        } else {
            element[key] = value;
        }
    });

    addChildren(element, ...children);

    return element;
}

function removeElement(element) {
    let registerEntry = eventListenerTable.get(element);
    if (!element) {
        console.warn(`Cannot remove element: ${element}`);
    } else if(registerEntry){
        for (listener of registerEntry)
            deregisterListener(element, listener[type]);
    }
    removeChildren(element);
    element.remove();
}



function modifyElement(element, attribute, data) {
    if (!element) {
        throw new ReferenceError(`Cannot modify element: ${element}`);
    } else {
        element.attribute = data;
    }
}

function addChildren(parent, children) {
    if (!parent || !children) {
        throw new ReferenceError(`Undefined family members provided as: Parent: ${parent}, Children: ${children}`);
    }
    if (!(parent instanceof Node)) {
        throw new TypeError(`Parent is not a DOM Node: ${parent}`);
    }
    for (const child of children) {
        if (!(child instanceof Node)) {
            console.warn(`Cannot append undefined child node to parent: ${parent}`);
            continue;
        } else {
            parent.appendChild(child);
        }

    }
}

function removeChildren(parent) {
    if (!(parent instanceof Node)) {
        console.warn(`Parent is not a DOM Node: ${parent}`);
        return;
    }

    while (parent.firstChild) {
        removeElement(parent.firstChild);
    }
}