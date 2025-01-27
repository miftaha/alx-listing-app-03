// import { FilterProps } from '@/interfaces'
interface PillProps {
  filter: string
}
const Pill: React.FC<PillProps> = ({ filter }) => {
  return (
    <button className="px-[24px] py-[10px] rounded-[30px] border-[1.5px] border-[#34967C] text-[#34967C] text-[15px] leading-[23.75px] ">
      {filter}
    </button>
  )
}
export default Pill
