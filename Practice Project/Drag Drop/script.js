const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', function () {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
});

fill.addEventListener('dragend', function () {
    this.className = 'fill';
});

for (const empty of empties) {
    empty.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    empty.addEventListener('dragenter', function (e) {
        e.preventDefault();
        this.className += ' hovered';
    });

    empty.addEventListener('dragleave', function () {
        this.className = 'empty';
    });

    empty.addEventListener('drop', function () {
        // this.className = 'empty';
        this.append(fill);
    });
}
