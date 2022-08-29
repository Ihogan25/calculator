const results = {
    'display one': document.getElementById('display-one'),
    'display two': document.getElementById('display-two')
}

const numbers = {
    one: document.getElementById('one'),
    two: document.getElementById('two'),
    three: document.getElementById('three'),
    four: document.getElementById('four'),
    five: document.getElementById('five'),
    six: document.getElementById('six'),
    seven: document.getElementById('seven'),
    eight: document.getElementById('eight'),
    nine: document.getElementById('nine'),
    decimal: document.getElementById('dot'),
    zero: document.getElementById('zero')
}

const operators = {
    divide: document.getElementById('divide'),
    multiply: document.getElementById('multiply'),
    subtract: document.getElementById('subtract'),
    plus: document.getElementById('plus'),
    equals: document.getElementById('equals')

}

const remove = {
    del: document.getElementById('delete'),
    clear: document.getElementById('clear')

}


const nums = document.querySelectorAll('#nums');
nums.forEach(num => num.addEventListener('click', function(){
    results['display two'].textContent += num.textContent;
}))

const rmBtns = document.querySelectorAll('#remove');

rmBtns.forEach(btn => btn.addEventListener('click', function(){
    if(btn.textContent == 'Clear') {
        results['display one'].textContent = '';
        results['display two'].textContent = '';
        console.log('clear')
    }
    else if(btn.textContent === 'Delete') {
         results['display one'].textContent.toString()--;
        console.log('delete')
    }
}))