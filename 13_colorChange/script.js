const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')



buttons.forEach( (button) => {
    // console.log(button);
    button.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target)
        switch (e.target.id) {
            case 'white':
                body.style.background = 'red'
                break;
            case 'gray':
                body.style.background = 'green'
                break;
            case 'blue':
                body.style.background = 'orange'
                break;
            case 'yellow':
                body.style.background = 'skyblue'
                break;
            case 'red':
                body.style.background = 'white'
                break;
        
            default:
                break;
        }
        
    })
    
})

