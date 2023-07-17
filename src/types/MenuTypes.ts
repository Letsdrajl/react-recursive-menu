export type MenuItem<T extends MenuItem<T>[] | (() => void) | null | 'back'> = {
    id: number
    name: string;
    child: T;
};
