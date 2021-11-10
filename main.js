const insert = document.querySelector('.insert');

addEventListener('keydown', (key)=>{
    insert.innerHTML = ` <div class="key" id="key">
            ${key.key === ' '? 'Space' : key.key}
            <small>event.key</small>
        </div>
        <div class="key" id="keyCode" >
            ${key.keyCode}
            <small>event.keyCode</small>
        </div>
        <div class="key" id="code" >
            ${key.code}
            <small>event.code</small>
        </div>`
})






