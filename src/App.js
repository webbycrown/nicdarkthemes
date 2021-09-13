import { Header } from './my_components/Header';
import { Part_a } from './my_components/Part_a';
import Part_b from './my_components/Part_b';
import { Part_c } from './my_components/Part_c';

function App() {
  return (
    <div className="font-roboto text-sm sm:text-base text-dark-500 font-normal leading-normal antialiased overflow-x-hidden">
      <Header />
      <Part_a />
      <Part_b />
      <Part_c />
    </div>

  );
}

export default App;
