function verifPseudo(){
    bo_achat1.addEventListener('mouseenter', (event) => {

            
        
            popup = document.createElement('div');
            popup.classList.add('popup');
            popup.textContent = "La fleur de feu vous permet d'augmenter vos clique de 10 points à chaque achats. Cout : " + bonus1_price;
            popup.style.top = event.pageY + "px";
            popup.style.left = event.pageX + "px";
            document.body.appendChild(popup);


    });   
    bo_achat1.addEventListener('mouseleave', () => {
        popup.style.visibility = 'hidden';
        popup.remove();
    });
    bo_achat2.addEventListener('mouseenter', (event) => {
        popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = "La boule de feu vous permet d'augmenter de 10 points, le nombre de pièce par seconde. Cout : " + bonus2_price;
        popup.style.top = event.pageY + "px";
        popup.style.left = event.pageX + "px";
        document.body.appendChild(popup);
    });   
    bo_achat2.addEventListener('mouseleave', () => {
        popup.style.visibility = 'hidden';
        popup.remove();
    });
    bo_achat3.addEventListener('mouseenter', (event) => {
        popup = document.createElement('div');
        popup.classList.add('popup');
        popup.textContent = "L'étoile vous permet d'augmenter vos points automatique et manuelle de 1000. Cout : " + bonus3_price;
        popup.style.top = event.pageY + "px";
        popup.style.left = event.pageX + "px";
        document.body.appendChild(popup);
    });   
    bo_achat3.addEventListener('mouseleave', () => {
        popup.style.visibility = 'hidden';
        popup.remove();
    });
    userName = window.localStorage.getItem('username');
    userScore = window.localStorage.getItem('userscore');
    userBonusPrice1 = window.localStorage.getItem('userprice1');
    userBonusCpt1 = window.localStorage.getItem('userbonuscpt1');
    userBonusPrice2 = window.localStorage.getItem('userprice2');
    userBonusCpt2 = window.localStorage.getItem('userbonuscpt2');
    userBonusPrice3 = window.localStorage.getItem('userprice3');
    userBonusCpt3 = window.localStorage.getItem('userbonuscpt3');
    userHighScore = window.localStorage.getItem('highScore');
    userHighClick = window.localStorage.getItem('highClick');
    userHighMoneySpend = window.localStorage.getItem('highMoneySpend');
    userHighMoneyMoney = window.localStorage.getItem('highMoney');
    userClick = window.localStorage.getItem('click');
    userTime = window.localStorage.getItem('ajouttemps');
    userOk1 =  window.localStorage.getItem('success1');
    userOk2 =  window.localStorage.getItem('success2');
    userOk3 =  window.localStorage.getItem('success3');
    userOk4 =  window.localStorage.getItem('success4');
    userScoreTest = parseInt(userScore);
    userBonusPrice1 = parseInt(userBonusPrice1);
    userBonusCpt1 = parseInt(userBonusCpt1);
    userBonusPrice2 = parseInt(userBonusPrice2);
    userBonusCpt2 = parseInt(userBonusCpt2);
    userBonusPrice3 = parseInt(userBonusPrice3);
    userBonusCpt3 = parseInt(userBonusCpt3);
    userHighScore = parseInt(userHighScore);
    userHighClick = parseInt(userHighClick);
    userHighMoneySpend = parseInt(userHighMoneySpend);
    userHighMoneyMoney = parseInt(userHighMoneyMoney);
    userClick = parseInt(userClick);
    userTime = parseInt(userTime);
    if (userName === null){
        
    }else{
        blaze = userName;
        piece = userScoreTest;
        bonus1_price = userBonusPrice1;
        bonus1_cpt = userBonusCpt1;
        bonus2_price = userBonusPrice2;
        bonus2_cpt = userBonusCpt2;
        bonus3_price = userBonusPrice3;
        bonus3_cpt = userBonusCpt3;
        highScore = userHighScore;
        highClick = userHighClick;
        highMoneySpend = userHighMoneySpend;
        highMoneyMoney = userHighMoneyMoney;
        click = userClick;
        ajout_temps = userTime;
        if(userOk1 === null){
            ok1 = false;
        }else{
            ok1 = userOk1;
        }
        if(userOk2 === null){
            ok2 = false;
        }else{
            ok2 = userOk2;
        }
        if(userOk3 === null){
            ok3 = false;
        }else{
            ok3 = userOk3;
        }
        if(userOk4 === null){
            ok4 = false;
        }else{
            ok4 = userOk4;
        }
        goToClicker();
        score.innerHTML = piece;
        cpt1.innerHTML = bonus1_cpt;
        price1.innerHTML = bonus1_price;
        cpt2.innerHTML = bonus2_cpt;
        price2.innerHTML = bonus2_price;
        cpt3.innerHTML = bonus3_cpt;
        price3.innerHTML = bonus3_price;
        pseudo_setting.innerHTML = blaze;
        allMoneySpend.innerHTML = highMoneySpend;
        allMoney.innerHTML = highMoneyMoney;
    }
}
function entry(){
    boulet.classList.add('bullet');
    blaze = champ.value;
    if(champ.value === ""){ 
        boulet.classList.remove('bullet');
    }
}
function surEntry(){
    document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter'){
            if(champ.value === ""){
                alert('Veuillez entrez un pseudo');
            }else if(champ.value.length < 5){
                alert("Veuillez entrez un pseudo d'au moins 5 caractères");
            }else{
                goToClicker();
            }
        }
      });
}
function goToClicker(){
    sous_accueil.classList.add('bullet-go'); 
    accueil.classList.add('accueil-go');
    //Stockage du nom du joueur
    window.localStorage.setItem('username',blaze);
    score.innerHTML = piece;
    cpt1.innerHTML = bonus1_cpt;
        price1.innerHTML = bonus1_price;
        cpt2.innerHTML = bonus2_cpt;
        price2.innerHTML = bonus2_price;
        cpt3.innerHTML = bonus3_cpt;
        price3.innerHTML = bonus3_price;
        pseudo_setting.innerHTML = blaze;
        allScore.innerHTML = highScore;
        allClic.innerHTML = highClick;
        allMoneySpend.innerHTML = highMoneySpend;
    toad.classList.add('infinite');


    maFonctionSeconde = setInterval(seconde, 1000);
    setInterval(() => {
        verifAchat();
    }, 100);

    setTimeout(() => {
        clicker.classList.add('clicker-start');
    }, 250);

    setTimeout(() => {
        userScore = localStorage.getItem('userscore'); 
        seconde();
     }, 200);

     setInterval(()=>{
        scoreSaved();
        console.clear();
     }, 2000)
}
function animeclick(event){
    clickToad();
    highClick++;
    allClic.innerHTML = highClick;
    if(event.srcElement.classList.contains("champiclick") === true )
    {

    }
    else if(event.srcElement.classList.contains("champiclick") === false )
    {
        if(event.srcElement.classList.contains("infinite") === true){
            event.srcElement.classList.remove('infinite');
        }
        event.srcElement.classList.add('champiclick');

        //Création de petit champignon lorsque le toad est cliqué
        const petitChampi = document.createElement('img');
        petitChampi.src = "image/piece.png";
        petitChampi.classList.add('mini-champi');
        document.body.appendChild(petitChampi);
        petitChampi.style.top = event.pageY - 20 + "px";
        petitChampi.style.left = event.pageX - 15 + "px";
        petitChampi.classList.add('mini-champi-anim');
        setTimeout(() => {
            event.srcElement.classList.remove('champiclick');
            event.srcElement.classList.add('infinite');
         }, 130);
         setTimeout(() => {
            petitChampi.remove();
         }, 750);
    }
}
function seconde(){     
        temps++;
        piece = piece + ajout_temps;
        highMoneyMoney = highMoneyMoney + ajout_temps;
        allMoney.innerHTML = highMoneyMoney;
        window.localStorage.setItem('highMoney', highMoneyMoney);
        score.innerHTML = piece;
        //Stockage du score du joueur
        window.localStorage.setItem('userscore', piece);
        //Stockage des variables associés aux joueurs
        window.localStorage.setItem('userprice1', bonus1_price);
        window.localStorage.setItem('userbonuscpt1', bonus1_cpt);
        window.localStorage.setItem('userprice2', bonus2_price);
        window.localStorage.setItem('userbonuscpt2', bonus2_cpt);
        window.localStorage.setItem('userprice3', bonus3_price);
        window.localStorage.setItem('userbonuscpt3', bonus3_cpt);
        window.localStorage.setItem('click', click);
        window.localStorage.setItem('ajouttemps', ajout_temps);
        window.localStorage.setItem('highScore', highScore);
        window.localStorage.setItem('highClick', highClick);
        window.localStorage.setItem('highMoneySpend', highMoneySpend);
        verifSucces();
        if(restartProof  === true ){
            clearInterval(maFonctionSeconde);
            trueRestart();
            variableZero();
            restartProof = false;
        }
        
        if(piece > highScore){
            highScore = piece;
            allScore.innerHTML = highScore;
        }


        if(piece >= 10){
            if(ok1 === false){
                succes2.classList.add('success-anim');
                ok1 = true;
                window.localStorage.setItem('success1', ok1);
            setTimeout(() => {
                succes2.classList.remove('success-anim');
                succes2.classList.add('ontevoitpas');
            }, 5000);
            }else{
                
            }
        }
        if(piece >= 100){
            if(ok2 === false){
                succes3.classList.add('success-anim');
                ok2 = true;
                window.localStorage.setItem('success2', ok2);
            setTimeout(() => {
                succes3.classList.remove('success-anim');
                succes3.classList.add('ontevoitpas');
            }, 5000);
            }else{
                
            }
        }
        if(piece >= 100000){
            if(ok3 === false){
                ok3 = true;
                succes4.classList.add('success-anim');
                window.localStorage.setItem('success3', ok3);
            setTimeout(() => {
                succes4.classList.remove('success-anim');
                succes4.classList.add('ontevoitpas');
            }, 5000);
            }else{
                 
            }
        }
}

