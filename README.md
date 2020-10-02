Оригинальный, исправленный проект

A6.14 Практическое задание

 Практическое задание

Если вы читаете эти строки, то прошли весь модуль и готовы ознакомиться с главным заданием. И как всегда, это будет супер-задание!

В рамках закрепления темы про сетки, js и bootstrap предлагаем вам написать простую игру, которая будет условным тестом на реакцию.

Игра "Собери 10 зеленых квадратов"

Задача, которую вам поставил Исследовательский Институт Исследований Реакции на Зелёное состоит в том, чтобы на сетке 6x6 замерять время, за которое пользователь выбирает десять случайных элементов.

Перед вами этим проектом занимался другой программист (как это часто бывает на практике), поэтому есть некоторая заготовка, но потом он решил, что фронтенд - это совсем не его, и теперь работает таксистом. На ваши вопросы по проекту он отвечать отказывается, а существующий код работает неправильно, или плохо, или вообще не работает. К счастью, в коде остались комментарии о том, что надо ещё сделать. Комментарии двух типов:

FIXME, которые надо точно поправить, то есть эта часть функционала точно должна быть
TODO, которые улучшают опыт пользователя, но, в принципе, их можно и не делать, если готовы FIXME.
Минимальный запрос от Института - это сделать так, чтобы всё работало.

Задача максимум - это расширить функционал, чтобы можно было, помимо попаданий по зелёным квадратам, учитывать количество "промахов".

Основные правки, которые вам надо сделать, будут в js-коде, но в HTML тоже есть пара косяков. В коде также использованы конструкции, которые вы пока плохо понимаете, но вы хотите показать себя Институту как заинтересованного сотрудника и поэтому большую часть из них планируете найти в документации.

Код проекта.

utils.js

Среди лабораторных журналов вашего теперь уже бывшего коллеги вы нашли некоторую документацию по вспомогательной библиотеке, которая используется в проекте. Вот что вы из неё вынесли:

В файле utils.js определены две вспомогательные функции: getTimestamp вернёт вам число миллисекунд, которые прошли с первого января 1970 года, и, вызвав её сначала, а потом подождав каких-то действий от пользователя, вызвать снова, и по разнице прикинуть, как быстро пользователь делал те самые какие-то действия.


Вторая функция randomDivId возвращает селектор для выбора случайного дива из 36 расположенных в разметке.


На что смотреть

Также, Институт показал вам запись того, что они ожидают, и надеются, что ваше решение будет работать не хуже:



Подведем итоги

В итоге, у вас две основные задачи:

Поправить HTML и JS код так, чтобы он работал, и работал так, как ожидает Институт.
Добавить новые фичи, помеченные как TODO в файлах. Например, очень просили отдельную кнопку, которая запускает игру, и тогда уже считать время от нажатия на неё, а не от нажатия на первый из квадратиков.
В index.html используется вёрстка на сетке bootstrap, но вам никто не мешает использовать cssgrid. Главное, чтобы нужные слоты имели те же айдишники.
