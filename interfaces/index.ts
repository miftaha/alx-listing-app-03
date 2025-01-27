interface address {
  state: string
  city: string
  country: string
}

interface offers {
  bed: string
  shower: string
  occupants: string
}

export interface PropertyProps {
  name: string
  address: address
  rating: number
  category: string[]
  price: number
  offers: offers
  image: string
  discount: '' | '30' | '15' | '20' | '10' | '25' | '40' | '50' | '35' | '60'
}

// interface FilterPro {
//   All: string
//   'Top Villa': string
//   'Free Reschedule': string
//   'Book Now, Pay later': string
//   'Self CheckIn': string
//   ' Instant Book': string
// }
// export interface FilterProps {
//   filters: FilterPro[]
// }
