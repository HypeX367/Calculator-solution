let result = document.querySelector('.result-val')

function renderValue(character){
    if (character !== 'del' && character !== 'x'){
        result.innerHTML = `${result.innerHTML}${character}`;
    } else if (character === 'del') {
        result.innerHTML = `${(result.innerHTML).slice(0,-1)}`
    } else if (character === 'x') {
        result.innerHTML = `${result.innerHTML}*`;
    }
}

function evaluateExpression(){
    try {
        result.innerHTML = eval(result.innerHTML);
    } catch {
        result.innerHTML = 'Error'
    }
}

let number = 1;
let background = document.querySelector('body').style,
    themeBackground =document.querySelector('.theme').style,
    keyBackground = document.querySelector('.container'),
    delButton = document.querySelector('.del'),
    equalTo = document.querySelector('.equalTo'),
    btn = document.querySelectorAll('button'),
    resultBackground = document.querySelector('.result'),
    res = document.querySelector('.reset'),
    scroll = document.querySelector('.scroll');

delButton.style.backgroundColor = '#A2B3E1';
equalTo.style.backgroundColor ='#FC6A5B';
res.style.backgroundColor = '#A2B3E1';

function changeTheme() {
    switch (number){
        case 1:
            background.backgroundColor = '#E6E6E6';
            document.querySelector('.scroll').style.left = '38%';
            number++;
            themeBackground.backgroundColor = 'hsl(0, 5%, 81%)';
            btn.forEach(button => {
                button.style.boxshadow = '3px 5px 0 hsl(28, 16%, 65%)';
                button.style.backgroundColor = '#E5E4E0';
            })
            equalTo.style.backgroundColor ='#FF8B38';
            keyBackground.style.backgroundColor = 'hsl(0, 5%, 81%)';
            resultBackground.style.backgroundColor = '#EEEEEE';
            delButton.style.backgroundColor = '#62B5BD';
            res.style.cssText = 'color:white;grid-column: 1 / 3;background-color:#62B5BD;box-shadow:3px 5px 0 hsl(185, 58%, 25%)';
            background.color = 'hsl(60, 10%, 19%)';
            scroll.style.backgroundColor = '#FF8B38';
            document.querySelector('.result-val').style.color = 'hsl(60, 10%, 19%)'
            break;

        case 2:
            background.backgroundColor = 'hsl(268, 75%, 9%)';
            document.querySelector('.scroll').style.left = '70%';
            number++;

            btn.forEach(button => {
                button.style.boxshadow = '3px 5px 0 hsl(28, 16%, 65%)';
                button.style.backgroundColor = '#331B4D';
                button.style.color = 'hsl(52, 100%, 62%)'
            })

            keyBackground.style.backgroundColor = '#1E0836';
            resultBackground.style.backgroundColor = '#1E0836';
            document.querySelector('html').style.color = 'hsl(52, 100%, 62%)';
            background.color = 'hsl(52, 100%, 62%)';
            document.querySelector('.result-val').style.color = 'hsl(52, 100%, 62%)'
            break;
        
        case 3:
            keyBackground.style.backgroundColor = '#252D44'
            resultBackground.style.backgroundColor = '#1E0836';
            background.backgroundColor = 'hsl(222, 26%, 31%)';
            document.querySelector('.scroll').style.left = '1px';
            number = 1;

            btn.forEach(button => {
                button.style.backgroundColor = '#E9E4DA'
                button.style.color = 'hsl(221, 14%, 31%)'
                button.style.boxshadow = '3px 5px 0 hsl(28, 16%, 65%)';
            })
            
            document.querySelector('.result-val').style.color = 'white'
            resultBackground.style.backgroundColor = '#191F32';
            delButton.style.backgroundColor = '#A2B3E1';
            equalTo.style.backgroundColor ='#FC6A5B';
            res.style.backgroundColor = '#A2B3E1';
            equalTo.style.color = 'black';
            document.querySelector('body').style.color = 'black';
            scroll.style.backgroundColor = '#C84339';
            themeBackground.backgroundColor = '#252D44';

            break;
    }  
}