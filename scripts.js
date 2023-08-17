let radioLabels = [...document.querySelectorAll('label[for]')];
radioLabels.forEach(rl => {
    rl.addEventListener('keyup', e => {
        if(e.code === 'Space'){
            rl.click();
        }
    });
});