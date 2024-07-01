import './App.css';
import './styles/main.css';
import Input from './components/Input';
import Output from './components/Output';
import { useState } from 'react';

export default function App() {
  const [birthDate, setBirthDate] = useState({year: '', month: '', day: ''});

  return (
    <div className="App card">
      <Input setBirthDate={setBirthDate} />
      <Output birthDate={birthDate} />
    </div>
  );
}
