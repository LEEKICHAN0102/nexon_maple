import { EquipProps } from "@/@modal/Detail";

interface EquipmentProps {
  characterEquipment: EquipProps;
}

export default function ItemBox({characterEquipment}: EquipmentProps) {
  return(
    <>
      <div>
        <img  />
        <div>
          <p>부위</p>
          <p>이름</p>
          <p>스타포스 수치</p>
        </div>
        <div>
          <p>윗잠</p>
          <p>아랫잠</p>
        </div>
      </div>
    </>
  )
}