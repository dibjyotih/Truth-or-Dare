# 🎉 Truth or Dare React Game

A fun, interactive **Truth or Dare** game built with React and Vite! 🎯  
Players sit in a virtual circle, and a spinning bottle randomly selects one player to ask and another to answer a truth or dare challenge.

---

## 📸 Demo Preview
![image](https://github.com/user-attachments/assets/62e083fc-54c7-4127-ab80-c330f31f802e)


> Upload a screenshot or screen recording here (optional)

---

## 🧠 Project Overview

This app simulates a real-life party game using animations, fun visuals, and interactive questions.

### 🕹️ How It Works:

1. Enter the number of players.
2. Name the players (2-column grid layout).
3. Players are displayed in a circular layout.
4. Click anywhere on the game board to spin the bottle.
5. The bottom of the bottle selects the **asker**, the top selects the **answerer**.
6. The asker chooses **Truth** or **Dare** for the answerer.
7. A random question appears. Once it's answered, click to spin again!

---

## 🧩 Component Structure

src/
│
├── App.jsx # Routes between PlayerSetup and GameBoard
├── assets/ # Images (bottle, background, favicon)
├── components/
│ ├── PlayerSetup.jsx # Number of players and name entry
│ ├── GameBoard.jsx # Main game logic and layout
│ ├── Bottle.jsx # Bottle component with rotation
│
├── data/
│ ├── truthQuestions.js # List of truth questions
│ ├── dareQuestions.js # List of dare challenges
│
├── styles/
│ ├── GameBoard.css # Styling for the game board
│ ├── PlayerSetup.css # Styling for player input
│
└── main.jsx # Entry point

---

## 🚀 Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/truth-or-dare-game.git

# 2. Navigate into the project
cd truth-or-dare-game

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
Then open http://localhost:5173 in your browser.
## 🌈 Features

- Fully responsive UI  
- Spinning bottle animation  
- Highlighted asker and answerer  
- Random truth/dare questions  
- Clickable circle area to spin  
- Blurred background for party effect  
- Custom favicon using imported assets (JS injection)  

---

## 🧪 Tech Stack

- React + Vite  
- CSS3 / Flexbox / Grid  
- Google Fonts + gradients  
- Dynamic favicon handling (JS-based)  

---

## 📁 Assets

- `assets/bottle.png`: bottle image  
- `assets/party-bg.jpg`: blurred background  
- `assets/bar.png`: favicon (injected via React)  

---

## ✨ Future Ideas

- Add timer/countdown per question  
- Sound effects & background music  
- Confetti animation on correct answers  
- Multiplayer via sockets  

---

## 👐 Contributing

Feel free to fork and submit pull requests!

```bash
git checkout -b your-feature
git commit -m "Add amazing feature"
git push origin your-feature
