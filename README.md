# Rock Paper Scissors

## Overview

This is a playable Rock Paper Scissors game built with vanilla JavaScript, HTML, and CSS. It's an interactive exercise that demonstrates core web development concepts including DOM manipulation, event handling, game state management, and dynamic UI updates.

## Learning Objectives

This exercise teaches and reinforces:

- **DOM Manipulation**: Selecting and updating HTML elements dynamically with JavaScript
- **Event Listeners**: Handling user interactions like button clicks
- **Game Logic**: Implementing conditional statements to determine game outcomes
- **State Management**: Tracking game state (scores, active rounds, current state)
- **Random Number Generation**: Using `Math.random()` to simulate computer choices
- **Conditional Statements**: Using if/else logic to compare human and computer choices
- **UI/UX Basics**: Providing visual feedback and updating the interface based on game state

## How It Works

### Game Flow

1. **Start Game**: Click the "Start" button to initialize the game
2. **Make Choices**: Select Rock, Paper, or Scissors by clicking the corresponding button
3. **Computer Choice**: The computer randomly selects its move
4. **Compare Choices**: The game determines the winner based on the rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
   - Same choices result in a tie
5. **Update Score**: The winner's score increases
6. **Play Again**: Continue playing multiple rounds
7. **Celebrate**: Confetti animation triggers when the game ends

### Key Features

- **Score Tracking**: Displays running totals for both human and computer
- **Game State Management**: Buttons are disabled when the game isn't active
- **Visual Feedback**: Results and choices are displayed on screen
- **Confetti Animation**: Celebratory effect at game conclusion
- **Responsive Design**: Works on different screen sizes with gradient backgrounds
- **Font Awesome Icons**: Shows hand gestures for each choice

## Technical Implementation

### Core Functions

- `getComputerChoice()`: Returns a random choice (rock, paper, or scissors)
- `playRound(human, computer)`: Compares choices and updates the score
- `updateUI()`: Toggles button states based on game activity
- `getComputerPick()`: Converts computer choice to HTML with icons
- `endGame()`: Determines final winner and triggers celebration

### State Variables

- `humanScore`: Tracks the player's wins
- `computerScore`: Tracks the computer's wins
- `isGameActive`: Boolean flag for game status
- `round`: Counter for completed rounds

## Files Included

- `index.html`: HTML structure with styling
- `index.js`: Game logic and DOM manipulation
- External libraries: Font Awesome (icons), Canvas Confetti (animations)

## How to Use

1. Open `index.html` in a web browser
2. Click the "Start Game" button to begin
3. Click any of the three buttons (Rock, Paper, Scissors) to make your move
4. Watch the computer make its choice and see the result
5. Continue playing to rack up points
6. Enjoy the confetti animation at the end!

## Concepts Practiced

- ✅ Event-driven programming
- ✅ Conditional logic and comparison operators
- ✅ Array indexing and random selection
- ✅ DOM element selection and manipulation
- ✅ CSS class toggling for styling
- ✅ String manipulation and template logic
- ✅ Variable scope and state tracking
