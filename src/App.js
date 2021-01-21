import "./App.css";
import Alert from "./components/alert/Alert";
import { BookForm } from "./components/BookForm";
import { BookTable } from "./components/BookTable";
import AlertState from "./context/alert/AlertState";
import BookState from "./context/book/BookState";

function App() {
  return (
    <BookState>
      <AlertState>
        <div className="container ">
          <Alert />
          <h1 className="App">Add Book</h1>
          <BookForm />
          <BookTable />
        </div>
      </AlertState>
    </BookState>
  );
}

export default App;
