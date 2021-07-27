export type TCheckers = {
    id: number;
    position: number;
    key: number;
    isChecked: boolean | null;
    color: string | null;
    bgColors: string;
    onClick: (e: React.MouseEvent) => void;
    getPossibleStep: (e: React.MouseEvent) => void;
    doCheckerStep: (arg: number) => void;
    handleClick: (arg: React.MouseEvent) => void;
}
