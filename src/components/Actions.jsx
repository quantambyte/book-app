/* eslint-disable react/prop-types */
const Actions = ({ onClick, type }) => {
  return (
    <span
      onClick={onClick}
      className={
        'bg-slate-500 hover:bg-slate-600 transition-all text-white rounded-lg px-3 py-2 cursor-pointer'
      }
    >
      {type}
    </span>
  );
};

export default Actions;
