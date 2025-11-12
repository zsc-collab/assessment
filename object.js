let game = {
  startTime: null,
  stopTime: null,
  seconds: null,
  option: {
    once: true
  },
  displayArea: document.getElementById('display-area'),
  start: function () {
    game.displayArea.innerText = '計測中';
    game.startTime = Date.now();
  },
  stop: function() {
    document.body.addEventListener(
      'keydown',
      game.retry,
      game.option
    );
    game.stopTime = Date.now();
    game.seconds = (game.stopTime - game.startTime) / 1000;
    if (9.5 <= game.seconds && game.seconds <= 10.5) {
      game.displayArea.innerText = game.seconds + '秒でした。すごい！';
    } else {
      game.displayArea.innerText = game.seconds + '秒でした。残念。';
    }
  },
  retry: function(){
    if (confirm('リトライをしますか')){
      game.start();
      document.body.addEventListener(
        'keydown',
        game.stop,
        game.option
      );
    }
  }
}

if (confirm('OKを押して、ちょうど10秒経ったと思ったら何かキーを押してください')) {
  game.start();
  document.body.addEventListener(
    'keydown',
    game.stop,
    game.option
  );
}

//let catObj = {
//  name: [`茶マル`, `chamalu`],
//  age: 11,
//  feature: `毛並みが茶色くて、丸っこい猫です。`,
//  interests: [`食事`, `昼寝`, `夜の散歩`],
//  bio: function () {
//    document.body.append(`${catObj.name[0]} は ${catObj.age} 歳の ${catObj.feature}`);
//  },
//  greeting: function() {
//    document.body.append(`にゃおーにゃおにゃお！（${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！）`);
//  }
//}
//
//catObj.bio();
//catObj.greeting();