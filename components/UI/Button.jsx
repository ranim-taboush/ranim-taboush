export default function Button({ children, onClick, className = '' }) {
    return (
      <button
        onClick={onClick}
        className={`bg-neonBlue hover:bg-neonPink text-light py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  }
  