function clickToad(){
    piece = piece + click;
    score.innerHTML = piece;
    highMoneyMoney = highMoneyMoney + click;
    allMoney.innerHTML = highMoneyMoney;
    window.localStorage.setItem('highMoney', highMoneyMoney);
}
function bonusToggle(){
    bonus_card.classList.toggle('bonus-visible');                          
}
function achatClicked1(){
    if(piece >= bonus1_price){
        piece = piece - bonus1_price;
        highMoneySpend = highMoneySpend + bonus1_price;
        allMoneySpend.innerHTML = highMoneySpend;
        window.localStorage.setItem('highMoneySpend', highMoneySpend);
        bonus1_price = Math.round(bonus1_price * 1.5);
        Math.round(bonus1_price);
        bonus1_cpt++;
        if(click === 1){
            click = click + 9;
        }else{
            click = click + 10;
        }
        cpt1.innerHTML = bonus1_cpt;
        price1.innerHTML = bonus1_price;
        score.innerHTML = piece;
    }

    if(bonus2_cpt >= 1){

    }else{
        if(bonus3_cpt >= 1){

        }else{
            if(bonus1_cpt === 1){
                succes1.classList.add('success-anim');
                ok4 = true;
                window.localStorage.setItem('success4', ok4);
                setTimeout(() => {
                    succes1.classList.remove('success-anim');
                    succes1.classList.add('ontevoitpas');
                }, 5000);
            }
        }
    }
}
function achatClicked2(){
    if(piece >= bonus2_price){
        piece = piece - bonus2_price;
        highMoneySpend = highMoneySpend + bonus2_price;
        allMoneySpend.innerHTML = highMoneySpend;
        window.localStorage.setItem('highMoneySpend', highMoneySpend);
        bonus2_price = Math.round(bonus2_price * 1.5);
        Math.round(bonus2_price);
        bonus2_cpt++;
        if(ajout_temps === 1){
            ajout_temps = ajout_temps + 9;
        }else{
            ajout_temps = ajout_temps + 10;
        }
        cpt2.innerHTML = bonus2_cpt;
        price2.innerHTML = bonus2_price;
        score.innerHTML = piece;
    }


    if(bonus1_cpt >= 1){

    }else{
        if(bonus3_cpt >=1){

        }else{
            if(bonus2_cpt === 1){
                succes1.classList.add('success-anim');
                ok4 = true;
                window.localStorage.setItem('success4', ok4);
                setTimeout(() => {
                    succes1.classList.remove('success-anim');
                    succes1.classList.add('ontevoitpas');
                }, 5000);
            }
        }
    }
        
}
function achatClicked3(){
    if(piece >= bonus3_price){
        piece = piece - bonus3_price;
        highMoneySpend = highMoneySpend + bonus3_price;
        allMoneySpend.innerHTML = highMoneySpend;
        window.localStorage.setItem('highMoneySpend', highMoneySpend);
        bonus3_price = Math.round(bonus3_price * 3);
        Math.round(bonus3_price);
        bonus3_cpt++;
        if(ajout_temps === 1){
            ajout_temps = ajout_temps + 999;
            if(click === 1){
                click = click + 999;
            }else{
                click = click + 1000;
            }
        }else{
            ajout_temps = 1000;
            if(click === 1){
                click = click + 999;
            }else{
                click = click + 1000;
            }
        }
        cpt3.innerHTML = bonus3_cpt;
        price3.innerHTML = bonus3_price;
        score.innerHTML = piece;
    }
    if(bonus1_cpt >= 1){

    }else{
        if(bonus2_cpt >=1){

        }else{
            if(bonus3_cpt === 1){
                succes1.classList.add('success-anim');
                ok4 = true;
                window.localStorage.setItem('success4', ok4);
                setTimeout(() => {
                    succes1.classList.remove('success-anim');
                    succes1.classList.add('ontevoitpas');
                }, 5000);
            }
        }
    }
}
function verifAchat(){
    if(piece >= bonus1_price ){
        bo_achat1.classList.add('possible');
    }else{
        bo_achat1.classList.remove('possible');
    }
    if(piece >= bonus2_price){
        bo_achat2.classList.add('possible');
    }else{
        bo_achat2.classList.remove('possible');
    }
    if(piece >= bonus3_price){
        bo_achat3.classList.add('possible');
    }else{
        bo_achat3.classList.remove('possible');
    }
}
function verifSucces(){
    if(ok1 === true || ok1 === 'true'){
        suc1.classList.add('possible');
    }else{
        suc1.classList.remove('possible');
    }
    if(ok2 === true || ok2 === 'true'){
        suc2.classList.add('possible');
    }else{
        suc2.classList.remove('possible');
    }
    if(ok3 === true || ok3 === 'true'){
        suc3.classList.add('possible');
    }else{
        suc3.classList.remove('possible');
    }
    if(ok4 === true || ok4 === 'true'){
        suc4.classList.add('possible');
    }else{
        suc4.classList.remove('possible');
    }
}
function checkWindowWidth() {
    
    if (window.innerWidth <= 576) {
        bgVideo.style.visibility = "hidden";
        clicker.style.backgroundImage = "url(./image/test.png)";
        if(bonus_card.classList.contains("bonus-visible")){
            scoreboard_html.classList.add('ontevoitpas');
            settings.classList.add('ontevoitpas');
        }else{
            scoreboard_html.classList.remove('ontevoitpas');
            settings.classList.remove('ontevoitpas');
        }
        
    }else if(window.innerWidth >= 576){
        bgVideo.style.visibility = "visible";
        scoreboard_html.classList.remove('ontevoitpas');
        settings.classList.remove('ontevoitpas');
    }
}
setInterval(checkWindowWidth, 200); 

