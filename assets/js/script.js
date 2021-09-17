document.addEventListener('DOMContentLoaded', ()=>{
    console.log('bitch lasagna it work!');

    let c = new Calculator();

    let btn = document.querySelector('button');
    btn.addEventListener('click',()=>{
        let name = btn.getAttribute('name');
        console.log(name);
        c.getKey(name);
    });
});

class Calculator{
    constructor(){
        let data_area = document.querySelector('.data');
        data_area.innerHTML='bish lasagna';
    }
    getKey(key_name){
        switch (key_name) {
            case 'clear':
                this.draw('',1);
                break;
            case 'brackets':
                this.draw('');
                break;
            case 'percentage':
                this.draw('');
                break;
            case 'slash':
                this.draw('');
                break;
            case 'moltiplicate':
                this.draw('');
                break;
            case 'minus':
                this.draw('');
                break;
            case 'more':
                this.draw('');
                break;
            case 'sign':
                this.draw('');
                break;
            case 'zero':
                this.draw('');
                break;
            case 'i_dont_care':
                this.draw('');
                break;
            case 'equal':
                this.draw('');
                break;
        
            default:
                break;
        }
    }
    draw(element,area){
        console.log('debugg1')
        if (area == 1) {
            //data-area
            document.querySelector('.data').innerHTML = element;
            console.log('debugg2')
        }
        if (area == 2) {
            //sign-area
            document.querySelector('.sign-area').innerHTML = element;
        }
    }
}