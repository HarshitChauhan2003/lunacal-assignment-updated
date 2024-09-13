import TabWidget from './TabWidget';
import GalleryWidget from './GalleryWidget';

function App() {
  return (
    <div className="h-screen flex bg-[#1E1E1E]">
      {/* Left half, empty on smaller screens */}
      <div className="w-1/2 hidden md:block"></div>

      {/* Right half with two widgets */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6">
        <TabWidget />
        <div className="relative">
      {/* Your other content */}
      <div 
        className="
          absolute 
          left-[56.48%] 
          right-[8.1%] 
          top-[48.38%] 
          bottom-[51.17%] 
          rounded-[2.45933px]
          shadow-[0px_4px_4px_rgba(0,0,0,0.33)]
          backdrop-blur-[4.91866px]
        "
        style={{
          background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(180deg, rgba(40, 40, 40, 0.1) 0%, rgba(248, 248, 248, 0.1) 100%)',
        }}
      >
        {/* Content inside the rectangle */}
      </div>
    </div>
        <GalleryWidget />
        {/* Rectangle 5158 */}
      <div className="absolute " style={{
        
        right: '8.1%',
        top: '805',
        bottom: '976',
        height: '4',
        width: '612',
        backgroundColor: 'rgba(255, 255, 255, 0.05)', // Optional background color for visibility
        
      }}></div>
      </div>
    </div>
  );
}

export default App;