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

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histogramHeight = -150;
  var step = histogramHeight / (max - 0);

  var initialX = 160;
  var initialY = 255;
  var initialName = 272;
  var initialTime = 98;
  var indent = 90;
  var barWidth = 40;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], initialX + indent * i, initialName);
      ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialTime);

    } else {
      ctx.fillStyle = 'rgba(51, 51, 255, ' + Math.random() + '0)';
      ctx.fillRect(initialX + indent * i, initialY, barWidth, times[i] * step);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], initialX + indent * i, initialName);
      ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialTime);
    }
  }
};
