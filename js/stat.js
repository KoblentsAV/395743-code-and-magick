'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = 'white';
  ctx.fillRect(100, 10, 420, 270);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура, Вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 65);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = -150; // px
  var step = histogramHeight / (max - 0); // px

  ctx.fillText('Худшее время: ' + Math.floor(max) + 'мс у игрока ' + names[maxIndex], 120, 90);

  var initialX = 180; // px
  var initialY = 275; // px
  var initialName = 115; // px
  var indent = 70; // px
  var barWidth = 50; // px

  for (i = 0; i < times.length; i++) {
    ctx.fillStyle = 'green';
    ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
    ctx.fillText(names[i], initialX + indent * i, initialName);
  }
};
