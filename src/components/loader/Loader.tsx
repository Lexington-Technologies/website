export function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col cursor-not-allowed items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-400">
        <img
          src="/logo.png"
          alt="Company Logo"
          className="w-[25%] h-2w-[25%] object-contain mb-4 animate-pulse  hover:scale-105 transition-transform duration-300"
        />
        
        <div className="flex py-5 space-x-4">
          {[
            { color: 'bg-blue-500', delay: 0 },
            { color: 'bg-amber-700', delay: 200 },
            { color: 'bg-blue-800', delay: 400 }
          ].map((dot, index) => (
            <div 
              key={index}
              className={`
                w-3 h-3 ${dot.color} rounded-full 
                animate-bounce 
                opacity-75 hover:opacity-100
                transform transition-all duration-300
                hover:scale-110
              `}
              style={{ 
                animationDelay: `${dot.delay}ms`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
        
        {/* <p className="text-neutral-700 font-medium py-5 animate-pulse text-lg">
          Loading...
        </p> */}
      </div>
  );
}

export default Loader;