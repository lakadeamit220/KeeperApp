import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './components/notes';

function App() {
  return (
    <div>
      <Header />
      {
        notes.map((n) => (
          <Note
            key={n.id}
            title={n.title}
            content={n.content}
          />
        ))
      }
      <Footer />
    </div>
  );
}

export default App;
