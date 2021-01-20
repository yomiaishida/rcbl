import "./App.css";
import { BookForm } from "./components/BookForm";
import { BookTable } from "./components/BookTable";

function App() {
  return (
    <div className="container App">
      <h1>Add Book</h1>
      <BookForm />
      <BookTable />
    </div>
  );
}

export default App;