function settingOpen(){
    id_card_setting.classList.add('ontevoit');
    id_img_setting.classList.add('ontevoitpas');
}
function settingClose(){
    id_card_setting.classList.remove('ontevoit');
    id_img_setting.classList.remove('ontevoitpas');
}
function addActiveSkin(event){
    removeActiveSkin();
    desactiveSkin();
    event.srcElement.classList.add('active-skin');
    if(event.srcElement.id === "cyan"){
        skinCyan.classList.remove('ontevoitpas');
        skinCyan.classList.add('ontevoit');
        skinCyan.classList.add('infinite');
    }else if(event.srcElement.id === "rose"){
        skinRose.classList.remove('ontevoitpas');
        skinRose.classList.add('ontevoit');
        skinRose.classList.add('infinite');
    }else if(event.srcElement.id === "bee"){
        skinBee.classList.remove('ontevoitpas');
        skinBee.classList.add('ontevoit');
        skinBee.classList.add('infinite');
    }else if(event.srcElement.id === "gold"){
        skinOr.classList.remove('ontevoitpas');
        skinOr.classList.add('ontevoit');
        skinOr.classList.add('infinite');
    }else if(event.srcElement.id === "rouge"){
        skinRouge.classList.remove('ontevoitpas');
        skinRouge.classList.add('ontevoit');
        skinRouge.classList.add('infinite');
    }
}

