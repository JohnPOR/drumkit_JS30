//function to play sound (e)
function playsound (e) {
    const audio = document.querySelector(`audio[data-key = "${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keycode}"`)
    if(!audio) return //if pressed key not assigned to audio, return
    audio.currentTime = 0; //rewinds audio to start, otherwise overlap occurs
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') //skip if not a transform
        return;
    this.classlist.remove('playing'); //removes class of 'playing' once played
}

//listens for all keys on document
const keys = document.querySelectorAll('.key')

//ends key transition by using function removeTransition. Transition includes CSS
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listen for keydown event (e)
window.addEventListener('keydown', playsound);
