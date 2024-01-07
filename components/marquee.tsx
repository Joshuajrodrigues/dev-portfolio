import { Marquee as MarqueeType } from "@/app/page"

export default function Marquee({ items }: { items: MarqueeType }) {
    return (
      <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-black bg-amber-100 font-bold">
        <div className="animate-marquee whitespace-nowrap py-4">
          {items.map((item) => {
            return (
              <span key={item.key} className="mx-4 text-4xl 2xl:text-6xl">
                {item.value}
              </span>
            )
          })}
        </div>
  
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-4">
          {items.map((item) => {
            return (
              <span key={item.key} className="mx-4 text-4xl 2xl:text-6xl">
                {item.value}
              </span>
            )
          })}
        </div>

      </div>
  
   
  
    
    )
  }
  