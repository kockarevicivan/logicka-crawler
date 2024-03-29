let letterDictionary = {
    'А': 'A',
    'а': 'a',
    'Б': 'B',
    'б': 'b',
    'В': 'V',
    'в': 'v',
    'Г': 'G',
    'г': 'g',
    'Д': 'D',
    'д': 'd',
    'Ђ': 'Đ',
    'ђ': 'đ',
    'Е': 'E',
    'е': 'e',
    'Ж': 'Ž',
    'ж': 'ž',
    'З': 'Z',
    'з': 'z',
    'И': 'I',
    'и': 'i',
    'J': 'J',
    'j': 'j',
    'К': 'K',
    'к': 'k',
    'Л': 'L',
    'л': 'l',
    'Љ': 'Lj',
    'љ': 'lj',
    'М': 'M',
    'м': 'm',
    'Н': 'N',
    'н': 'n',
    'Њ': 'Nј',
    'њ': 'nј',
    'О': 'O',
    'о': 'o',
    'П': 'P',
    'п': 'p',
    'Р': 'R',
    'р': 'r',
    'С': 'S',
    'с': 's',
    'Т': 'T',
    'т': 't',
    'Ћ': 'Ć',
    'ћ': 'ć',
    'У': 'U',
    'у': 'u',
    'Ф': 'F',
    'ф': 'f',
    'Х': 'H',
    'х': 'h',
    'Ц': 'C',
    'ц': 'c',
    'Ч': 'Č',
    'ч': 'č',
    'Џ': 'Dž',
    'џ': 'dž',
    'Ш': 'Š',
    'ш': 'š'
};

function toLatin(cyrillic) {
    let newCharacters = [];

    for(let i = 0; i < cyrillic.length; i++)
        if(letterDictionary[cyrillic.charAt(i)])
            newCharacters.push(letterDictionary[cyrillic.charAt(i)]);
        else newCharacters.push(cyrillic.charAt(i));

    return newCharacters.join('');
}

module.exports = {
    toLatin: toLatin
};