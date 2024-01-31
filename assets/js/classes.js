class Character{
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;
    }

    get life(){
        return this._life;
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Itadori extends Character{
    constructor(){
        super("Yudi Itadori");
        this.life = 80;
        this.maxLife = this.life;
        this.attack = 8;
        this.defense = 6;
    }
}

class Megumi extends Character{
    constructor(){
        super("Megumi Fushiguro");
        this.life = 70;
        this.maxLife = this.life;
        this.attack = 7;
        this.defense = 7;
    }
}

class Nobara extends Character{
    constructor(){
        super("Nobara Kugisaki");
        this.life = 60;
        this.maxLife = this.life;
        this.attack = 7;
        this.defense = 6;
    }
}

class Gojo extends Character{
    constructor(){
        super("Satoru Gojo");
        this.life = 160;
        this.maxLife = this.life;
        this.attack = 15;
        this.defense = 15;
    }
}

class MeiMei extends Character{
    constructor(){
        super("Mei Mei");
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 14;
    }
}

class Nanami extends Character{
    constructor(){
        super("Kento Nanami");
        this.life = 90;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 12;
    }
}

class Toji extends Character{
    constructor(){
        super("Toji Fushiguro");
        this.life = 110;
        this.maxLife = this.life;
        this.attack = 14;
        this.defense = 12;
    }
}

class Choso extends Character{
    constructor(){
        super("Choso");
        this.life = 100;
        this.maxLife = this.life;
        this.attack = 12;
        this.defense = 11;
    }
}

class Jogo extends Character{
    constructor(){
        super("Jogo");
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 12;
        this.defense = 11;
    }
}

class Kenjaku extends Character{
    constructor(){
        super("Kenjaku");
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 12;
        this.defense = 12;
    }
}

class Sukuna extends Character{
    constructor(){
        super("Ryomen Sukuna");
        this.life = 200;
        this.maxLife = this.life;
        this.attack = 7;
        this.defense = 7;
    }
}

class Stage{
    constructor(char1, char2, char1Element, char2Element, logObj){
        this.char1 = char1;
        this.char2 = char2;
        this.char1Element = char1Element;
        this.char2Element = char2Element;
        this.log = logObj;
    }

    start(){
        this.update();

        log.addMessage("Jogo Iniciado");

        document.querySelector(".attackButton").addEventListener("click", () => this.doAttack(this.char1, this.char2));
        document.querySelector(".attackButton").addEventListener("click", () => this.sukunaAttack(this.char2, this.char1));
    }

    update(){
        this.char1Element.querySelector(".char_name").innerHTML = this.char1.name;
        let char1Pct = (this.char1.life / this.char1.maxLife) * 100;
        this.char1Element.querySelector(".char_bar").style.width = `${char1Pct}%`;

        this.char2Element.querySelector(".char_name").innerHTML = this.char2.name;
        let char2Pct = (this.char2.life / this.char2.maxLife) * 100;
        this.char2Element.querySelector(".char_bar").style.width = `${char2Pct}%`;
    }

    doAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            if(attacking.life <= 0){
                confirm(` O lutador ${attacked.name} ganhou`);
                log.addMessage(`<img src="assets/img/trofeu.png"> O lutador ${attacked.name} ganhou`);
                return;
            }else if(attacked.life <= 0){
                confirm(`O lutador ${attacking.name} ganhou`);
                log.addMessage(`<img src="assets/img/trofeu.png"> O lutador ${attacking.name} ganhou`);
                return;
            }

            return;
        }

        let factorAttack = (Math.random() * 2).toFixed(2);
        let factorDefense = (Math.random() * 2).toFixed(2);

        let actualAttack = attacking.attack * factorAttack;
        let actualDefense = attacked.defense * factorDefense;

        if(actualAttack > actualDefense){
            attacked.life -= actualAttack;
            log.addMessage(`<img src="assets/img/espadas.png"> ${attacking.name} atacou e causou dano de ${actualAttack}`);
        } else{
            log.addMessage(`<img src="assets/img/lutar.png"> ${attacked.name} conseguiu defender...`);
        }

        this.update();
    }

    sukunaAttack(attacking, attacked){
        if(attacking.life <= 0 || attacked.life <= 0){
            return;
        }

        let sukunaFactorAttack = (Math.random() * 2).toFixed(2);
        let sukunaFactorDefense = (Math.random() * 2).toFixed(2);

        let sukunaActualAttack = attacking.attack * sukunaFactorAttack;
        let sukunaActualDefense = attacked.defense * sukunaFactorDefense;

        if(sukunaActualAttack > sukunaActualDefense){
            attacked.life -= sukunaActualAttack;
            log.addMessage(`<img src="assets/img/espadas.png"> ${attacking.name} atacou e causou dano de ${sukunaActualAttack}`);
        } else{
            log.addMessage(`<img src="assets/img/lutar.png"> ${attacked.name} conseguiu defender...`);
        }

        this.update();
    }
}

class Log{
    list = [];

    constructor(listEl){
        this.listEl = listEl;
    }

    addMessage(msg){
        this.list.unshift(msg);
        this.render();
    }

    render(){
        this.listEl.innerHTML = "";

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`;
        }
    }
}