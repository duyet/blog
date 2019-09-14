---
template: post
title: Hướng dẫn viết game Flappy Bird bằng HTML5 - Phần 1
date: '2014-03-01T13:27:00.000+07:00'
category: Javascript
tags:
- javascript
- game
- html5
- tuts
modified_time: '2014-03-01T19:39:17.646+07:00'
thumbnail: https://1.bp.blogspot.com/-jDgau6eVkS4/UxF1Q_4cgoI/AAAAAAAAGW8/rrpNzbFGmUg/s1600/FB-1.png
blogger_id: tag:blogger.com,1999:blog-3454518094181460838.post-6041420516393550072
blogger_orig_url: https://blog.duyet.net/2014/02/huong-dan-viet-game-flappy-bird-bang.html
slug: /2014/02/huong-dan-viet-game-flappy-bird-bang.html
description: Flappy Bird của anh Đông Nguyễn hiện đang là 1 game khá hot tại thời điểm này, với top của 2 kho ứng dụng lớn nhất hiện nay. Nhưng do một số áp lực, Flappy Bird đã bị tháo khỏi 2 kho ứng dụng. Hôm nay mình sẽ hướng dẫn các bạn 1 số bước cơ bản để viết được 1 game flappy bird đơn giản cho riêng mình chỉ với 65 dòng code Javascript trên thư viện Phaser Framework.

---

Flappy Bird của anh Đông Nguyễn hiện đang là 1 game khá hot tại thời điểm này, với top của 2 kho ứng dụng lớn nhất hiện nay. Nhưng do một số áp lực, Flappy Bird đã bị tháo khỏi 2 kho ứng dụng. Hôm nay mình sẽ hướng dẫn các bạn 1 số bước cơ bản để viết được 1 game flappy bird đơn giản cho riêng mình chỉ với 65 dòng code Javascript trên thư viện Phaser Framework.

