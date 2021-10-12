let coll1 = document.querySelector('#roman-view');
let coll2 = document.querySelector('#design-view');
let coll3 = document.querySelector('#kanban-view');
mouseEvents(coll1);
mouseEvents(coll2);
mouseEvents(coll3);


function mouseEvents(coll) {
    coll.addEventListener("mouseout", function () {
        this.classList.remove("active");
        let content = document.querySelector(`#${coll.id}-app`);
        content.style.maxHeight = null;
    });

    coll.addEventListener("mouseover", function () {
        this.classList.add("active");
        let content = document.querySelector(`#${coll.id}-app`);
        content.style.maxHeight = content.scrollHeight + "px";
    });
}

