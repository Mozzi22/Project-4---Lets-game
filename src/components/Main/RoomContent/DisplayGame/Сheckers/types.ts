export type TCheckers = {
    id: number;
    key: number;
    isChecked: boolean | null;
    color: string | null;
    onClick: (e: React.MouseEvent) => void;
}
