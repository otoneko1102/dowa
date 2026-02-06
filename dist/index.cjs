var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// cjs-source-ns:cjs-entry
var cjs_entry_exports = {};
__export(cjs_entry_exports, {
  contains: () => contains,
  findAll: () => findAll,
  regexRelaxed: () => regexRelaxed,
  regexStrict: () => regexStrict
});
module.exports = __toCommonJS(cjs_entry_exports);
var regexStrict = /(?:\u{1F605}|\u{1F923}|\u{203C}\u{FE0F}?|(?:[きキｷ][ちチﾁ]|[おぉオォｵｫ][うぅウゥｳｩ]|[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)?(?:[wｗ]+|(?:(?:爆笑)|笑)+|[（(]笑[）)] )|(?:爆笑){2,}|(?:冷笑){2,}|[（(]笑[）)])/gu;
var relaxedOnly = /(?:[うぅウゥｳｩ][おぉオォｵｫ]|[どドﾄﾞ][わゎワヮ])([ー～っッｯ]*)*|爆笑|冷笑|(?:\u{1F4A6})/gu;
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  contains,
  findAll,
  regexRelaxed,
  regexStrict
});
