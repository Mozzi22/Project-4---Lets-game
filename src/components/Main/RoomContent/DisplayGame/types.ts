export type TSingleSell = {
    id: number;
    isChecked: boolean | null;
    color: string | null;
    position: number;
    onClick: (arg: number) => void,
    figure: string | null,
}
