let latin_automaton = [
    { l: "start", a: null, t: new Map([["A", 1], ["E", 3], ["I", 5], ["O", 7], ["U", 9], ["Y", 11], ["a", 13], ["e", 15], ["i", 17], ["o", 19], ["u", 21], ["y", 23]]) },
    { l: "A", a: null, t: new Map([["-", 25], [";", 2]]) },
    { l: "A;", a: "Ā", t: null },
    { l: "E", a: null, t: new Map([["-", 26], [";", 4]]) },
    { l: "E;", a: "Ē", t: null },
    { l: "I", a: null, t: new Map([["-", 27], [";", 6]]) },
    { l: "I;", a: "Ī", t: null },
    { l: "O", a: null, t: new Map([["-", 28], [";", 8]]) },
    { l: "O;", a: "Ō", t: null },
    { l: "U", a: null, t: new Map([["-", 29], [";", 10]]) },
    { l: "U;", a: "Ū", t: null },
    { l: "Y", a: null, t: new Map([["-", 30], [";", 12]]) },
    { l: "Y;", a: "Ȳ", t: null },
    { l: "a", a: null, t: new Map([["-", 31], [";", 14]]) },
    { l: "a;", a: "ā", t: null },
    { l: "e", a: null, t: new Map([["-", 32], [";", 16]]) },
    { l: "e;", a: "ē", t: null },
    { l: "i", a: null, t: new Map([["-", 33], [";", 18]]) },
    { l: "i;", a: "ī", t: null },
    { l: "o", a: null, t: new Map([["-", 34], [";", 20]]) },
    { l: "o;", a: "ō", t: null },
    { l: "u", a: null, t: new Map([["-", 35], [";", 22]]) },
    { l: "u;", a: "ū", t: null },
    { l: "y", a: null, t: new Map([["-", 36], [";", 24]]) },
    { l: "y;", a: "ȳ", t: null },
    { l: "A-", a: "Ă", t: null },
    { l: "E-", a: "Ĕ", t: null },
    { l: "I-", a: "Ĭ", t: null },
    { l: "O-", a: "Ŏ", t: null },
    { l: "U-", a: "Ŭ", t: null },
    { l: "Y-", a: "Y̆", t: null },
    { l: "a-", a: "ă", t: null },
    { l: "e-", a: "ĕ", t: null },
    { l: "i-", a: "ĭ", t: null },
    { l: "o-", a: "ŏ", t: null },
    { l: "u-", a: "ŭ", t: null },
    { l: "y-", a: "y̆", t: null }
];