Bạn có thể test thử flappy bird siêu đơn giản [tại đây](https://jsfiddle.net/lvduit/rP5Kt/embedded/result/).

![](https://1.bp.blogspot.com/-jDgau6eVkS4/UxF1Q_4cgoI/AAAAAAAAGW8/rrpNzbFGmUg/s1600/FB-1.png)

Yêu cầu: bạn phải biết 1 số javascript cơ bản, bởi tut này viết trên HTML5 Canvas và Javascript.
Phaser frameword bạn có thể tìm hiểu trên Google và mình sẽ có 1 bài hướng dẫn trong các bài viết sau.

## Bước 1: Cài đặt ##

Bạn nên [download template](https://github.com/lessmilk/phaser-tutorials/blob/master/2-flappy_bird/basic_template.zip?raw=true) cơ bản này để sử dụng trong hướng dẫn này. Download về giải nén, bạn sẽ có:

- `phaser.min.js` bản nén của Phaser Frameword v1.1.5
- `index.html`, game sẽ chạy trên file này
- `main.js`, nơi chúng ta sẽ code cho flappy bird
- thư mục `asssets/`, chứa 1 số tài nguyên, mình đã để sẳn 2 file là `bird.png` và `pipe.png`

Đặt tất cả các file trên vào cùng 1 thư mục trong Web Server của bạn, bạn có thể upload lên hosting hoặc chạy local bằng XAMPP hoặc WAMPP.

Mở file `index.html` trên trình duyệt.

Mở file `main.js` bằng trình soạn thảo, như Notepad++, ở đây mình hay dùng Sublime Text.

Bạn sẽ thấy trong file `main.js` một khung cơ bản của game. Cái này mình sẽ nói ở 1 bài viết về Phaser Framework.

```js
// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that will contain the game
var main_state = {

    preload: function() {
        // Function called first to load all the assets
    },

    create: function() {
        // Fuction called after 'preload' to setup the game   
    },

    update: function() {
        // Function called 60 times per second
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state); 
game.state.start('main');  
```

Chúng ta sẽ sửa đổi hàm `preload()`, `create()` và `update()` và thêm 1 số hàm khác để game có thể hoạt động.

## Bước 2: Con trym ##

Rồi bắt đầu code thôi nào. Trong tut này thì con chim của chúng ta chỉ có thể nhảy nhảy bằng phím `spacebar`. 

```js
preload: function() { 
    // Change the background color of the game
    this.game.stage.backgroundColor = '#71c5cf';

    // Load the bird sprite
    this.game.load.image('bird', 'assets/bird.png');
},

create: function() { 
    // Display the bird on the screen
    this.bird = this.game.add.sprite(100, 245, 'bird');

    // Add gravity to the bird to make it fall
    this.bird.body.gravity.y = 1000; 

    // Call the 'jump' function when the spacekey is hit
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.jump, this);   
},

update: function() { 
    // If the bird is out of the world (too high or too low), call the 'restart_game' function
    if (this.bird.inWorld == false)
        this.restart_game();
},
```

-  Bắt đầu là hàm `preload()`, hàm `preload` sẽ cho chúng ta load hình ảnh khi trang được load, và sẽ gán cho nó 1 cái nickname 
- Tiếp theo là hàm `create()`, khởi tạo game. `this.game.add.sprite(100, 245, 'bird');` sẽ thêm hình con chim tại tọa độ `(x, y) = (100, 245)`
- `this.bird.body.gravity.y = 1000;` sẽ làm cho chú chim của chúng ta rơi xuống theo trục `y`
- `space_key.onDown.add(this.jump, this);` khi nhấn thanh spacebar sẽ chạy hàm `jump()` làm cho chú chim nhảy lên. Chúng ta viết tiếp hàm `jump()` và hàm `restart_game()` bên dưới.

```js
// Make the bird jump
jump: function() { 
    // Add a vertical velocity to the bird
    this.bird.body.velocity.y = -350;
},

// Restart the game
restart_game: function() { 
    // Start the 'main' state, which restarts the game
    this.game.state.start('main');
},
```
  

Chúng ta save file `main.js` lại, nhấn F5 file `index.html` trên trình duyệt và bạn đã thấy con chim của chúng ta.  Nhấn spacebar để nó nhảy nhảy.

## Bước 3: Những cái ống nước khó chịu ##

Flappy Bird là phải có ống nước, vì thế chúng ta thêm hình ảnh những cái ống nước trong hàm preload()

```js
this.game.load.image('pipe', 'assets/pipe.png');  
```

Sau đó, tạo 1 group các cái ống nước trong hàm `create()`

```js
this.pipes = game.add.group();   
this.pipes.createMultiple(20, 'pipe');
```

Bây giờ chúng ta sẽ tạo thêm 1 hàm mới, để có thể tạo các ống nước lần lượt xuất hiện trên màn hình. Nó trượt từ phải qua trái, nếu chú chim chạm vào ống nước thì game over, còn nếu k chạm thì các ống nước khi di chuyển đến biên trái sẽ bị ẩn đi.

```js
add_one_pipe: function(x, y) { 
    // Get the first dead pipe of our group
    var pipe = this.pipes.getFirstDead();

    // Set the new position of the pipe
    pipe.reset(x, y);

    // Add velocity to the pipe to make it move left
    pipe.body.velocity.x = -200;

    // Kill the pipe when it's no longer visible
    pipe.outOfBoundsKill = true;
},
```

Hàm trên thì chỉ hiện ra 1 ống nước, nhưg chúng ta cần phải có 6 ống trên 1 hàng (6 khối) và 1 khối trống ở giữa (cái khe ấy)
Vì thế:

```js
add_row_of_pipes: function() { 
    var hole = Math.floor(Math.random()*5)+1;

    for (var i = 0; i < 8; i++)
        if (i != hole && i != hole +1)
            this.add_one_pipe(400, i*60+10); 
},
```

Dĩ nhiên là những cái ống nước này sẽ chuyển động từ phải qua trái, cứ mỗi 1.5s sẽ xuất hiện thêm 1 ống nước. Vì thế chúng ta thêm dòng sau vào cuối hàm `create()`

```js
this.timer = this.game.time.events.loop(1500, this.add_row_of_pipes, this);
```

 Cuối cùng chúng ta thêm dòng này vào dòng đầu tiên của hàm `restart_game()` để dừng thời gian khi khởi động lại game.

```js
this.game.time.events.remove(this.timer);
```

Nào bây giờ bạn có thể F5 là xem thử rồi đó, nó vẫn chưa hoàn thiện nhưng dần dần đang giống game thật rồi haha.

## Bước 4: Điểm số và khi chim không chui được vào khe =]] ##

Điều cuối cùng là điểm trong game khi chim chạm vào cột. 

Chúng ta thêm những dòng sau vào hàm `create()` để hiển thị số điểm ở góc trên bên trái.

```js
this.score = 0;   
var style = { font: "30px Arial", fill: "#ffffff" };  
this.label_score = this.game.add.text(20, 20, "0", style);
```

 Đặt 2 dòng sau và hàm `add_row_of_pipes()` để tăng 1 điểm mỗi khi xuất hiện thêm 1 cột mới.

```js
this.score += 1;  

this.label_score.content = this.score;
```

Thêm dòng sau vào hàm `update()` để gọi hàm `restart_game()` mỗi khi chim chạm vào cột.

```js
this.game.physics.overlap(this.bird, this.pipes, this.restart_game, null, this);
```

Và xin chúc mừng, bạn đã hoàn thành game Flappy bird trên HTML5 (siêu siêu thô). Bạn có thể [download mã nguồn](https://github.com/lessmilk/phaser-tutorials/blob/master/2-flappy_bird/flappy_bird.zip?raw=true) của bài viết này tại đây

## Kì tiếp theo?  ##
 Chim đã bay, đã có thể chui vào khe.. Nhưng trông nó thật chán. Ở bài viết tiếp theo, mình sẽ hướng dẫn có bạn thêm âm thanh, hiệu ứng, menu, ... Đón chờ next chap nhé. Chúc các bạn thành công.


<script type="text/javascript">
	atOptions = {
		'key' : '02ffbb6986d37ce345726941bb6e214f',
		'format' : 'iframe',
		'height' : 50,
		'width' : 320,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.bcloudhost.com/02ffbb6986d37ce345726941bb6e214f/invoke.js"></scr' + 'ipt>');
</script>
