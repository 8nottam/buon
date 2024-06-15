consoleText(['Chào cậu !','Mình không biết cậu còn buồn hay không', 'Cũng không biết làm gì cho cậu vui trở lại', 'Mong cái này sẽ làm tâm trạng cậu tốt hơn', 'Khi nào tâm trạng cậu tốt hơn','thì cậu nhắn "." với mình nhé','Giờ cậu hãy nhấn vào nút bên trên đi'], 'text',['tomato','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);
    target.setAttribute('style', 'color:' + colors[0]);
  
    var currentWordIndex = 0; // Chỉ số của từ hiện tại
  
    window.setInterval(function() {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[currentWordIndex].substring(0, letterCount);
        window.setTimeout(function() {
          currentWordIndex++;
          if (currentWordIndex >= words.length) {
            // Nếu đã hoàn thành một vòng lặp của các từ
            document.getElementById('button1').classList.remove('hidden');
            return; // Dừng lại không thực hiện tiếp nữa
          }
          x = 1;
          target.setAttribute('style', 'color:' + colors[currentWordIndex % colors.length]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[currentWordIndex].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[currentWordIndex].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
  
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden';
        visible = false;
      } else {
        con.className = 'console-underscore';
        visible = true;
      }
    }, 400);
  }
  