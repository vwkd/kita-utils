/** Transilaterate Georgian to Latin using National System
 */

export function to_national(text) {
  const correspondances = {
    "ა": "a",
    "ბ": "b",
    "გ": "g",
    "დ": "d",
    "ე": "e",
    "ვ": "v",
    "ზ": "z",
    "თ": "t",
    "ი": "i",
    "კ": "k'",
    "ლ": "l",
    "მ": "m",
    "ნ": "n",
    "ო": "o",
    "პ": "p'",
    "ჟ": "zh",
    "რ": "r",
    "ს": "s",
    "ტ": "t'",
    "უ": "u",
    "ფ": "p",
    "ქ": "k",
    "ღ": "gh",
    "ყ": "q'",
    "შ": "sh",
    "ჩ": "ch",
    "ც": "ts",
    "ძ": "dz",
    "წ": "ts'",
    "ჭ": "ch'",
    "ხ": "kh",
    "ჯ": "j",
    "ჰ": "h",
  };

  let result = text;

  for (const [letterGeorgian, letterLatin] of Object.entries(correspondances)) {
    result = result.replace(new RegExp(letterGeorgian, "gi"), letterLatin);
  }

  return result;
}
