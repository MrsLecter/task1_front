export type DropdownProps = {
  label: string;
  choiceHandler: Function;
  selected: string;
  options: {
    id: number;
    value: string;
    lang?: string;
  }[];
  isAvailable: boolean;
};
