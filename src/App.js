import "./styles.css";
import Todo from "./components/Todo.js";
import Gif from "./components/Gif.js";
import Diary from "./components/Diary.js";
import Counter from "./components/Counter.js";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <Todo />

      <Diary />
      <Gif />
    </div>
  );
}
