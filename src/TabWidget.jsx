import React, { useState, useRef, useEffect } from 'react';

function TabWidget() {
  const [activeTab, setActiveTab] = useState('about');
  const contentRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  

  useEffect(() => {
    // Scroll to top when the active tab changes
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
      setScrollPosition(0);
    }
  }, [activeTab]);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
        setScrollPosition(scrollPercentage * (175 - 64)); // 175px is the content height, 64px is the scrollbar thumb height
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
    }
    

    return () => {
      if (contentElement) {
        contentElement.removeEventListener('scroll', handleScroll);
      }
      
    };
  }, []);

  return (
    

    <div className="relative bg-[#363C43] shadow-lg rounded-[18.89px] w-[720px] h-[316px]">
      {/* Tabs Bar */}
      <div className="absolute top-[20px] left-[54px] bg-[#171717] w-[612px] h-[62px] rounded-[23px] flex justify-between items-center p-2">
        <button
          className={`w-1/3 text-[#A3ADB2] font-bold py-2 px-4 rounded-[23px] ${
            activeTab === 'about' ? 'bg-[#28292F] text-[#FFFFFF] shadow' : 'hover:bg-[#28292F]'
          }`}
          onClick={() => setActiveTab('about')}
        >
          About Me
        </button>
        <button
          className={`w-1/3 text-[#A3ADB2] font-bold py-2 px-4 rounded-[23px] ${
            activeTab === 'experiences' ? 'bg-[#28292F] text-[#FFFFFF] shadow' : 'hover:bg-[#28292F]'
          }`}
          onClick={() => setActiveTab('experiences')}
        >
          Experiences
        </button>
        <button
          className={`w-1/3 text-[#A3ADB2] font-bold py-2 px-4 rounded-[23px] ${
            activeTab === 'recommended' ? 'bg-[#28292F] text-[#FFFFFF] shadow' : 'hover:bg-[#28292F]'
          }`}
          onClick={() => setActiveTab('recommended')}
        >
          Recommended
        </button>
      </div>
      {/* New Auto Layout Component */}
    <div className="absolute flex flex-col items-center gap-[105px]" style={{ width: '24px', height: '159.69px', left: '12px', top: '21px' }}>
    {/* Vector with SVG */}
    <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)', order: 0, flexGrow: 0 }}>
      {/* SVG Vector */}
      <svg className="h-6 w-6 text-#363C43" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    {/* Frame 1000002250 */}
    <div className="flex flex-wrap items-start gap-[1.38px] rounded-[2.32804px]" style={{ width: '24px', height: '30.69px', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
      {/* Rectangle 39341 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 0, flexGrow: 0 }}></div>
      {/* Rectangle 39347 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 1, flexGrow: 0 }}></div>
      {/* Rectangle 39342 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 2, flexGrow: 0 }}></div>
      {/* Rectangle 39348 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 3, flexGrow: 0 }}></div>
      {/* Rectangle 39343 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 4, flexGrow: 0 }}></div>
      {/* Rectangle 39349 */}
      <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 5, flexGrow: 0 }}></div>
    </div>
  </div>
      {/* Scrollable Tab Content Area */}
      <div 
        ref={contentRef}
        className="absolute w-[611px] h-[175px] top-[100px] left-[54px] text-[#969696] p-6 overflow-y-auto pr-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          fontFamily: '"Plus Jakarta Sans", sans-serif',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '25.2px',
          textAlign: 'left'
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {activeTab === 'about' && (
          <p>
            About Me Content: I'm a developer passionate about building responsive and dynamic UIs...
            <br />
            Additional content can be added here to test the scrolling feature.
            <br />
            Keep adding more content to see the scroll bar appear...
            <br />
            Another line of text...
            <br />
            Scrolling example text...
            <br />
            Content continues...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quas ipsa non. Odio veritatis saepe, possimus laboriosam accusamus obcaecati, nobis commodi soluta ipsum magnam quis est nemo, repellat totam minima.
          </p>
        )}
        {activeTab === 'experiences' && (
          <p>
            Experiences Content: I've worked on various front-end and back-end technologies...
            <br />
            Adding more text here to see the scroll functionality...
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore corporis animi ratione reiciendis optio, cupiditate qui adipisci magnam libero porro nam dignissimos impedit nulla illo distinctio debitis labore! Velit, nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut fugiat aspernatur nobis, aliquam exercitationem praesentium itaque, et facere molestias rerum facilis dolor possimus reprehenderit eum deleniti! Dolorem quas eligendi rerum.
          </p>
        )}
        {activeTab === 'recommended' && (
          <p>
            Recommended Content: Check out some great resources and tools for web development...
            <br />
            Example text for scrolling...
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum optio id a qui sit perferendis voluptatum, ipsa animi voluptate cupiditate ad dignissimos illo saepe odit architecto reiciendis nesciunt perspiciatis assumenda.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam amet repudiandae libero molestias, nemo temporibus voluptate non ipsam laboriosam ipsum quasi, maiores voluptatum? At itaque laborum deserunt qui nemo velit!
          </p>
        )}
      </div>

      {/* Custom Scrollbar */}
      <div className="absolute w-[8px] h-[175px] left-[699px] top-[126px] bg-transparent">
        <div 
          className="w-[8px] h-[64px] bg-gradient-to-b from-gray-400 to-[#4A4E54] rounded-lg shadow-md"
          style={{
            transform: `translateY(${scrollPosition}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default TabWidget;




