// src/index.ts
var regexStrict = /(?:[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)?(?:[wｗ]+|(?:(?:爆笑)|笑)+|[（(]笑[）)])|(?:爆笑){2,}|(?:冷笑){2,}|[（(]笑[）)]/gu;
var relaxedOnly = /(?:[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)*|爆笑|冷笑/gu;
function mergeRegex(r1, r2) {
  const flags = Array.from(new Set((r1.flags + r2.flags).split(""))).join("");
  const src = `(?:${r1.source})|(?:${r2.source})`;
  return new RegExp(src, flags);
}
var regexRelaxed = mergeRegex(regexStrict, relaxedOnly);
function findAll(text, relaxed = false) {
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
function contains(text, relaxed = false) {
  return !!findAll(text, relaxed);
}
export {
  contains,
  findAll,
  regexRelaxed,
  regexStrict
};
