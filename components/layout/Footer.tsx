import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#222222]  text-white">
        <div className="px-6 py-2">
          <div className="flex justify-between">
            <div>
              <Image
                src="/assets/images/Vector.png"
                alt="alx-listing-app"
                width={50}
                height={30}
                className="mb-4 text-[#FFFFFF] py-2"
              />

              <p className="text-[#CACACA] text-[16px] leading-[26px] h-[104px] w-[641px]">
                ALX is a platform where travelers can discover and book unique,
                comfortable, and affordable lodging options worldwide. From cozy
                city apartments and tranquil countryside retreats to exotic
                beachside villas, ALX connects you with the perfect place to
                stay for any trip.
              </p>
            </div>
            {/* Navbar */}
            <div className="flex gap-[30px]">
              <div>
                <h3 className="my-4 text-[25px] leading-[26px] text-[#CACACA]">
                  Explore
                </h3>
                <ul className="text-[#CACACA] text-[16px] leading-[26px]">
                  <li>Apartments in Dubai</li>
                  <li>Hotels in New York</li>
                  <li>Villa in Spain</li>
                  <li>Mansion in Indonesia</li>
                </ul>
              </div>
              <div>
                <h3 className="my-4 text-[25px] leading-[26px] text-[#CACACA]">
                  Company
                </h3>
                <ul className="text-[#CACACA] text-[16px] leading-[26px]">
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Career</li>
                  <li>Customers</li>
                  <li>Brand</li>
                </ul>
              </div>
              <div>
                <h3 className="my-4 text-[25px] leading-[26px] text-[#CACACA]">
                  Help
                </h3>
                <ul className="text-[#CACACA] text-[16px] leading-[26px]">
                  <li>Apartments in Dubai</li>
                  <li>Hotels in New York</li>
                  <li>Villa in Spain</li>
                  <li>Mansion in Indonesia</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border border-[#FFFFFF17]"></div>
          <div className="mt-3 flex justify-between">
            <p className="text-[16px] leading-[26px] font-light text-[#CACACA]">
              Some hotel requires you to cancel more than 24 hours before
              check-in. Details{' '}
              <span className="text-[#34967C] cursor-pointer">here</span>
            </p>
            <div>
              <span className="text-[16px] leading-[26px] font-light text-[#CACACA] ">
                <span className="mr-2">Terms of Service</span>
                <span className="mr-2">Policy service</span>
                <span className="mr-2">Cookies Policy</span>
                <span>Partners</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
