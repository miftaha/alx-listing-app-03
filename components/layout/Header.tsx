const images = [
  '/assets/images/room.jpg',
  '/assets/images/vacation.jpg',
  '/assets/images/key.jpg',
  '/assets/images/palm.jpg',
  '/assets/images/mansion.jpg',
]
const Header = () => {
  return (
    <header className="border-b border-[#1d1a1a] shadow-md py-8 bg-[#FFFFFF]">
      <div className="px-6 text-white grid   sm:grid-cols-3 gap-3">
        <img
          src="/assets/images/logo.png"
          alt="alx-listing-app"
          width={50}
          height={30}
        />

        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search Hotels"
        />

        <div className="flex justify-end space-x-4 rounded-md">
          <button className="bg-[#34967C] text-[#FFFFFF] text-[18px] font-normal px-4 py-2 rounded-full">
            sign In
          </button>
          <button className="bg-white text-black text-[18px] font-normal px-4 py-2 rounded-full">
            sign up
          </button>
        </div>
      </div>
      {/* CATEGORY */}
      <div className="bg-white flex justify-between pt-8 px-6">
        {images.map((image, index) => (
          <img src={image} className="w-[34px] h-[34px]" key={index} />
        ))}
      </div>
    </header>
  )
}
export default Header
