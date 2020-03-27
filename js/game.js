//объявляем переменные
const maxHits = 10;
let Hits = 1;
let Miss = 0;
let firstHitTime = 0;
let prevDiv = "";

//функция рандома
function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  return `#slot-${d}${n}`;
}

function game(hit){
  //чистим предыдущее поле
  $(prevDiv).removeClass("target").text("");
  //отмечаем поле как промах если промах
  if(!hit){$(prevDiv).addClass("miss")};
  //генерим индекс нового поля
  let divSelector = randomDivId();
  //убираем класс miss перед применением класса target к новому полю
  //поведение поля после повторного озеленения не установлено, по этому чистим
  $(divSelector).removeClass("miss");
  //применяем к нему стиль и текст
  $(divSelector).addClass("target").text(Hits);
  //сохраняем значение поля, чтобы очистить его на следующей итерации
  prevDiv = divSelector;
};

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    //при попадании на зеленое поле
    Hits += 1;
    game(true);
  }else{
    //не попал
    Miss += 1;
    game(false);
  };
  //Проверяем количество попыток
  if(Hits === maxHits){score()};
}

function score(){
  //чистим и прячем игровое поле
  $(".field-wrapper").addClass("d-none");
  //получаем разницу времени от начала до текущего момента
  let totalPlayedMillis = Date.now() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toString();
  //выводим время
  $(".time-played").text(totalPlayedSeconds);
  $(".miss-count").text(Miss);
  $(".total-score").text(10 - Miss);
  //показываем сообщение о завершении игры и счет
  $(".win-message").removeClass("d-none");
  //обновляем кнопку
  $(".btn-primary").text("Играть заново");
};

function init() {
  $(".game-field").click(handleClick);
  $(".btn-primary").click(function() {
    //сброс всего и перезапуск игры
    $(".field-wrapper").removeClass("d-none");
    $(".time-played").text("");
    $(".win-message").addClass("d-none");
    $(".game-field").removeClass("target").text("");
    $(".game-field").removeClass("miss");
    Hits = 1;
    Miss = 0;
    firstHitTime = Date.now();
    prevDiv = "";
    $(".btn-primary").text("Начать заново");
    game(true);
  });
}

$(document).ready(init);
