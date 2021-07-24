export type TCheckers = {
    id: number;
    position: number;
    key: number;
    isChecked: boolean | null;
    color: string | null;
    onClick: (e: React.MouseEvent) => void;
}
