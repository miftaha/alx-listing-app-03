import Image from 'next/image'
interface OrderSummaryProps {
  propertyName: string
  price: number
  bookingFee: number
  totalNights: number
  startDate: string
}

const OrderSummary: React.FC<{ bookingDetails: OrderSummaryProps }> = ({
  bookingDetails,
}) => (
  <div className="bg-white p-6 shadow-md rounded-lg flex flex-col">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col items-center mt-4">
      <Image
        src="/assets/images/image2.jpg"
        width={539}
        height={332}
        alt="Property"
        className="object-cover rounded-md mb-[15px]"
      />
      <div className=" ">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
)

export default OrderSummary
