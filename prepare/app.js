// clouser with event

function attachAddEventListener() {
    let count = 0;
    document.getElementById('click')
        .addEventListener('click', function test() {
            console.log('Button is clicked', ++count)
        })
}
attachAddEventListener();
