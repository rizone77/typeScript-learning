// oop - abstraction

// idea
// implemention pore korbo

/*
1. interface
2. abstract class
*/

// interface MediaPlayer{
//     play(): void;
//     pause(): void;
//     stop() : void;
// }

// implemention

// class MusicPlayer implements MediaPlayer{
//  play(){
//     console.log('Playing Music...')
//  }
//  pause(){
//      console.log('Music Paused')
//  }
//  stop() {
//      console.log('Music Stop')
//  }
// }

// const MezbahPlayer = new MusicPlayer(); instance
// MezbahPlayer.play()


// idea
abstract class MediaPlayer{
   abstract play(): void;
  abstract  pause() : void;
   abstract stop() : void;
}


class RakibPlayer extends MediaPlayer{
    play() :void {
        console.log('Playing Music...')
    }
    pause() : void{
     console.log('Music Paused')
  }
    stop() : void {
     console.log('Music Stop')
  }
}

const rakibPlayer1 = new RakibPlayer()

rakibPlayer1.play()