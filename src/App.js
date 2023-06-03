import './App.css';
import Foods from './components/foods';

const foodsArray = [
  {
    name: "Pizza",
    calories: 400,
    image: "https://i.imgur.com/eTmWoAN.png",
    servings: 1
  },
  {
    name: "Salad",
    calories: 150,
    image: "https://i.imgur.com/DupGBz5.jpg",
    servings: 1
  },
  {
    name: "Sweet Potato",
    calories: 120,
    image: "https://i.imgur.com/hGraGyR.jpg",
    servings: 1
  },
  {
    name: "Gnocchi",
    calories: 500,
    image: "https://i.imgur.com/93ekwW0.jpg",
    servings: 1
  },
  {
    name: "Pot Roast",
    calories: 350,
    image: "https://i.imgur.com/WCzJDWz.jpg",
    servings: 1
  },
  {
    name: "Lasagna",
    calories: 750,
    image: "https://i.imgur.com/ClxOafl.jpg",
    servings: 1
  },
  {
    name: "Hamburger",
    calories: 400,
    image: "https://i.imgur.com/LoG39wK.jpg",
    servings: 1
  },
  {
    name: "Pad Thai",
    calories: 475,
    image: "https://i.imgur.com/5ktcSzF.jpg",
    servings: 1
  },
  {
    name: "Almonds",
    calories: 75,
    image: "https://i.imgur.com/JRp4Ksx.jpg",
    servings: 1
  },
  {
    name: "Sarma",
    calories: 200,
    image: "https://i.imgur.com/yOlf4Fj.jpg",
    servings: 1
  },
  {
    name: "Bacon",
    calories: 175,
    image: "https://i.imgur.com/7GlqDsG.jpg",
    servings: 1
  },
  {
    name: "Hot Dog",
    calories: 275,
    image: "https://i.imgur.com/QqVHdRu.jpg",
    servings: 1
  },
  {
    name: "Chocolate Cake",
    calories: 490,
    image: "https://i.imgur.com/yrgzA9x.jpg",
    servings: 1
  },
  {
    name: "Wheat Bread",
    calories: 175,
    image: "https://i.imgur.com/TsWzMfM.jpg",
    servings: 1
  },
  {
    name: "Orange",
    calories: 85,
    image: "https://i.imgur.com/abKGOcv.jpg",
    servings: 1
  },
  {
    name: "Banana",
    calories: 175,
    image: "https://i.imgur.com/BMdJhu5.jpg",
    servings: 1
  },
  {
    name: "Yogurt",
    calories: 125,
    image: "https://i.imgur.com/URhdrAm.png",
    servings: 1
  }
]


function App() {
  return (
    <div className="App">
      {
  foodsArray.map(food => {
    return <Foods food={ food } />
  })
}
    </div>
  );
}

export default App;
