import { useState } from "react";
import './App.css';
import { Button } from './components/Button';
import { Textarea } from './components/Textarea';
import { Select, SelectItem } from './components/Select';

function App() {
  const [step, setStep] = useState(1);
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [style, setStyle] = useState("Rap");
  const [audioURL, setAudioURL] = useState(null);

  const generateSummary = () => {
    setSummary("Résumé automatique de votre cours : " + inputText.slice(0, 100) + "...");
    setStep(2);
  };

  const generateSong = () => {
    setAudioURL("/placeholder-audio.mp3"); // Audio simulé pour le moment
    setStep(3);
  };

  return (
    <div className="App">
      {step === 1 && (
        <div className="step">
          <h2>1. Collez votre cours</h2>
          <Textarea
            placeholder="Collez votre cours ici..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <Button onClick={generateSummary} disabled={!inputText}>
            Résumer et continuer
          </Button>
        </div>
      )}

      {step === 2 && (
        <div className="step">
          <h2>2. Choisissez un style musical</h2>
          <p>{summary}</p>
          <Select onChange={(e) => setStyle(e.target.value)} value={style}>
            <SelectItem value="Rap">Rap – Rythmé</SelectItem>
            <SelectItem value="Pop">Pop – Mélodieux</SelectItem>
            <SelectItem value="Lofi">Lofi – Chill</SelectItem>
          </Select>
          <Button onClick={generateSong}>Générer la chanson</Button>
        </div>
      )}

      {step === 3 && audioURL && (
        <div className="step">
          <h2>3. Votre chanson est prête !</h2>
          <audio controls src={audioURL} className="audio-player" />
          <Button onClick={() => setStep(1)}>Recommencer</Button>
        </div>
      )}
    </div>
  );
}

export default App;
