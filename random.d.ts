interface Random {
    id: () => string,
    boolean: (likelihood: number) => boolean,
    float: (min: number, max: number) => number,
    integer: (min: number, max: number) => number,
    pick: <T>(...items: T[]) => T
}

declare const random: Random

export default random