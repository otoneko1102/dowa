/**
 * \u
 * 1F605: 😅
 * 1F923: 🤣
 * 203C: ‼️
 */
const regexStrict: RegExp =
  /(?:\u{1F605}|\u{1F923}|\u{203C}\u{FE0F}?|(?:[きキｷ][ちチﾁ]|[おぉオォｵｫ][うぅウゥｳｩ]|[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)?(?:[wｗ]+|(?:(?:爆笑)|笑)+|[（(]笑[）)] )|(?:爆笑){2,}|(?:冷笑){2,}|[（(]笑[）)])/gu;
/**
 * 1F4A6: 💦
 */
const relaxedOnly: RegExp =
  /(?:[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)*|爆笑|冷笑|(?:\u{1F4A6})/gu;
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
