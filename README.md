Pre-work - Memory Game
Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Kevin Grewal

Time spent: 6 hours spent in total

Link to project: https://glitch.com/edit/#!/respected-stone-sheet

Required Functionality

The following required functionality is complete:

[X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app

[X] "Start" button toggles between "Start" and "Stop" when clicked.

[X] Game buttons each light up and play a sound when clicked.

[X] Computer plays back sequence of clues including sound and visual cue for each button

[X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.

[X] User wins the game after guessing a complete pattern

[X] User loses the game after an incorrect guess

The following optional features are implemented:

[X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial

[X] Buttons use a pitch (frequency) other than the ones in the tutorial

[X] More than 4 functional game buttons

[X] Playback speeds up on each turn

[X] Computer picks a different pattern each time the game is played

[X] Player only loses after 3 mistakes (instead of on the first mistake)

[ ] Game button appearance change goes beyond color (e.g. add an image)

[X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)

[ ] User has a limited amount of time to enter their guess on each turn

The following additional features are implemented:

[X] Three difficulties modes.

[X] User can select from the three nursery rhymes.

[X] Nursery Rhyme frequencies match the correct notes of the tune

Video Walkthrough

Here's a walkthrough of implemented user stories: ![] https://recordit.co/ty94TJYVjD

Reflection Questions
If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
https://www.w3schools.com/cssref/css_colors.asp 
https://www.w3schools.com/cssref/pr_border-style.asp 
https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript

What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

A challenge I encountered was matching note frequencies to the nursery rhymes. My goal was to give the player three options, increasing in difficulty. The challenge was that I had to find nursery rhymes whose frequencies were all in the same scale range but also got incremently harder.
In order to do this I researched into music theory and frequency scales. After doing some digging, I came across the idea of doing 8 buttons, so I could fill all the notes in a scale A-G. However, this scale would not work for many rhymes. So I went ahead and looked through the notes of many nursery rhymes and then matched those notes with their respected frequencies.
Because I wanted the pitch to stay consistent, I decided to stay in the 5th octave, meaning I used the notes C5, D5, E5, F5, G5, A5, and B5. After some trial and error, I was able to successfully implement my goal, where the number of buttons in a pattern increased from level easy to medium, and became more complex from level medium to hard. The frequencies also matched
so the rhyme and tone sounded just like the actual rhyme.

What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Honestly speaking, after completing this submission my interest for web development skyrocketed. I am highly curious about all the possibilities of web development. 
For example, similar to other languages like Java or Python, are there specific packages or libraries that are specialized for specific tasks? 
I noticed there are many free website makers on the web, what are the pros and cons of using a free website maker versus creating your own?
I also noticed that whenever you are on a browser you can right click and inspect element which will actually show you and allow you to edit the HTML code and the console response. Why is that allowed? Is there any cybersecurity measures taken? If so is it done within javascript?
Lastly, often times I hear about front-end vs back-end development. How is the back-end development incorporated into the front-end?

If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, theres a few additional things I would implement. For instance, I would want to make multiple screens so that when a specific option is clicked
it sends the user to the correct screen. I would also like to add more buttons to mimick a larger portion of the musical scale. Not only would this allow for more complex patterns, but it will also allow for a greater range in difficulty.
Another feature I really would have liked to implement is data parsing/web scraping. I would have liked to scrape a data base of songs and assign them to their matching notes. This would allow the user to select any song of their choice and the program would parse the data to create the macthing pattern.
Lastly, I would want to add more style to the website, including interactive animations, images, and texts. For example, for the pattern for Mary Had A Little Lamb, it would be cool to have pictures of a girl and a little lamb appear when buttons are clicked.



License
Copyright Kevin Grewal

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.