let greek_automaton = [
    { l: "start", a: null, t: new Map([["A", 53], ["B", 1], ["C", 35], ["D", 2], ["E", 61], ["F", 37], ["G", 3], ["H", 38], ["I", 68], ["K", 4], ["L", 7], ["M", 8], ["N", 9], ["O", 76], ["P", 10], ["R", 13], ["S", 14], ["T", 15], ["U", 83], ["V", 39], ["X", 40], ["Z", 17], ["a", 91], ["b", 18], ["c", 41], ["d", 19], ["e", 107], ["f", 43], ["g", 20], ["h", 44], ["i", 118], ["k", 21], ["l", 24], ["m", 25], ["n", 26], ["o", 126], ["p", 27], ["q", 48], ["r", 30], ["s", 31], ["t", 32], ["u", 137], ["v", 45], ["x", 46], ["z", 34]]) },
    { l: "B", a: "Β", t: null },
    { l: "D", a: "Δ", t: null },
    { l: "G", a: "Γ", t: null },
    { l: "K", a: "Κ", t: new Map([["H", 5], ["S", 6]]) },
    { l: "KH", a: "Χ", t: null },
    { l: "KS", a: "Ξ", t: null },
    { l: "L", a: "Λ", t: null },
    { l: "M", a: "Μ", t: null },
    { l: "N", a: "Ν", t: null },
    { l: "P", a: "Π", t: new Map([["H", 11], ["S", 12]]) },
    { l: "PH", a: "Φ", t: null },
    { l: "PS", a: "Ψ", t: null },
    { l: "R", a: "Ρ", t: null },
    { l: "S", a: "Σ", t: null },
    { l: "T", a: "Τ", t: new Map([["H", 16]]) },
    { l: "TH", a: "Θ", t: null },
    { l: "Z", a: "Ζ", t: null },
    { l: "b", a: "β", t: null },
    { l: "d", a: "δ", t: null },
    { l: "g", a: "γ", t: null },
    { l: "k", a: "κ", t: new Map([["h", 22], ["s", 23]]) },
    { l: "kh", a: "χ", t: null },
    { l: "ks", a: "ξ", t: null },
    { l: "l", a: "λ", t: null },
    { l: "m", a: "μ", t: null },
    { l: "n", a: "ν", t: null },
    { l: "p", a: "π", t: new Map([["h", 28], ["s", 29]]) },
    { l: "ph", a: "φ", t: null },
    { l: "ps", a: "ψ", t: null },
    { l: "r", a: "ρ", t: null },
    { l: "s", a: "σ", t: new Map([[" ", 47]]) },
    { l: "t", a: "τ", t: new Map([["h", 33]]) },
    { l: "th", a: "θ", t: null },
    { l: "z", a: "ζ", t: null },
    { l: "C", a: "Κ", t: new Map([["H", 36]]) },
    { l: "CH", a: "Χ", t: null },
    { l: "F", a: "Φ", t: null },
    { l: "H", a: "Η", t: null },
    { l: "V", a: "Ω", t: null },
    { l: "X", a: "Ξ", t: null },
    { l: "c", a: "κ", t: new Map([["h", 42]]) },
    { l: "ch", a: "χ", t: null },
    { l: "f", a: "φ", t: null },
    { l: "h", a: "η", t: null },
    { l: "v", a: "ω", t: null },
    { l: "x", a: "ξ", t: null },
    { l: "s ", a: "ς", t: null },
    { l: "q", a: null, t: new Map([[".", 49], ["<", 50], [">", 51], ["?", 52]]) },
    { l: "q.", a: "·", t: null },
    { l: "q<", a: "«", t: null },
    { l: "q>", a: "»", t: null },
    { l: "q?", a: ";", t: null },
    { l: "A", a: "Α", t: new Map([["\"", 275], ["'", 54], [":", 183], [";", 55], ["[", 56], ["w", 57], ["}", 145]]) },
    { l: "A'", a: "Ὰ", t: null },
    { l: "A;", a: "Ά", t: null },
    { l: "A[", a: "Α͂", t: null },
    { l: "Aw", a: "Ᾱ", t: new Map([["\"", 279], ["'", 58], [":", 187], [";", 59], ["[", 60]]) },
    { l: "Aw'", a: "Ᾱ̀", t: null },
    { l: "Aw;", a: "Ᾱ́", t: null },
    { l: "Aw[", a: "Ᾱ͂", t: null },
    { l: "E", a: "Ε", t: new Map([["\"", 283], ["'", 62], [":", 191], [";", 63], ["w", 64]]) },
    { l: "E'", a: "Ὲ", t: null },
    { l: "E;", a: "Έ", t: null },
    { l: "Ew", a: "Η", t: new Map([["\"", 286], ["'", 65], [":", 194], [";", 66], ["[", 67]]) },
    { l: "Ew'", a: "Ὴ", t: null },
    { l: "Ew;", a: "Ή", t: null },
    { l: "Ew[", a: "Η͂", t: null },
    { l: "I", a: "Ι", t: new Map([["\"", 290], ["'", 69], [":", 198], [";", 70], ["[", 71], ["w", 72], ["{", 150], ["}", 154]]) },
    { l: "I'", a: "Ὶ", t: null },
    { l: "I;", a: "Ί", t: null },
    { l: "I[", a: "Ι͂", t: null },
    { l: "Iw", a: "Ῑ", t: new Map([["\"", 294], ["'", 73], [":", 202], [";", 74], ["[", 75], ["{", 146]]) },
    { l: "Iw'", a: "Ῑ̀", t: null },
    { l: "Iw;", a: "Ῑ́", t: null },
    { l: "Iw[", a: "Ῑ͂", t: null },
    { l: "O", a: "Ο", t: new Map([["\"", 298], ["'", 77], [":", 206], [";", 78], ["w", 79]]) },
    { l: "O'", a: "Ὸ", t: null },
    { l: "O;", a: "Ό", t: null },
    { l: "Ow", a: "Ω", t: new Map([["\"", 301], ["'", 80], [":", 209], [";", 81], ["[", 82]]) },
    { l: "Ow'", a: "Ὼ", t: null },
    { l: "Ow;", a: "Ώ", t: null },
    { l: "Ow[", a: "Ω͂", t: null },
    { l: "U", a: "Υ", t: new Map([["\"", 305], ["'", 84], [":", 213], [";", 85], ["[", 86], ["w", 87], ["{", 159], ["}", 163]]) },
    { l: "U'", a: "Ὺ", t: null },
    { l: "U;", a: "Ύ", t: null },
    { l: "U[", a: "Υ͂", t: null },
    { l: "Uw", a: "Ῡ", t: new Map([["\"", 309], ["'", 88], [":", 217], [";", 89], ["[", 90], ["{", 155]]) },
    { l: "Uw'", a: "Ῡ̀", t: null },
    { l: "Uw;", a: "Ῡ́", t: null },
    { l: "Uw[", a: "Ῡ͂", t: null },
    { l: "a", a: "α", t: new Map([["\"", 313], ["'", 92], [":", 221], [";", 94], ["[", 96], ["]", 98], ["w", 99], ["}", 164]]) },
    { l: "a'", a: "ὰ", t: new Map([["]", 93]]) },
    { l: "a']", a: "ᾲ", t: null },
    { l: "a;", a: "ά", t: new Map([["]", 95]]) },
    { l: "a;]", a: "ᾴ", t: null },
    { l: "a[", a: "ᾶ", t: new Map([["]", 97]]) },
    { l: "a[]", a: "ᾷ", t: null },
    { l: "a]", a: "ᾳ", t: null },
    { l: "aw", a: "ᾱ", t: new Map([["\"", 321], ["'", 100], [":", 229], [";", 102], ["[", 104], ["]", 106]]) },
    { l: "aw'", a: "ᾱ̀", t: new Map([["]", 101]]) },
    { l: "aw']", a: "ᾱ̀ͅ", t: null },
    { l: "aw;", a: "ᾱ́", t: new Map([["]", 103]]) },
    { l: "aw;]", a: "ᾱ́ͅ", t: null },
    { l: "aw[", a: "ᾱ͂", t: new Map([["]", 105]]) },
    { l: "aw[]", a: "ᾱ͂ͅ", t: null },
    { l: "aw]", a: "ᾱͅ", t: null },
    { l: "e", a: "ε", t: new Map([["\"", 329], ["'", 108], [":", 237], [";", 109], ["w", 110]]) },
    { l: "e'", a: "ὲ", t: null },
    { l: "e;", a: "έ", t: null },
    { l: "ew", a: "η", t: new Map([["\"", 332], ["'", 111], [":", 240], [";", 113], ["[", 115], ["]", 117]]) },
    { l: "ew'", a: "ὴ", t: new Map([["]", 112]]) },
    { l: "ew']", a: "ῂ", t: null },
    { l: "ew;", a: "ή", t: new Map([["]", 114]]) },
    { l: "ew;]", a: "ῄ", t: null },
    { l: "ew[", a: "ῆ", t: new Map([["]", 116]]) },
    { l: "ew[]", a: "ῇ", t: null },
    { l: "ew]", a: "ῃ", t: null },
    { l: "i", a: "ι", t: new Map([["\"", 340], ["'", 119], [":", 248], [";", 120], ["[", 121], ["w", 122], ["{", 169], ["}", 173]]) },
    { l: "i'", a: "ὶ", t: null },
    { l: "i;", a: "ί", t: null },
    { l: "i[", a: "ῖ", t: null },
    { l: "iw", a: "ῑ", t: new Map([["\"", 344], ["'", 123], [":", 252], [";", 124], ["[", 125], ["{", 165]]) },
    { l: "iw'", a: "ῑ̀", t: null },
    { l: "iw;", a: "ῑ́", t: null },
    { l: "iw[", a: "ῑ͂", t: null },
    { l: "o", a: "ο", t: new Map([["\"", 348], ["'", 127], [":", 256], [";", 128], ["w", 129]]) },
    { l: "o'", a: "ὸ", t: null },
    { l: "o;", a: "ό", t: null },
    { l: "ow", a: "ω", t: new Map([["\"", 351], ["'", 130], [":", 259], [";", 132], ["[", 134], ["]", 136]]) },
    { l: "ow'", a: "ὼ", t: new Map([["]", 131]]) },
    { l: "ow']", a: "ῲ", t: null },
    { l: "ow;", a: "ώ", t: new Map([["]", 133]]) },
    { l: "ow;]", a: "ῴ", t: null },
    { l: "ow[", a: "ῶ", t: new Map([["]", 135]]) },
    { l: "ow[]", a: "ῷ", t: null },
    { l: "ow]", a: "ῳ", t: null },
    { l: "u", a: "υ", t: new Map([["\"", 359], ["'", 138], [":", 267], [";", 139], ["[", 140], ["w", 141], ["{", 178], ["}", 182]]) },
    { l: "u'", a: "ὺ", t: null },
    { l: "u;", a: "ύ", t: null },
    { l: "u[", a: "ῦ", t: null },
    { l: "uw", a: "ῡ", t: new Map([["\"", 363], ["'", 142], [":", 271], [";", 143], ["[", 144], ["{", 174]]) },
    { l: "uw'", a: "ῡ̀", t: null },
    { l: "uw;", a: "ῡ́", t: null },
    { l: "uw[", a: "ῡ͂", t: null },
    { l: "A}", a: "Ᾰ", t: null },
    { l: "Iw{", a: "Ῑ̈", t: new Map([["'", 147], [";", 148], ["[", 149]]) },
    { l: "Iw{'", a: "Ῑ̈̀", t: null },
    { l: "Iw{;", a: "Ῑ̈́", t: null },
    { l: "Iw{[", a: "Ῑ̈͂", t: null },
    { l: "I{", a: "Ϊ", t: new Map([["'", 151], [";", 152], ["[", 153]]) },
    { l: "I{'", a: "Ϊ̀", t: null },
    { l: "I{;", a: "Ϊ́", t: null },
    { l: "I{[", a: "Ϊ͂", t: null },
    { l: "I}", a: "Ῐ", t: null },
    { l: "Uw{", a: "Ῡ̈", t: new Map([["'", 156], [";", 157], ["[", 158]]) },
    { l: "Uw{'", a: "Ῡ̈̀", t: null },
    { l: "Uw{;", a: "Ῡ̈́", t: null },
    { l: "Uw{[", a: "Ῡ̈͂", t: null },
    { l: "U{", a: "Ϋ", t: new Map([["'", 160], [";", 161], ["[", 162]]) },
    { l: "U{'", a: "Ϋ̀", t: null },
    { l: "U{;", a: "Ϋ́", t: null },
    { l: "U{[", a: "Ϋ͂", t: null },
    { l: "U}", a: "Ῠ", t: null },
    { l: "a}", a: "ᾰ", t: null },
    { l: "iw{", a: "ῑ̈", t: new Map([["'", 166], [";", 167], ["[", 168]]) },
    { l: "iw{'", a: "ῑ̈̀", t: null },
    { l: "iw{;", a: "ῑ̈́", t: null },
    { l: "iw{[", a: "ῑ̈͂", t: null },
    { l: "i{", a: "ϊ", t: new Map([["'", 170], [";", 171], ["[", 172]]) },
    { l: "i{'", a: "ῒ", t: null },
    { l: "i{;", a: "ΐ", t: null },
    { l: "i{[", a: "ῗ", t: null },
    { l: "i}", a: "ῐ", t: null },
    { l: "uw{", a: "ῡ̈", t: new Map([["'", 175], [";", 176], ["[", 177]]) },
    { l: "uw{'", a: "ῡ̈̀", t: null },
    { l: "uw{;", a: "ῡ̈́", t: null },
    { l: "uw{[", a: "ῡ̈͂", t: null },
    { l: "u{", a: "ϋ", t: new Map([["'", 179], [";", 180], ["[", 181]]) },
    { l: "u{'", a: "ῢ", t: null },
    { l: "u{;", a: "ΰ", t: null },
    { l: "u{[", a: "ῧ", t: null },
    { l: "u}", a: "ῠ", t: null },
    { l: "A:", a: "Ἀ", t: new Map([["'", 184], [";", 185], ["[", 186]]) },
    { l: "A:'", a: "Ἂ", t: null },
    { l: "A:;", a: "Ἄ", t: null },
    { l: "A:[", a: "Ἆ", t: null },
    { l: "Aw:", a: "Ᾱ̓", t: new Map([["'", 188], [";", 189], ["[", 190]]) },
    { l: "Aw:'", a: "Ᾱ̓̀", t: null },
    { l: "Aw:;", a: "Ᾱ̓́", t: null },
    { l: "Aw:[", a: "Ᾱ̓͂", t: null },
    { l: "E:", a: "Ἐ", t: new Map([["'", 192], [";", 193]]) },
    { l: "E:'", a: "Ἒ", t: null },
    { l: "E:;", a: "Ἔ", t: null },
    { l: "Ew:", a: "Ἠ", t: new Map([["'", 195], [";", 196], ["[", 197]]) },
    { l: "Ew:'", a: "Ἢ", t: null },
    { l: "Ew:;", a: "Ἤ", t: null },
    { l: "Ew:[", a: "Ἦ", t: null },
    { l: "I:", a: "Ἰ", t: new Map([["'", 199], [";", 200], ["[", 201]]) },
    { l: "I:'", a: "Ἲ", t: null },
    { l: "I:;", a: "Ἴ", t: null },
    { l: "I:[", a: "Ἶ", t: null },
    { l: "Iw:", a: "Ῑ̓", t: new Map([["'", 203], [";", 204], ["[", 205]]) },
    { l: "Iw:'", a: "Ῑ̓̀", t: null },
    { l: "Iw:;", a: "Ῑ̓́", t: null },
    { l: "Iw:[", a: "Ῑ̓͂", t: null },
    { l: "O:", a: "Ὀ", t: new Map([["'", 207], [";", 208]]) },
    { l: "O:'", a: "Ὂ", t: null },
    { l: "O:;", a: "Ὄ", t: null },
    { l: "Ow:", a: "Ὠ", t: new Map([["'", 210], [";", 211], ["[", 212]]) },
    { l: "Ow:'", a: "Ὢ", t: null },
    { l: "Ow:;", a: "Ὤ", t: null },
    { l: "Ow:[", a: "Ὦ", t: null },
    { l: "U:", a: "Υ̓", t: new Map([["'", 214], [";", 215], ["[", 216]]) },
    { l: "U:'", a: "Υ̓̀", t: null },
    { l: "U:;", a: "Υ̓́", t: null },
    { l: "U:[", a: "Υ̓͂", t: null },
    { l: "Uw:", a: "Ῡ̓", t: new Map([["'", 218], [";", 219], ["[", 220]]) },
    { l: "Uw:'", a: "Ῡ̓̀", t: null },
    { l: "Uw:;", a: "Ῡ̓́", t: null },
    { l: "Uw:[", a: "Ῡ̓͂", t: null },
    { l: "a:", a: "ἀ", t: new Map([["'", 222], [";", 224], ["[", 226], ["]", 228]]) },
    { l: "a:'", a: "ἂ", t: new Map([["]", 223]]) },
    { l: "a:']", a: "ᾂ", t: null },
    { l: "a:;", a: "ἄ", t: new Map([["]", 225]]) },
    { l: "a:;]", a: "ᾄ", t: null },
    { l: "a:[", a: "ἆ", t: new Map([["]", 227]]) },
    { l: "a:[]", a: "ᾆ", t: null },
    { l: "a:]", a: "ᾀ", t: null },
    { l: "aw:", a: "ᾱ̓", t: new Map([["'", 230], [";", 232], ["[", 234], ["]", 236]]) },
    { l: "aw:'", a: "ᾱ̓̀", t: new Map([["]", 231]]) },
    { l: "aw:']", a: "ᾱ̓̀ͅ", t: null },
    { l: "aw:;", a: "ᾱ̓́", t: new Map([["]", 233]]) },
    { l: "aw:;]", a: "ᾱ̓́ͅ", t: null },
    { l: "aw:[", a: "ᾱ̓͂", t: new Map([["]", 235]]) },
    { l: "aw:[]", a: "ᾱ̓͂ͅ", t: null },
    { l: "aw:]", a: "ᾱ̓ͅ", t: null },
    { l: "e:", a: "ἐ", t: new Map([["'", 238], [";", 239]]) },
    { l: "e:'", a: "ἒ", t: null },
    { l: "e:;", a: "ἔ", t: null },
    { l: "ew:", a: "ἠ", t: new Map([["'", 241], [";", 243], ["[", 245], ["]", 247]]) },
    { l: "ew:'", a: "ἢ", t: new Map([["]", 242]]) },
    { l: "ew:']", a: "ᾒ", t: null },
    { l: "ew:;", a: "ἤ", t: new Map([["]", 244]]) },
    { l: "ew:;]", a: "ᾔ", t: null },
    { l: "ew:[", a: "ἦ", t: new Map([["]", 246]]) },
    { l: "ew:[]", a: "ᾖ", t: null },
    { l: "ew:]", a: "ᾐ", t: null },
    { l: "i:", a: "ἰ", t: new Map([["'", 249], [";", 250], ["[", 251]]) },
    { l: "i:'", a: "ἲ", t: null },
    { l: "i:;", a: "ἴ", t: null },
    { l: "i:[", a: "ἶ", t: null },
    { l: "iw:", a: "ῑ̓", t: new Map([["'", 253], [";", 254], ["[", 255]]) },
    { l: "iw:'", a: "ῑ̓̀", t: null },
    { l: "iw:;", a: "ῑ̓́", t: null },
    { l: "iw:[", a: "ῑ̓͂", t: null },
    { l: "o:", a: "ὀ", t: new Map([["'", 257], [";", 258]]) },
    { l: "o:'", a: "ὂ", t: null },
    { l: "o:;", a: "ὄ", t: null },
    { l: "ow:", a: "ὠ", t: new Map([["'", 260], [";", 262], ["[", 264], ["]", 266]]) },
    { l: "ow:'", a: "ὢ", t: new Map([["]", 261]]) },
    { l: "ow:']", a: "ᾢ", t: null },
    { l: "ow:;", a: "ὤ", t: new Map([["]", 263]]) },
    { l: "ow:;]", a: "ᾤ", t: null },
    { l: "ow:[", a: "ὦ", t: new Map([["]", 265]]) },
    { l: "ow:[]", a: "ᾦ", t: null },
    { l: "ow:]", a: "ᾠ", t: null },
    { l: "u:", a: "ὐ", t: new Map([["'", 268], [";", 269], ["[", 270]]) },
    { l: "u:'", a: "ὒ", t: null },
    { l: "u:;", a: "ὔ", t: null },
    { l: "u:[", a: "ὖ", t: null },
    { l: "uw:", a: "ῡ̓", t: new Map([["'", 272], [";", 273], ["[", 274]]) },
    { l: "uw:'", a: "ῡ̓̀", t: null },
    { l: "uw:;", a: "ῡ̓́", t: null },
    { l: "uw:[", a: "ῡ̓͂", t: null },
    { l: "A\"", a: "Ἁ", t: new Map([["'", 276], [";", 277], ["[", 278]]) },
    { l: "A\"'", a: "Ἃ", t: null },
    { l: "A\";", a: "Ἅ", t: null },
    { l: "A\"[", a: "Ἇ", t: null },
    { l: "Aw\"", a: "Ᾱ̔", t: new Map([["'", 280], [";", 281], ["[", 282]]) },
    { l: "Aw\"'", a: "Ᾱ̔̀", t: null },
    { l: "Aw\";", a: "Ᾱ̔́", t: null },
    { l: "Aw\"[", a: "Ᾱ̔͂", t: null },
    { l: "E\"", a: "Ἑ", t: new Map([["'", 284], [";", 285]]) },
    { l: "E\"'", a: "Ἓ", t: null },
    { l: "E\";", a: "Ἕ", t: null },
    { l: "Ew\"", a: "Ἡ", t: new Map([["'", 287], [";", 288], ["[", 289]]) },
    { l: "Ew\"'", a: "Ἣ", t: null },
    { l: "Ew\";", a: "Ἥ", t: null },
    { l: "Ew\"[", a: "Ἧ", t: null },
    { l: "I\"", a: "Ἱ", t: new Map([["'", 291], [";", 292], ["[", 293]]) },
    { l: "I\"'", a: "Ἳ", t: null },
    { l: "I\";", a: "Ἵ", t: null },
    { l: "I\"[", a: "Ἷ", t: null },
    { l: "Iw\"", a: "Ῑ̔", t: new Map([["'", 295], [";", 296], ["[", 297]]) },
    { l: "Iw\"'", a: "Ῑ̔̀", t: null },
    { l: "Iw\";", a: "Ῑ̔́", t: null },
    { l: "Iw\"[", a: "Ῑ̔͂", t: null },
    { l: "O\"", a: "Ὁ", t: new Map([["'", 299], [";", 300]]) },
    { l: "O\"'", a: "Ὃ", t: null },
    { l: "O\";", a: "Ὅ", t: null },
    { l: "Ow\"", a: "Ὡ", t: new Map([["'", 302], [";", 303], ["[", 304]]) },
    { l: "Ow\"'", a: "Ὣ", t: null },
    { l: "Ow\";", a: "Ὥ", t: null },
    { l: "Ow\"[", a: "Ὧ", t: null },
    { l: "U\"", a: "Ὑ", t: new Map([["'", 306], [";", 307], ["[", 308]]) },
    { l: "U\"'", a: "Ὓ", t: null },
    { l: "U\";", a: "Ὕ", t: null },
    { l: "U\"[", a: "Ὗ", t: null },
    { l: "Uw\"", a: "Ῡ̔", t: new Map([["'", 310], [";", 311], ["[", 312]]) },
    { l: "Uw\"'", a: "Ῡ̔̀", t: null },
    { l: "Uw\";", a: "Ῡ̔́", t: null },
    { l: "Uw\"[", a: "Ῡ̔͂", t: null },
    { l: "a\"", a: "ἁ", t: new Map([["'", 314], [";", 316], ["[", 318], ["]", 320]]) },
    { l: "a\"'", a: "ἃ", t: new Map([["]", 315]]) },
    { l: "a\"']", a: "ᾃ", t: null },
    { l: "a\";", a: "ἅ", t: new Map([["]", 317]]) },
    { l: "a\";]", a: "ᾅ", t: null },
    { l: "a\"[", a: "ἇ", t: new Map([["]", 319]]) },
    { l: "a\"[]", a: "ᾇ", t: null },
    { l: "a\"]", a: "ᾁ", t: null },
    { l: "aw\"", a: "ᾱ̔", t: new Map([["'", 322], [";", 324], ["[", 326], ["]", 328]]) },
    { l: "aw\"'", a: "ᾱ̔̀", t: new Map([["]", 323]]) },
    { l: "aw\"']", a: "ᾱ̔̀ͅ", t: null },
    { l: "aw\";", a: "ᾱ̔́", t: new Map([["]", 325]]) },
    { l: "aw\";]", a: "ᾱ̔́ͅ", t: null },
    { l: "aw\"[", a: "ᾱ̔͂", t: new Map([["]", 327]]) },
    { l: "aw\"[]", a: "ᾱ̔͂ͅ", t: null },
    { l: "aw\"]", a: "ᾱ̔ͅ", t: null },
    { l: "e\"", a: "ἑ", t: new Map([["'", 330], [";", 331]]) },
    { l: "e\"'", a: "ἓ", t: null },
    { l: "e\";", a: "ἕ", t: null },
    { l: "ew\"", a: "ἡ", t: new Map([["'", 333], [";", 335], ["[", 337], ["]", 339]]) },
    { l: "ew\"'", a: "ἣ", t: new Map([["]", 334]]) },
    { l: "ew\"']", a: "ᾓ", t: null },
    { l: "ew\";", a: "ἥ", t: new Map([["]", 336]]) },
    { l: "ew\";]", a: "ᾕ", t: null },
    { l: "ew\"[", a: "ἧ", t: new Map([["]", 338]]) },
    { l: "ew\"[]", a: "ᾗ", t: null },
    { l: "ew\"]", a: "ᾑ", t: null },
    { l: "i\"", a: "ἱ", t: new Map([["'", 341], [";", 342], ["[", 343]]) },
    { l: "i\"'", a: "ἳ", t: null },
    { l: "i\";", a: "ἵ", t: null },
    { l: "i\"[", a: "ἷ", t: null },
    { l: "iw\"", a: "ῑ̔", t: new Map([["'", 345], [";", 346], ["[", 347]]) },
    { l: "iw\"'", a: "ῑ̔̀", t: null },
    { l: "iw\";", a: "ῑ̔́", t: null },
    { l: "iw\"[", a: "ῑ̔͂", t: null },
    { l: "o\"", a: "ὁ", t: new Map([["'", 349], [";", 350]]) },
    { l: "o\"'", a: "ὃ", t: null },
    { l: "o\";", a: "ὅ", t: null },
    { l: "ow\"", a: "ὡ", t: new Map([["'", 352], [";", 354], ["[", 356], ["]", 358]]) },
    { l: "ow\"'", a: "ὣ", t: new Map([["]", 353]]) },
    { l: "ow\"']", a: "ᾣ", t: null },
    { l: "ow\";", a: "ὥ", t: new Map([["]", 355]]) },
    { l: "ow\";]", a: "ᾥ", t: null },
    { l: "ow\"[", a: "ὧ", t: new Map([["]", 357]]) },
    { l: "ow\"[]", a: "ᾧ", t: null },
    { l: "ow\"]", a: "ᾡ", t: null },
    { l: "u\"", a: "ὑ", t: new Map([["'", 360], [";", 361], ["[", 362]]) },
    { l: "u\"'", a: "ὓ", t: null },
    { l: "u\";", a: "ὕ", t: null },
    { l: "u\"[", a: "ὗ", t: null },
    { l: "uw\"", a: "ῡ̔", t: new Map([["'", 364], [";", 365], ["[", 366]]) },
    { l: "uw\"'", a: "ῡ̔̀", t: null },
    { l: "uw\";", a: "ῡ̔́", t: null },
    { l: "uw\"[", a: "ῡ̔͂", t: null }
];