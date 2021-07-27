export type TSingleSell = {
    id: number | string;
    isChecked: boolean | null;
    color: string | null;
    position: number;
    onClick: (arg: number) => void;
    figure: string | null;
    doStep: (arg: number) => void;
    status: string;
}
