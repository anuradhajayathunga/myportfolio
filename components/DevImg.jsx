import Image from "next/image"

const DevImg = ({containerStyles,imgSrc}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} alt='' fill priority/>
    </div>
  )
}

export default DevImg
