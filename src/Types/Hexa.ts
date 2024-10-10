import { VProps, VObjectProps } from "./VMatrix";

export interface HexaObjectProps extends VObjectProps {}

export interface HexaProps extends VProps {
  character_skill: HexaObjectProps[];
}