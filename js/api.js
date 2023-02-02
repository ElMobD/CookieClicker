
function getScoreBoard(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = getScoreboardT;
    httpRequest.open('GET', 'https://sae-301.azurewebsites.net/get-leaderboard.php', true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send();
}

function scoreSaved(){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = scoreSavedT;
    httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    var data = JSON.stringify({"username": blaze, "score": piece});
    httpRequest.send(data);
   /* console.log(data);*/
}

//Fonction de traitement de chaque requete
function getScoreboardT(){
    let maVariable = window.localStorage.getItem('username');
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            scoreboardResponse = JSON.parse(httpRequest.responseText);
            let score_board = document.getElementById('score-board');
            let div = document.createElement('div');
            div.classList.add('class-scoreboard');
            score_board.prepend(div);
            let iterator_score = 1;
            let iterator = 0;
            for (const valeur of scoreboardResponse) {
                if(iterator % 8 === 0){
                    page = document.createElement('div');
                    page.classList.add('leader-page');
                    div.appendChild(page);
                    nbr_page++; 
                    console.log(nbr_page);
                }
                let box = document.createElement('div');
                box.classList.add('leader-box');
                page.appendChild(box);

                //Création des éléments
                let div_cpt = document.createElement('div');
                let div_user = document.createElement('div');
                let div_score = document.createElement('div');
                //Les images
                //Toutes les images
                let div_user_img1 = document.createElement('img');
                div_user_img1.classList.add('img-scoreboard');
                div_user_img1.src = "image/success-toad-rouge.png";
                let div_user_img2 = document.createElement('img');
                div_user_img2.classList.add('img-scoreboard');
                div_user_img2.src = "image/succes-luigi.png";
                let div_user_img3 = document.createElement('img');
                div_user_img3.classList.add('img-scoreboard');
                div_user_img3.src = "image/succes-toad-bleu.png";
                let div_user_img4 = document.createElement('img');
                div_user_img4.classList.add('img-scoreboard');
                div_user_img4.src = "image/succes-toad-jaune.png";
                let div_user_img5 = document.createElement('img');
                div_user_img5.classList.add('img-scoreboard');
                div_user_img5.src = "image/success-daisy.png";
                let div_user_img6 = document.createElement('img');
                div_user_img6.classList.add('img-scoreboard');
                div_user_img6.src = "image/success-mario.png";
                let div_user_img7 = document.createElement('img');
                div_user_img7.classList.add('img-scoreboard');
                div_user_img7.src = "image/success-peach.png";
                let div_user_img8 = document.createElement('img');
                div_user_img8.classList.add('img-scoreboard');
                div_user_img8.src = "image/success-toadette.png";
                let div_user_img9 = document.createElement('img');
                div_user_img9.classList.add('img-scoreboard');
                div_user_img9.src = "image/success-yoshi.png";
                //Toutes les images


                div_cpt.classList.add('divcpt');
                div_cpt.textContent = "N°"+iterator_score;
                div_user.classList.add('divuser');
                div_user.textContent = valeur.username;
                div_score.classList.add('divscore');
                div_score.textContent = valeur.score;
                box.appendChild(div_cpt);
                box.appendChild(div_user);
                box.appendChild(div_score);
                if(valeur.username === maVariable){
                    box.id = "idJoueur";
                    actu.innerHTML = iterator;
                }


                //Image donnée au hasard
                var min=1; 
                var max=9;  
                var random = Math.floor(Math.random() * (max - min)) + min; 

                if(random === 1){
                    div_user.appendChild(div_user_img1); 
                }else if(random === 2){
                    div_user.appendChild(div_user_img2);
                }else if(random === 3){
                    div_user.appendChild(div_user_img3);
                }else if(random === 4){
                    div_user.appendChild(div_user_img4);
                }else if(random === 5){
                    div_user.appendChild(div_user_img5);
                }else if(random === 6){
                    div_user.appendChild(div_user_img6);
                }else if(random === 7){
                    div_user.appendChild(div_user_img7);
                }else if(random === 8){
                    div_user.appendChild(div_user_img8);
                }else if(random === 9){
                    div_user.appendChild(div_user_img9);
                }
                //Image donnée au hasard

                total.innerHTML = nbr_page;
                iterator++;
                iterator_score++;
                                  
                if(box.id === "idJoueur"){
                    enleverActive();
                    page.classList.add('active');
                    var_actu = nbr_page;
                    actu.innerHTML = var_actu;
                }
                
            }
        }else{
            alert('Il y a eu un problème avec la requête.');
        }
    }
}
function scoreSavedT(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
       /* console.log(httpRequest.status);
        console.log(httpRequest.responseText);*/
        if (httpRequest.status === 200) {
            /*console.log("C'est bon ca passe");*/
        }
    }else{
        /*console.log("Le score n'a pas été enregistré");*/
    }
}
function enleverActive(){
    for(let i=0; i< nbr_page; i++){
        lesPages[i].classList.remove('active');
    }
}
suivant.addEventListener('click', function(){
    if(var_actu !== nbr_page){
        var_actu++;
        actu.innerHTML = var_actu;
        enleverActive();
        lesPages[var_actu - 1].classList.add('active');
    }
})
precedent.addEventListener('click', function(){
    if(var_actu !== 1){
        var_actu--;
        actu.innerHTML = var_actu;
        enleverActive();
        lesPages[var_actu - 1].classList.add('active');
    }
})
