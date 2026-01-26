const regexStrict: RegExp =
  /(?:う[おぉ]|ど[わゎ])([ー～]*)?(?:[wｗ]+|(?:(?:爆笑)|笑)+|[（(]笑[）)])|(?:爆笑){2,}|(?:冷笑){2,}|[（(]笑[）)]/gu;
const relaxedOnly: RegExp = /(?:う[おぉ]|ど[わゎ])([ー～]*)*|爆笑|冷笑/gu;
function mergeRegex(r1: RegExp, r2: RegExp): RegExp {
  const flags = Array.from(new Set((r1.flags + r2.flags).split(""))).join("");
  const src = `(?:${r1.source})|(?:${r2.source})`;
  return new RegExp(src, flags);
}
const regexRelaxed: RegExp = mergeRegex(regexStrict, relaxedOnly);

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
