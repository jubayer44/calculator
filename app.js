let display = document.getElementById('input-field');
let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
            display.value = '';
            break;
            case 'D':
                if(display.value){
                    display.value = display.value.slice(0, -1);
                }
                break;
                case '=':
                    display.value = eval(display.value);
                    break;
            default:
                display.value += e.target.innerText;
        }
    })
});