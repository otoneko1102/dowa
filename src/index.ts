import { regexStrict, regexRelaxed } from "./lib/regex";

export function findAll(text: string, relaxed = false): string[] | null {
  if (typeof text !== "string") {
    throw new TypeError('"text" must be a string.');
  }
  if (typeof relaxed !== "boolean") {
    throw new TypeError('"relaxed" must be a boolean.');
  }
  const re = relaxed ? regexRelaxed : regexStrict;
  re.lastIndex = 0;
  const m = text.match(re);
  return m && m.length ? m : null;
}

export function contains(text: string, relaxed = false): boolean {
  return !!findAll(text, relaxed);
}

export { regexStrict, regexRelaxed };
