interface EBoxProps {
  equipmentSlot: string;
  slotCoordinate: string;
  equipmentImage: string;
  altImage: string;
}

export default function EquipBox({ 
  equipmentSlot,
  slotCoordinate,
  equipmentImage,
  altImage
}: EBoxProps) {
  return(
    <>
      <div className={`${equipmentSlot} ${slotCoordinate}`}>
        <img src={`${equipmentImage}`} alt={`${altImage}`} />
      </div>
    </>
  )
}