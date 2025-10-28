function createPage() {
    // Only elements required by exercise 
    let body, content, buttons = [], scores;

    scores = createElement("div",{"id":"scoreContainer"});

    for (let i = 0; i < choices.length; i++) {
       buttons.push(createElement("button", {"class":"choice", "textContent": choices[i]}));
       // ADD EVENT LISTENERS!!:W
    }

    content = createElement("div", {}, [...scores,...buttons]);
}

setupPage();