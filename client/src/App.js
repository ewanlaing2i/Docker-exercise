import "./App.css";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";
import CommentList from "./components/CommentList";

function App() {
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);



  useEffect(() => {
    fetch("http://localhost:9000/getItems")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);



  return (
    <div className="App">
      <div class="flex-container">
        <h1>Hello</h1>
        <ItemList items={items}/>
        <CommentList comments={comments}/>
      </div>
    </div>
  );
}

export default App;
