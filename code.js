        let slovar = [
        [['բարեւ'], ['hi', 'hello']],
        [['հաջողութիւն'], ['bye, goodbye']],
        [['այո'], ['yes']],
        [['վիշապ'], ['dragon']],
        [['կապիկ', ], 'monkey'],
        [['ոչ', ], 'no'],
        [['խնձոր', ], 'apple'],
        [['փիղ', ], 'elefante'],
        [['գիրք', ], 'book'],
        [['թուղթ', ], 'paper'],
        [['աշխատել'], 'work']

        ];
 
        
        let btn = document.getElementById("button_translate");
        
 
        btn.addEventListener("click", () => {
            let text = document.getElementById("text_translate").value.toLowerCase();
            let result = document.getElementById("result_translate");
            if(!text) return false;
            
            for(let i = 0; i < slovar.length; i++) {
                if (slovar[i][0].includes(text)) { 
                    result.innerHTML = slovar[i][1]; 
                    return false;
                } 
                else if (slovar[i][1].includes(text)) { 
                    result.innerHTML = slovar[i][0]; 
                    return false;
                }   
            }
            
        });
        