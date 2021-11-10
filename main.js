const divKeys = document.querySelectorAll('.key');

addEventListener('keydown', (key)=>{

    divKeys.forEach((divKey, i) => {
        if (divKey.hasAttribute('id')){

            if (divKey.hasAttribute('style')) divKey.attributes.removeNamedItem('style');

            // this variant using ternary operator
            (divKey.id === 'key') ? divKey.innerHTML = `${key.key === ' '? 'Space' : key.key}<small>event.key</small>` : '';
            (divKey.id === 'keyCode') ? divKey.innerHTML = `${key.which}<small>event.keyCode</small>` : '';
            (divKey.id === 'code') ? divKey.innerHTML = `${key.code}<small>event.code</small>` : '';

            // this variant using "if" operator
            /*if (divKey.id === 'key') divKey.innerHTML = `${key.key}<small>event.key</small>`
            if (divKey.id === 'keyCode') divKey.innerHTML = `${key.keyCode}<small>event.keyCode</small>`;
            if (divKey.id === 'code') divKey.innerHTML = `${key.code}<small>event.code</small>`;*/

        } else {
            divKeys[i].style.display = 'none';
        }
    })
})






