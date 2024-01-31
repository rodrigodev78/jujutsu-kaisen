let start = document.querySelector(".start");
let itadori = document.querySelector(".buttonItadori");
let megumi = document.querySelector(".buttonMegumi");
let nobara = document.querySelector(".buttonNobara");
let gojo = document.querySelector(".buttonGojo");
let meimei = document.querySelector(".buttonMeiMei");
let nanami = document.querySelector(".buttonNanami");
let toji = document.querySelector(".buttonToji");
let choso = document.querySelector(".buttonChoso");
let jogo = document.querySelector(".buttonJogo");
let kenjaku = document.querySelector(".buttonKenjaku");
let log = new Log(document.querySelector(".log"));

function addCharacter(imgSrcSelect, name, life, attack, defense, char){
    document.querySelector("#img").src = `assets/img/${imgSrcSelect}.png`;
    document.querySelector(".charInfoName").innerHTML = `${name}`;
    document.querySelector(".charInfoLife").innerHTML = `Vida: ${life}`;
    document.querySelector(".charInfoAttack").innerHTML = `Ataque: ${attack}`;
    document.querySelector(".charInfoDefense").innerHTML = `Defesa: ${defense}`;
    document.querySelector(".char_info").classList.remove("removeItens");

    document.querySelector("#battle_left").src = `assets/img/${imgSrcSelect}.png`;

    stage = new Stage(
        char,
        new Sukuna(),
        document.querySelector("#character"),
        document.querySelector("#character_sukuna")
    );
}

function addRemoveItens(){
    start.classList.toggle("removeItens");
    document.querySelector(".char_select").classList.add("removeItens");
    document.querySelector(".char_info").classList.add("removeItens");
    document.querySelector(".battle_container").classList.remove("removeItens");
    document.querySelector(".attackButton").classList.remove("removeItens");
    document.querySelector(".log_container").classList.remove("removeItens");
}

itadori.addEventListener("click", () => addCharacter(
    "itadori", "Yudi Itadori", 80, 8, 6, new Itadori()
));

megumi.addEventListener("click", () => addCharacter(
    "megumi", "Megumi Fushiguro", 70, 7, 7, new Megumi()
));

nobara.addEventListener("click", () => addCharacter(
    "nobara", "Nobara Kugisaki", 60, 7, 6, new Nobara()
));

gojo.addEventListener("click", () => addCharacter(
    "gojo", "Satoru Gojo", 160, 15, 15, new Gojo()
));

meimei.addEventListener("click", () => addCharacter(
    "meimei", "Mei Mei", 110, 14, 14, new MeiMei()
));

nanami.addEventListener("click", () => addCharacter(
    "nanami", "Kento Nanami", 110, 14, 12, new Nanami()
));

toji.addEventListener("click", () => addCharacter(
    "toji", "Toji Fushiguro", 110, 14, 12, new Toji()
));

choso.addEventListener("click", () => addCharacter(
    "choso", "Choso", 100, 12, 11, new Choso()
));

jogo.addEventListener("click", () => addCharacter(
    "jogo", "Jogo", 120, 12, 11, new Jogo()
));

kenjaku.addEventListener("click", () => addCharacter(
    "kenjaku", "kenjaku", 120, 12, 12, new Kenjaku()
));

start.addEventListener("click", () => stage.start());
start.addEventListener("click", addRemoveItens);