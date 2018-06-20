> Our project is based off the game "Neko Atsume: Kitty Collector" , created by Hit-Point Co.,Ltd., which was released on October 20, 2014. More information can be found at https://en.wikipedia.org/wiki/Neko_Atsume

# This wireframe demonstrates the logic of our application.

**1:**
Users are brought to an empty background screen and given a certain amount of starting income, fishes. These fishes are enough to allow the user to purchase a starting cat.

**2:**
To do so, users are to click the Menu button, followed by the Shop button, and then clicking their desired starting cat.

**3:**
Then, click the buy button.

**4:**
The user is now able to set the cat on an empty location from the Catbook interface through the Cats button.

# About Our Game

**In Game Currency**
In our version, the currency of fish accumulates over time. The more cats you collect, the higher amount of fishes the user accumulates over time. For example, let's say when you begin the game, the amount of fishes a user is 10 fishes per second. If you collect another cat, this value is increased to 25 fishes per second (just an example).

**About the Cats**
Each cat will have a short description in the shop and if clicked, more details about the specific cat will be shown. Each cat also has a unique personality trait and a power level. Cats vary in price and this price is determined by us. When a user purchases a cat, they are associated with a few actions. These actions are unique to the cats and are a surprise for the user when they buy it.

**Placement of the Cats**
There are only four spots where a cat can be placed. If a user wishes to place a cat on an empty location, the location will be marked with a yellow oval. Else, the location will be marked red with a white cross. Placing a cat over a non-empty location will replace the cat that is currently there.

**Our Unique Twist**
In the original game, all cats can be acquired with some sort of bait. However, since we are not working with baits, we decided to select a few cats to be only available after some event has occurred. This way, in order for our users to continue to play the game, we've included this aspect as well as a few others to encourage users to keep playing the game!

# About the Stack
We are using the MERN Stack to create this application.
In the front end, we will be using React.js to render the background and cats. In the back end, we are using Express.js and Node.js to make user purchases. To store our information such as user data and cats, we are using MongoDB with mLab and Mongoose.

