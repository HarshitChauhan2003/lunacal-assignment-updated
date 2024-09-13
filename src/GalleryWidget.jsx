import React, { useState } from 'react';

const GalleryWidget = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  // Scroll to the next image
  const handleNext = () => {
    if (currentIndex + 1 < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Scroll to the previous image
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-[720px] h-[330px] bg-[#363C43] shadow-lg rounded-lg overflow-hidden">
      {/* Gallery Header */}
      <div className="absolute w-[149px] h-[62px] bg-[#171717] shadow-inner inset-0 rounded-[20px] left-[51px] top-[20px]" />
      <div className="absolute text-white font-poppins font-medium text-[20px] leading-[30px] left-[94px] top-[36px]">Gallery</div>

      {/* Thumbnails Container */}
      <div className="flex width:190 height:179 space-x-4 px-6 absolute top-[124px] left-0 right-0 justify-center">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div
            key={index}
            className="w-[190px] h-[179px] bg-cover rounded-[24px] transform transition-transform duration-500 ease-in-out"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${image})`,
            }}
          ></div>
        ))}
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

      {/* Add Image Button */}
      <div className="absolute bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-lg rounded-full flex items-center justify-center" style={{ width: '131.32px', height: '46px', top: '28px', left: '381px', borderRadius: '104px' }}>
        <label className="text-white uppercase font-bold text-[12px] tracking-widest cursor-pointer">
          + Add Image
          <input type="file" multiple onChange={handleImageUpload} className="hidden" />
        </label>
      </div>

      {/* Left Scroll Button */}
      <button
        onClick={handlePrev}
        className="absolute w-[45px] h-[45px] left-[550.32px] top-[31px] bg-gradient-to-b from-[#303439] to-[#161718] shadow-xl rounded-full rotate-180"
        disabled={currentIndex === 0}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14" fill="none" stroke="#6F787C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[18.5px]">
            <path d="M2.1 7h10.09M8.15 3l4.04 4-4.04 4" />
          </svg>
        </div>
      </button>

      {/* Right Scroll Button */}
      <button
        onClick={handleNext}
        className="absolute w-[45px] h-[45px] left-[613.32px] top-[31px] bg-gradient-to-b from-[#303439] to-[#161718] shadow-xl rounded-full"
        disabled={currentIndex + 3 >= images.length}
      >
        <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14" fill="none" stroke="#6F787C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[18.5px]">
            <path d="M2.1 7h10.09M8.15 3l4.04 4-4.04 4" />
          </svg>
        </div>
      </button>


    </div>
  );
};

export default GalleryWidget;

// import React from 'react';

// const GalleryWidget = () => {
//   return (
//     <div className="relative w-[720px] h-[330px] bg-[#363C43] shadow-lg rounded-lg overflow-hidden">
//       {/* Rectangle 5121 (Gallery Header) */}
//       <div className="absolute w-[149px] h-[62px] bg-[#171717] shadow-inner inset-0 rounded-[20px] left-[51px] top-[20px]" />
//       <div className="absolute text-white font-poppins font-medium text-[20px] leading-[30px] left-[94px] top-[36px]">Gallery</div>

//       {/* Thumbnails Container */}
//       <div className="flex space-x-4 px-6 absolute top-[100px] left-0 right-0 justify-center">
//         {/* Thumbnail 1 */}
//         <div className="w-[190px] h-[179px] bg-[#444] rounded-[24px]"></div>

//         {/* Thumbnail 2 */}
//         <div className="w-[190px] h-[179px] bg-[#555] rounded-[24px]"></div>

//         {/* Thumbnail 3 */}
//         <div className="w-[190px] h-[179px] bg-[#666] rounded-[24px]"></div>
//       </div>

//       {/* New Auto Layout Component */}
//       <div className="absolute flex flex-col items-center gap-[105px]" style={{ width: '24px', height: '159.69px', left: '12px', top: '21px' }}>
//         {/* Vector with SVG */}
//         <div className="w-[24px] h-[24px] flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(327.89deg, #4A4E54 -1.73%, #A3ADBA 89.26%)', order: 0, flexGrow: 0 }}>
//           {/* SVG Vector */}
//           <svg className="h-6 w-6 text-#363C43" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </div>

//         {/* Frame 1000002250 */}
//         <div className="flex flex-wrap items-start gap-[1.38px] rounded-[2.32804px]" style={{ width: '24px', height: '30.69px', order: 1, alignSelf: 'stretch', flexGrow: 0 }}>
//           {/* Rectangle 39341 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 0, flexGrow: 0 }}></div>
//           {/* Rectangle 39347 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 1, flexGrow: 0 }}></div>
//           {/* Rectangle 39342 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 2, flexGrow: 0 }}></div>
//           {/* Rectangle 39348 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 3, flexGrow: 0 }}></div>
//           {/* Rectangle 39343 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 4, flexGrow: 0 }}></div>
//           {/* Rectangle 39349 */}
//           <div className="w-[9.31px] h-[9.31px] bg-[#4A4E54] rounded-[1.16402px]" style={{ order: 5, flexGrow: 0 }}></div>
//         </div>
//       </div>

//       {/* Add Image Button */}
//       <div className="absolute bg-[rgba(255,255,255,0.03)] backdrop-blur-md shadow-lg rounded-full flex items-center justify-center" style={{ width: '131.32px', height: '46px', top: '28px', left: '381px', boxShadow: '-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25), 9px 10px 7.1px rgba(0, 0, 0, 0.4), inset 0px 0px 48.9064px rgba(255, 255, 255, 0.05), inset 0px 3.26043px 3.26043px rgba(255, 255, 255, 0.15)', borderRadius: '104px', transform: 'none' }}>
//         <button className="text-white uppercase font-bold text-[12px] tracking-widest">+ Add Image</button>
//       </div>

//       {/* Updated Decorative Buttons */}
//       <button className="absolute w-[45px] h-[45px] left-[550.32px] top-[31px]  bg-gradient-to-b from-[#303439] to-[#161718] shadow-xl rounded-full rotate-180">
//         <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14" fill="none" stroke="#6F787C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[18.5px]">
//             <path d="M2.1 7h10.09M8.15 3l4.04 4-4.04 4" />
//           </svg>
//         </div>
//       </button>

//       <button className="absolute w-[45px] h-[45px] left-[613.32px] top-[31px] bg-gradient-to-b from-[#303439] to-[#161718] shadow-xl rounded-full">
//         <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.19 14" fill="none" stroke="#6F787C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[18.5px]">
//             <path d="M2.1 7h10.09M8.15 3l4.04 4-4.04 4" />
//           </svg>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default GalleryWidget;


// Edit the add image button such that I can upload images from my device in the gallery
