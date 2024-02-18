/* eslint-disable react/prop-types */
import { useState } from 'react';
import { toast } from 'react-toastify';

import Actions from './Actions';

const Section = ({ handleInsertNewSection, handleDeleteSection, section }) => {
  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleNewSection = () => {
    setShowInput(true);
  };

  const onAddNewSection = () => {
    if (!input) {
      toast.error('Please enter Section title');
      return;
    }

    handleInsertNewSection(section.id, input);
    setShowInput(false);
    setInput('');
  };

  const handleDelete = () => {
    handleDeleteSection(section.id);
  };

  return (
    <div className=''>
      {section.id === 1 ? (
        <div className='flex items-center justify-between w-max mt-10'>
          <input
            type='text'
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Section Title'
            className='border border-gray-700 text-black placeholder:text-grey-700 text-[14px] p-[10px] w-[400px] rounded-lg mr-3 outline-none focus:ring-0'
          />

          <Actions type='Submit' onClick={onAddNewSection} />
        </div>
      ) : (
        <div className='w-full border border-slate-800 p-2 rounded-xl'>
          <div className='flex items-center justify-between '>
            <span style={{ wordWrap: 'break-word' }}>{section.title}</span>
            <div className='flex gap-4'>
              <Actions type={'Add Section'} onClick={handleNewSection} />
              <Actions type='DELETE' onClick={handleDelete} />
            </div>
          </div>
          {showInput && (
            <div className='flex items-center pt-2 pl-4'>
              <input
                type='text'
                autoFocus
                onChange={(e) => setInput(e.target.value)}
                className='border border-gray-700 text-black placeholder:text-grey-700 text-[14px] p-[10px] w-[400px] rounded-lg mr-3 outline-none focus:ring-0'
              />
              <div className='flex gap-4'>
                <Actions type='Submit' onClick={onAddNewSection} />
                <Actions
                  type='CANCEL'
                  onClick={() => {
                    setShowInput(false);
                  }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div className=' pl-4 pt-2'>
        {section?.sections?.map((subsection) => {
          return (
            <Section
              key={subsection.id}
              handleInsertNewSection={handleInsertNewSection}
              handleDeleteSection={handleDeleteSection}
              section={subsection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section;
