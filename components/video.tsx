type Props = {
    imageUrl: string
    children: React.ReactNode
  }
  
  export default function Video({ imageUrl, children }: Props) {

    return (
      <figure className={`w-full md:w-1/4 mb-5 overflow-hidden rounded-md border-2 border-black bg-black text-white font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
        <video className="w-full" src={imageUrl} autoPlay={true} loop={true}  />
        <figcaption className="border-t-2 border-black p-4">
          {children}
        </figcaption>
      </figure>
    )
  }
  