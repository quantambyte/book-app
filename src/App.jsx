import { useState } from 'react';

import Section from './components/Section';
import useSections from './hooks/useSections';

const initialData = {
  id: 1,
  sections: [],
};
const App = () => {
  const [sections, setSections] = useState(initialData);

  const { insertNewSection, deleteSection } = useSections();

  const handleInsertNewSection = (id, item) => {
    const updatedStructure = insertNewSection(sections, id, item);
    setSections(updatedStructure);
  };

  const handleDeleteSection = (id) => {
    const updatedStructure = deleteSection(sections, id);
    const temp = { ...updatedStructure };
    setSections(temp);
  };

  return (
    <div className='min-h-screen'>
      <header className='bg-slate-700 text-white font-bold p-5'>
        <h6 className='pl-1'>Book 1</h6>
      </header>
      <div className='p-5'>
        <Section
          handleInsertNewSection={handleInsertNewSection}
          handleDeleteSection={handleDeleteSection}
          section={sections}
        />
      </div>
    </div>
  );
};

export default App;
