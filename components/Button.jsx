export default function Button({ bg, innerText, onClick }) {
  return (
    <button
      class={`rounded shadow ${bg} text-white font-bold px-4 py-2 hover:opacity-75`}
      onClick={onClick}
    >
      {innerText}
    </button>
  );
}
