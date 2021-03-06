let themeDots = $('.theme-dot')
let theme = localStorage.getItem('theme')


// theme option section

function setTheme(mode){
    if(mode == 'light'){       
        $('#theme-style').attr('href', './css/style.css') 
    }

    if(mode == 'blue'){
        $('#theme-style').attr('href', './css/blue.css') 
        
    }

    if(mode == 'green'){
       $('#theme-style').attr('href', './css/green.css') 
    }

    if(mode == 'purple'){        
        $('#theme-style').attr('href', './css/purple.css')         
    }

    for (var index=0; themeDots.length > index; index++) {
        themeDots[index].addEventListener('click', function(){
            let mode = this.dataset.mode
            console.log('option clicked:', mode)
            setTheme(mode)
        }) 
    }

    localStorage.setItem('theme', mode)    
}

// Local storage section

if(theme == null) {
    setTheme('light')
}else{
    setTheme(theme)
}



