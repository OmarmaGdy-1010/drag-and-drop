let boxs = document.querySelectorAll(".box");
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let tasks = document.querySelectorAll(".task");

btn.onclick = function add(e) {
    if (inp.value) {
        e.preventDefault();
        // boxs[ 0 ].innerHTML += `
        // <p class="task" draggable="true">${ inp.value }</p>
        // `;
        let p = document.createElement('p');
        p.className = 'task';
        p.setAttribute('draggable', 'true');
        p.innerHTML = inp.value;
        p.addEventListener('dragstart', function () {
            p.className += ' draging';

        });
        p.addEventListener('dragend', function () {
            p.classList.remove("draging");
            p.style.backgroundColor = "#e699fc";
            setTimeout(() => {
                p.style.backgroundColor = "#bf99fc";
            }, 1000);
        });
        boxs[ 0 ].appendChild(p);
        inp.value = "";
    }


};




tasks.forEach(task => {

    task.addEventListener('dragstart', function () {
        task.className += ' draging';
    });
    task.addEventListener('dragend', function () {
        task.classList.remove("draging");
        task.style.backgroundColor = "#e699fc";
        setTimeout(() => {
            task.style.backgroundColor = "#bf99fc";
        }, 1000);
    });
});

boxs.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        let current = document.querySelector('.draging');
        box.appendChild(current);
    });
})



