import { useState, useEffect } from "react";
import { EquipProps } from "@/Types/Equipment";
import { CashProps } from "@/Types/CashItem";
import { AndroidProps } from "@/Types/Android"; // AndroidProps도 불러와야 함

type ItemType<T> = T extends "equip" ? EquipProps : T extends "cash" ? CashProps : AndroidProps;

const useCharacterItems = <T extends "equip" | "cash" | "android">(
  items: ItemType<T> | undefined,
  itemType: T
) => {
  const [itemMap, setItemMap] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (items) {
      const map: { [key: string]: string } = {};

      if (itemType === "equip") {
        (items as EquipProps).item_equipment.forEach(item => {
          map[item.item_equipment_slot] = item.item_shape_icon;
        });
      } else if (itemType === "cash") {
        (items as CashProps).cash_item_equipment_base.forEach(item => {
          map[item.cash_item_equipment_slot] = item.cash_item_icon;
        });
      } else if (itemType === "android") {
        (items as AndroidProps).android_cash_item_equipment.forEach(item => {
          map[item.cash_item_equipment_slot] = item.cash_item_icon;
        });
      }

      setItemMap(map);
    }
  }, [items, itemType]);

  return itemMap;
};

export default useCharacterItems;
