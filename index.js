var i = 0;
var txt = 'CS Student at Carleton University.'
var str = ''

function typeWriter() {
    if (i < txt.length) {
        str += txt.charAt(i)
        $('#sub-title').html(str)
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = function() {
    setTimeout(() => {
        this.typeWriter()
    }, 1000);
}