function removeActiveSkin(){
    for(let i = 0; i < skin_img.length; i++){
        skin_img[i].classList.remove('active-skin');
    }
}
function desactiveSkin(){
    for(let i = 0; i < champiSkin.length; i++){
        champiSkin[i].classList.remove('ontevoit');
        champiSkin[i].classList.add('ontevoitpas');
    }
}
function succes(){
    if(bonus1_cpt === 1){
        succes1.classList.add('success-anim');
    }else if(bonus2_cpt === 1){
        succes1.classList.add('success-anim');
    }else if(bonus3_cpt === 1){
        succes1.classList.add('success-anim');
    }
}    
function closeSuccess(){
    succes1.classList.remove('success-anim');
    succes2.classList.remove('success-anim');
    succes3.classList.remove('success-anim');
}
function restartGame(){
    restartProof = true;
    settingClose();
}
function trueRestart(){
    accueil.classList.remove('accueil-go');
    sous_accueil.classList.remove('bullet-go'); 
    userName = window.localStorage.removeItem('username');
    userScore = window.localStorage.removeItem('userscore');
    userBonusPrice1 = window.localStorage.removeItem('userprice1');
    userBonusCpt1 = window.localStorage.removeItem('userbonuscpt1');
    userBonusPrice2 = window.localStorage.removeItem('userprice2');
    userBonusCpt2 = window.localStorage.removeItem('userbonuscpt2');
    userBonusPrice3 = window.localStorage.removeItem('userprice3');
    userBonusCpt3 = window.localStorage.removeItem('userbonuscpt3');
    userHighScore = window.localStorage.removeItem('highScore');
    userHighClick = window.localStorage.removeItem('highClick');
    userHighMoneySpend = window.localStorage.removeItem('highMoneySpend');
    userHighMoneyMoney = window.localStorage.removeItem('highMoney');
    userClick = window.localStorage.removeItem('click');
    userTime = window.localStorage.removeItem('ajouttemps');
    userOk1 =  window.localStorage.removeItem('success1');
    userOk2 =  window.localStorage.removeItem('success2');
    userOk3 =  window.localStorage.removeItem('success3');
    userOk4 =  window.localStorage.removeItem('success4');
}
function variableZero(){
    bonus1_price = 100;
    bonus2_price = 100;
    bonus3_price = 10000;
    bonus1_cpt = 0;
    bonus2_cpt = 0;
    bonus3_cpt = 0;
    piece = 0;
    highScore = 0;
    highClick = 0;
    highMoneySpend = 0;
    highMoneyMoney = 0;
    temps = 0;
    ajout_temps = 1;
    click = 1;
    ok1 = false;
    ok2 = false;
    ok3 = false; 
    ok4 = false;
}
function explication(event){
    const explain = document.createElement('div');
    explain.classList.add('explication');
    explain.style.left = event.pageX + "px";
    explain.style.top = event.pageY + "px";
    document.body.appendChild(explain);
}
