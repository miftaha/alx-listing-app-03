import Pill from '@/components/common/Pill'
import { PROPERTYLISTINGSAMPLE } from '@/constants'

const filterArray = [
  'All',
  'Top Villa',
  'Free Reschedule',
  'Book Now, Pay later',
  'Self CheckIn',
  ' Instant Book',
]

const Home: React.FC = () => {
  return (
    <div className="">
      <section className="px-6 py-8">
        {/* hero section */}
        <div
          className="bg-cover bg-center h-[481px]  rounded-lg flex flex-col justify-center items-center text-[#FFFFFF] text-center "
          style={{ backgroundImage: "url('assets/images/heroImage.png')" }}
        >
          <h1
            className="font-semibold text-[94px] leading-[99px] "
            style={{ boxShadow: ' 0px 4px 19px 0px #00000040' }}
          >
            Find your favorite <br /> place here!
          </h1>
          <p className="text-[24px] leading-[30px] mt-6 font-medium">
            The best prices for over 2 million properties worldwide
          </p>
        </div>{' '}
      </section>
      {/* Filter */}
      <section className="flex gap-4 justify-between py-8 px-6">
        {filterArray.map((filter, index) => (
          <Pill key={index} filter={filter} />
        ))}
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3  gap-16 px-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => {
          return (
            <article className=" rounded-lg shadow-lg" key={index}>
              <img
                src={property.image}
                alt={property.name}
                className="object-cover w-full h-[255px]  rounded-[16.5px]"
              />

              <h2 className="text-[#161117] font-semibold text-[22px] leading-[27.5px] text-center py-4">
                {property.name}
              </h2>
              <div className="flex justify-between px-4 pb-4">
                <p className="font-bold text-[22px] leading-[27.5px] text-[#161117]">
                  Price: ${property.price}
                </p>
                <span className="text-[#161117] text-[17px] leading-[21.25px] font-medium">
                  Rate: {property.rating}
                </span>
              </div>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default Home
