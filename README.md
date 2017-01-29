# p5-experiments
Series of experiments with p5.js
Inspired by : https://www.youtube.com/watch?v=l__fEY1xanY (Coding train channel on Youtube)
Current experiment has a random walker described in the video with then following tweaks:
- Random colors 
- Follows mouse when it's pressed and inside canvas
- mirror image

One minor issue with the current follow method is the step which gets screwed up when the mouse is pressed. I wanted it to keep doing random walk + follow the mouse, which basically upsets the standard step size to a value of normal step + x, where x is added by the follow function. So, the walk starts looking a bit fast when the mouse is pressed.

