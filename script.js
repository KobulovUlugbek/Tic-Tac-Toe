let fields = [];

let currentShape = 'cross';

let gameOver = false;


function fillShape(id) {
    if(!fields[id] && !gameOver/* fülle dieses Feld aus und wenn nicht gameOver ist. mit ! macht man true  */){ // !fields[id] wenn etwas hier drinnen ist dann führe untere Befehle aus ansonsten nicht. ! - true !! - false
    if(currentShape == 'cross'){ // currentShape = crossga
        currentShape = 'circle'; // unda circle ga uzgaradi
        document.getElementById('player-1').classList.remove('player-inactive');
        document.getElementById('player-2').classList.add('player-inactive');
    } else { // agarda circle bulsa unda crossga uzgaradi
        currentShape = 'cross'; // <- cross
        document.getElementById('player-2').classList.remove('player-inactive');
        document.getElementById('player-1').classList.add('player-inactive');
    }

    fields[id] = currentShape;
    console.log(fields);
    draw(); // damit der Spiel immer neue ladet
    checkForWin();
}
}

function restart(){
    gameOver = false;
    fields = [];

    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');

    for(let i=1; i < 8; i++){
        document.getElementById('line-' + i).classList.add('d-none');// bei line-1 entfernt und füge dazu i hinzu
    }
    for(let i=0; i < 9; i++){
        document.getElementById('circle-' + i).classList.add('d-none');// bei line-1 entfernt und füge dazu i hinzu
        document.getElementById('cross-' + i).classList.add('d-none');// bei line-1 entfernt und füge dazu i hinzu
    }
}

function draw(){
    for(let i=0; i < fields.length; i++){
        if(fields[i] == 'circle'){ // wenn fields an der Stelle 0 == 'circle' ist dann
            document.getElementById('circle-' + i).classList.remove('d-none'); //tepada aytilgande bulsa unda; "circle-0" ni id sidagi joylashgan class = "d-none" uchirib tashla
        } //  ('circle-' + i) +i bn har bir circle id dagini tanledi

        if(fields[i] == 'cross'){ 
            document.getElementById('cross-' + i).classList.remove('d-none');
        } 
    }
}

function checkForWin(){
    let winner;

    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1.1)'; // das ist für horizontale linie
    }

    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1.1)';
    }

    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1.1)';
    }

    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1.1)';
    }

    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1.1)';
    }

    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1.1)';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1.1)'; // das ist für vertikale linie
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1.1)'; // das ist für vertikale linie
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('line-9').style.transform = 'scaleX(1.1)';
    }
    if(winner){
        console.log('GEWONNEN:', winner);
        gameOver = true;

        setTimeout(function(){ // ruft den function 1 sekunden später
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');

        }, 1000 );
    }
}