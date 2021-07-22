## Storybook button

Web address: https://11lugg.github.io/storybook-button/?path=/story/button--main

I completed the tasks below:
- Custom button label
- Disable and enable the button
- Change the submit type
- Choose between primary and secondary
- Change the size of the button
- You can interact with the button to se the hover and focus states (unfortunetly I couldn't get storybook-addon-pseudo-states addon working as i was getting a conflict with other dependencies https://storybook.js.org/addons/storybook-addon-pseudo-states)
- You can change between loading, failure and success (I would have spent a bit more time on animating the loading button but I decided against it due to time. I added a basic animation. I also added animation to the primary and secondary button which looks a little more polished)
- You can also reset the button back to its initial state by clicking on the button in the table head in the controls tab
- If you click on the Docs tab, you can see the button attributes/states in more detail.

I was hoping to use SCSS to make use of global variables for colors. However, I was having the same dependencies conflict as before. I didn't spend much time trying to solve this instead focusing my attention on completing the task in hand.