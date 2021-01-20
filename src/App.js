import "./App.css";
import { BookForm } from "./components/BookForm";
import { BookTable } from "./components/BookTable";
import BookState from "./context/book/BookState";

function App() {
  return (
    <BookState>
      <div className="container App">
        <h1>Add Book</h1>
        <BookForm />
        <BookTable />
      </div>
    </BookState>
  );
}

export default App;
