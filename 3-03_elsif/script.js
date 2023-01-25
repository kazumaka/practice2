'use strict';

const answer = window.prompt('ヘルプを見ますか？');
if(answer === 'yes'){
  window.alert('タッチでジャンプ、障害物を避ける');
}else if(answer === 'no'){
  window.alert('ゲーム起動中');
}else{
  window.alert('yesかnoでお答えください。');
}