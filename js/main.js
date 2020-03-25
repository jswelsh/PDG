const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


//Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragEnd', dragEnd);

//Loop through empties and call drag events
for(cost empty of empties)

//Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}