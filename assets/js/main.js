(function() {
  'use strict';

  new Countdown({
    selector: '.countdown',
    msgBefore: 'Game Over!',
    msgPattern: '{days} dias, {hours} horas, {minutes} minutos e {seconds} segundos',
    dateEnd: new Date('Dec 11, 2015 22:00:00')
  });

})();