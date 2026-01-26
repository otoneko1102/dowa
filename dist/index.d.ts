declare const regexStrict: RegExp;
declare const regexRelaxed: RegExp;
export declare function findAll(text: string, relaxed?: boolean): string[] | null;
export declare function contains(text: string, relaxed?: boolean): boolean;
export { regexStrict, regexRelaxed };
