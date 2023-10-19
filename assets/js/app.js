
//nodes of tools

const create = document.getElementById('create'); 
const remove = document.getElementById('remove');
const save = document.getElementById('save');


class notes {
    constructor(title, body){

    }

}
const titleNote = document.getElementById('title');
const layoutAside = document.getElementById('layoutAside');

create.addEventListener('click', () => {
    const newnote = document.createElement('div');
    newnote.classList.add('aside__note')
    
    layoutAside.append(newnote)
    remove.addEventListener('click', () => {
        newnote.remove();
    });
});

function mostrarobjeto (e) {
    console.log(e);
}

save.addEventListener('click', mostrarobjeto)
