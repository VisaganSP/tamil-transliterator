// src/utils/transliterationUtils.js
export const transliterateToTamil = (text) => {
  if (!text) return "";
  
  // We need to organize our replacements in a specific order to ensure correct transliteration
  const replacements = [
    // Initial character normalizations
    { pattern: /f/gi, replacement: "qp" },
    { pattern: /B/g, replacement: "b" },
    { pattern: /C/g, replacement: "c" },
    { pattern: /D/g, replacement: "d" },
    { pattern: /G/g, replacement: "g" },
    { pattern: /J/g, replacement: "j" },
    { pattern: /K/g, replacement: "k" },
    { pattern: /M/g, replacement: "m" },
    { pattern: /P/g, replacement: "p" },
    { pattern: /Q/g, replacement: "q" },
    { pattern: /T/g, replacement: "t" },
    { pattern: /V/g, replacement: "v" },
    { pattern: /W/g, replacement: "w" },
    { pattern: /X/g, replacement: "x" },
    { pattern: /Y/g, replacement: "y" },
    { pattern: /Z/g, replacement: "z" },

    // Special character combinations - need to be processed first
    { pattern: /ksh/g, replacement: "\u0B95\u0BCD\u0BB7\u0BCD" },
    { pattern: /sri/g, replacement: "\u0BB8\u0BCD\u0BB0\u0BC0" },
    
    // Complex character combinations (multiple consonants)
    // nth series
    { pattern: /nthau/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BCC" },
    { pattern: /nthai/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC8" },
    { pattern: /nthee/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC7" },
    { pattern: /nthoo/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BCB" },
    { pattern: /nthaa/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BBE" },
    { pattern: /nthuu/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC2" },
    { pattern: /nthii/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC0" },
    { pattern: /ntha/g, replacement: "\u0BA8\u0BCD\u0BA4" },
    { pattern: /nthi/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BBF" },
    { pattern: /nthI/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC0" },
    { pattern: /nthA/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BBE" },
    { pattern: /nthe/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC6" },
    { pattern: /nthE/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC7" },
    { pattern: /ntho/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BCA" },
    { pattern: /nthO/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BCB" },
    { pattern: /nthu/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC1" },
    { pattern: /nthU/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BC2" },
    { pattern: /nth/g, replacement: "\u0BA8\u0BCD\u0BA4\u0BCD" },
    { pattern: / nth/g, replacement: " \u0BA8\u0BCD\u0BA4\u0BCD" },
    
    // Two-character consonant combinations with vowels
    
    // nj series
    { pattern: /njau/g, replacement: "\u0B9E\u0BCC" },
    { pattern: /njai/g, replacement: "\u0B9E\u0BC8" },
    { pattern: /njee/g, replacement: "\u0B9E\u0BC7" },
    { pattern: /njoo/g, replacement: "\u0B9E\u0BCB" },
    { pattern: /njaa/g, replacement: "\u0B9E\u0BBE" },
    { pattern: /njuu/g, replacement: "\u0B9E\u0BC2" },
    { pattern: /njii/g, replacement: "\u0B9E\u0BC0" },
    { pattern: /nja/g, replacement: "\u0B9E" },
    { pattern: /nji/g, replacement: "\u0B9E\u0BBF" },
    { pattern: /njI/g, replacement: "\u0B9E\u0BC0" },
    { pattern: /njA/g, replacement: "\u0B9E\u0BBE" },
    { pattern: /nje/g, replacement: "\u0B9E\u0BC6" },
    { pattern: /njE/g, replacement: "\u0B9E\u0BC7" },
    { pattern: /njo/g, replacement: "\u0B9E\u0BCA" },
    { pattern: /njO/g, replacement: "\u0B9E\u0BCB" },
    { pattern: /nju/g, replacement: "\u0B9E\u0BC1" },
    { pattern: /njU/g, replacement: "\u0B9E\u0BC2" },
    
    // ng series
    { pattern: /ngau/g, replacement: "\u0B99\u0BCC" },
    { pattern: /ngai/g, replacement: "\u0B99\u0BC8" },
    { pattern: /ngee/g, replacement: "\u0B99\u0BC7" },
    { pattern: /ngoo/g, replacement: "\u0B99\u0BCB" },
    { pattern: /ngaa/g, replacement: "\u0B99\u0BBE" },
    { pattern: /nguu/g, replacement: "\u0B99\u0BC2" },
    { pattern: /ngii/g, replacement: "\u0B99\u0BC0" },
    { pattern: /nga/g, replacement: "\u0B99" },
    { pattern: /ngi/g, replacement: "\u0B99\u0BBF" },
    { pattern: /ngI/g, replacement: "\u0B99\u0BC0" },
    { pattern: /ngA/g, replacement: "\u0B99\u0BBE" },
    { pattern: /nge/g, replacement: "\u0B99\u0BC6" },
    { pattern: /ngE/g, replacement: "\u0B99\u0BC7" },
    { pattern: /ngo/g, replacement: "\u0B99\u0BCA" },
    { pattern: /ngO/g, replacement: "\u0B99\u0BCB" },
    { pattern: /ngu/g, replacement: "\u0B99\u0BC1" },
    { pattern: /ngU/g, replacement: "\u0B99\u0BC2" },
    
    // sh series
    { pattern: /shau/g, replacement: "\u0BB7\u0BCC" },
    { pattern: /shai/g, replacement: "\u0BB7\u0BC8" },
    { pattern: /shee/g, replacement: "\u0BB7\u0BC7" },
    { pattern: /shoo/g, replacement: "\u0BB7\u0BCB" },
    { pattern: /shaa/g, replacement: "\u0BB7\u0BBE" },
    { pattern: /shuu/g, replacement: "\u0BB7\u0BC2" },
    { pattern: /shii/g, replacement: "\u0BB7\u0BC0" },
    { pattern: /sha/g, replacement: "\u0BB7" },
    { pattern: /shi/g, replacement: "\u0BB7\u0BBF" },
    { pattern: /shI/g, replacement: "\u0BB7\u0BC0" },
    { pattern: /shA/g, replacement: "\u0BB7\u0BBE" },
    { pattern: /she/g, replacement: "\u0BB7\u0BC6" },
    { pattern: /shE/g, replacement: "\u0BB7\u0BC7" },
    { pattern: /sho/g, replacement: "\u0BB7\u0BCA" },
    { pattern: /shO/g, replacement: "\u0BB7\u0BCB" },
    { pattern: /shu/g, replacement: "\u0BB7\u0BC1" },
    { pattern: /shU/g, replacement: "\u0BB7\u0BC2" },
    
    // zh series
    { pattern: /zhau/g, replacement: "\u0BB4\u0BCC" },
    { pattern: /zhai/g, replacement: "\u0BB4\u0BC8" },
    { pattern: /zhee/g, replacement: "\u0BB4\u0BC7" },
    { pattern: /zhoo/g, replacement: "\u0BB4\u0BCB" },
    { pattern: /zhaa/g, replacement: "\u0BB4\u0BBE" },
    { pattern: /zhuu/g, replacement: "\u0BB4\u0BC2" },
    { pattern: /zhii/g, replacement: "\u0BB4\u0BC0" },
    { pattern: /zha/g, replacement: "\u0BB4" },
    { pattern: /zhi/g, replacement: "\u0BB4\u0BBF" },
    { pattern: /zhI/g, replacement: "\u0BB4\u0BC0" },
    { pattern: /zhA/g, replacement: "\u0BB4\u0BBE" },
    { pattern: /zhe/g, replacement: "\u0BB4\u0BC6" },
    { pattern: /zhE/g, replacement: "\u0BB4\u0BC7" },
    { pattern: /zho/g, replacement: "\u0BB4\u0BCA" },
    { pattern: /zhO/g, replacement: "\u0BB4\u0BCB" },
    { pattern: /zhu/g, replacement: "\u0BB4\u0BC1" },
    { pattern: /zhU/g, replacement: "\u0BB4\u0BC2" },
    
    // ch series
    { pattern: /chau/g, replacement: "\u0B9A\u0BCC" },
    { pattern: /chai/g, replacement: "\u0B9A\u0BC8" },
    { pattern: /chee/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /choo/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /chaa/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /chuu/g, replacement: "\u0B9A\u0BC2" },
    { pattern: /chii/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /cha/g, replacement: "\u0B9A" },
    { pattern: /chi/g, replacement: "\u0B9A\u0BBF" },
    { pattern: /chI/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /chA/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /che/g, replacement: "\u0B9A\u0BC6" },
    { pattern: /chE/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /cho/g, replacement: "\u0B9A\u0BCA" },
    { pattern: /chO/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /chu/g, replacement: "\u0B9A\u0BC1" },
    { pattern: /chU/g, replacement: "\u0B9A\u0BC2" },
    
    // th series
    { pattern: /thau/g, replacement: "\u0BA4\u0BCC" },
    { pattern: /thai/g, replacement: "\u0BA4\u0BC8" },
    { pattern: /thee/g, replacement: "\u0BA4\u0BC7" },
    { pattern: /thoo/g, replacement: "\u0BA4\u0BCB" },
    { pattern: /thaa/g, replacement: "\u0BA4\u0BBE" },
    { pattern: /thuu/g, replacement: "\u0BA4\u0BC2" },
    { pattern: /thii/g, replacement: "\u0BA4\u0BC0" },
    { pattern: /tha/g, replacement: "\u0BA4" },
    { pattern: /thi/g, replacement: "\u0BA4\u0BBF" },
    { pattern: /thI/g, replacement: "\u0BA4\u0BC0" },
    { pattern: /thA/g, replacement: "\u0BA4\u0BBE" },
    { pattern: /the/g, replacement: "\u0BA4\u0BC6" },
    { pattern: /thE/g, replacement: "\u0BA4\u0BC7" },
    { pattern: /tho/g, replacement: "\u0BA4\u0BCA" },
    { pattern: /thO/g, replacement: "\u0BA4\u0BCB" },
    { pattern: /thu/g, replacement: "\u0BA4\u0BC1" },
    { pattern: /thU/g, replacement: "\u0BA4\u0BC2" },
    
    // dh series
    { pattern: /dhau/g, replacement: "\u0BA4\u0BCC" },
    { pattern: /dhai/g, replacement: "\u0BA4\u0BC8" },
    { pattern: /dhee/g, replacement: "\u0BA4\u0BC7" },
    { pattern: /dhoo/g, replacement: "\u0BA4\u0BCB" },
    { pattern: /dhaa/g, replacement: "\u0BA4\u0BBE" },
    { pattern: /dhuu/g, replacement: "\u0BA4\u0BC2" },
    { pattern: /dhii/g, replacement: "\u0BA4\u0BC0" },
    { pattern: /dha/g, replacement: "\u0BA4" },
    { pattern: /dhi/g, replacement: "\u0BA4\u0BBF" },
    { pattern: /dhI/g, replacement: "\u0BA4\u0BC0" },
    { pattern: /dhA/g, replacement: "\u0BA4\u0BBE" },
    { pattern: /dhe/g, replacement: "\u0BA4\u0BC6" },
    { pattern: /dhE/g, replacement: "\u0BA4\u0BC7" },
    { pattern: /dho/g, replacement: "\u0BA4\u0BCA" },
    { pattern: /dhO/g, replacement: "\u0BA4\u0BCB" },
    { pattern: /dhu/g, replacement: "\u0BA4\u0BC1" },
    { pattern: /dhU/g, replacement: "\u0BA4\u0BC2" },
    
    // Special handling for 'n' with position variations
    // 'n' with a leading space
    { pattern: / nau/g, replacement: " \u0BA8\u0BCC" },
    { pattern: / nai/g, replacement: " \u0BA8\u0BC8" },
    { pattern: / nee/g, replacement: " \u0BA8\u0BC7" },
    { pattern: / noo/g, replacement: " \u0BA8\u0BCB" },
    { pattern: / naa/g, replacement: " \u0BA8\u0BBE" },
    { pattern: / nuu/g, replacement: " \u0BA8\u0BC2" },
    { pattern: / nii/g, replacement: " \u0BA8\u0BC0" },
    { pattern: / na/g, replacement: " \u0BA8" },
    { pattern: / ni/g, replacement: " \u0BA8\u0BBF" },
    { pattern: / nI/g, replacement: " \u0BA8\u0BC0" },
    { pattern: / nA/g, replacement: " \u0BA8\u0BBE" },
    { pattern: / ne/g, replacement: " \u0BA8\u0BC6" },
    { pattern: / nE/g, replacement: " \u0BA8\u0BC7" },
    { pattern: / no/g, replacement: " \u0BA8\u0BCA" },
    { pattern: / nO/g, replacement: " \u0BA8\u0BCB" },
    { pattern: / nu/g, replacement: " \u0BA8\u0BC1" },
    { pattern: / nU/g, replacement: " \u0BA8\u0BC2" },
    { pattern: / n/g, replacement: " \u0BA8\u0BCD" },
    
    // 'n' with hyphen before it
    { pattern: /-nau/g, replacement: "\u0BA8\u0BCC" },
    { pattern: /-nai/g, replacement: "\u0BA8\u0BC8" },
    { pattern: /-nee/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /-noo/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /-naa/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /-nuu/g, replacement: "\u0BA8\u0BC2" },
    { pattern: /-nii/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /-na/g, replacement: "\u0BA8" },
    { pattern: /-ni/g, replacement: "\u0BA8\u0BBF" },
    { pattern: /-nI/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /-nA/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /-ne/g, replacement: "\u0BA8\u0BC6" },
    { pattern: /-nE/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /-no/g, replacement: "\u0BA8\u0BCA" },
    { pattern: /-nO/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /-nu/g, replacement: "\u0BA8\u0BC1" },
    { pattern: /-nU/g, replacement: "\u0BA8\u0BC2" },
    { pattern: /-n/g, replacement: "\u0BA8\u0BCD" },
    
    // 'n' with hyphen after it
    { pattern: /n-au/g, replacement: "\u0BA8\u0BCC" },
    { pattern: /n-ai/g, replacement: "\u0BA8\u0BC8" },
    { pattern: /n-ee/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /n-oo/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /n-aa/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /n-uu/g, replacement: "\u0BA8\u0BC2" },
    { pattern: /n-ii/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /n-a/g, replacement: "\u0BA8" },
    { pattern: /n-i/g, replacement: "\u0BA8\u0BBF" },
    { pattern: /n-I/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /n-A/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /n-e/g, replacement: "\u0BA8\u0BC6" },
    { pattern: /n-E/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /n-o/g, replacement: "\u0BA8\u0BCA" },
    { pattern: /n-O/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /n-u/g, replacement: "\u0BA8\u0BC1" },
    { pattern: /n-U/g, replacement: "\u0BA8\u0BC2" },
    { pattern: /n-/g, replacement: "\u0BA8\u0BCD" },
    
    // 'w' series (maps to na)
    { pattern: /wau/g, replacement: "\u0BA8\u0BCC" },
    { pattern: /wai/g, replacement: "\u0BA8\u0BC8" },
    { pattern: /wee/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /woo/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /waa/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /wuu/g, replacement: "\u0BA8\u0BC2" },
    { pattern: /wii/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /wa/g, replacement: "\u0BA8" },
    { pattern: /wi/g, replacement: "\u0BA8\u0BBF" },
    { pattern: /wI/g, replacement: "\u0BA8\u0BC0" },
    { pattern: /wA/g, replacement: "\u0BA8\u0BBE" },
    { pattern: /we/g, replacement: "\u0BA8\u0BC6" },
    { pattern: /wE/g, replacement: "\u0BA8\u0BC7" },
    { pattern: /wo/g, replacement: "\u0BA8\u0BCA" },
    { pattern: /wO/g, replacement: "\u0BA8\u0BCB" },
    { pattern: /wu/g, replacement: "\u0BA8\u0BC1" },
    { pattern: /wU/g, replacement: "\u0BA8\u0BC2" },
    
    // 'z' series also maps to zha
    { pattern: /zau/g, replacement: "\u0BB4\u0BCC" },
    { pattern: /zai/g, replacement: "\u0BB4\u0BC8" },
    { pattern: /zee/g, replacement: "\u0BB4\u0BC7" },
    { pattern: /zoo/g, replacement: "\u0BB4\u0BCB" },
    { pattern: /zaa/g, replacement: "\u0BB4\u0BBE" },
    { pattern: /zuu/g, replacement: "\u0BB4\u0BC2" },
    { pattern: /zii/g, replacement: "\u0BB4\u0BC0" },
    { pattern: /za/g, replacement: "\u0BB4" },
    { pattern: /zi/g, replacement: "\u0BB4\u0BBF" },
    { pattern: /zI/g, replacement: "\u0BB4\u0BC0" },
    { pattern: /zA/g, replacement: "\u0BB4\u0BBE" },
    { pattern: /ze/g, replacement: "\u0BB4\u0BC6" },
    { pattern: /zE/g, replacement: "\u0BB4\u0BC7" },
    { pattern: /zo/g, replacement: "\u0BB4\u0BCA" },
    { pattern: /zO/g, replacement: "\u0BB4\u0BCB" },
    { pattern: /zu/g, replacement: "\u0BB4\u0BC1" },
    { pattern: /zU/g, replacement: "\u0BB4\u0BC2" },
    
    // Single consonants with vowels - this is the most critical section for proper transliteration
    
    // n series - positioned near the top to ensure these are processed before the bare 'n'
    { pattern: /nau/g, replacement: "\u0BA9\u0BCC" },
    { pattern: /nai/g, replacement: "\u0BA9\u0BC8" },
    { pattern: /nee/g, replacement: "\u0BA9\u0BC7" },
    { pattern: /noo/g, replacement: "\u0BA9\u0BCB" },
    { pattern: /naa/g, replacement: "\u0BA9\u0BBE" }, // This fixed the naa -> ந்ஆ issue
    { pattern: /nuu/g, replacement: "\u0BA9\u0BC2" },
    { pattern: /nii/g, replacement: "\u0BA9\u0BC0" },
    { pattern: /na/g, replacement: "\u0BA9" },
    { pattern: /ni/g, replacement: "\u0BA9\u0BBF" },
    { pattern: /nI/g, replacement: "\u0BA9\u0BC0" },
    { pattern: /nA/g, replacement: "\u0BA9\u0BBE" },
    { pattern: /ne/g, replacement: "\u0BA9\u0BC6" },
    { pattern: /nE/g, replacement: "\u0BA9\u0BC7" },
    { pattern: /no/g, replacement: "\u0BA9\u0BCA" },
    { pattern: /nO/g, replacement: "\u0BA9\u0BCB" },
    { pattern: /nu/g, replacement: "\u0BA9\u0BC1" },
    { pattern: /nU/g, replacement: "\u0BA9\u0BC2" },
    
    // k series
    { pattern: /kau/g, replacement: "\u0B95\u0BCC" },
    { pattern: /kai/g, replacement: "\u0B95\u0BC8" },
    { pattern: /kee/g, replacement: "\u0B95\u0BC7" },
    { pattern: /koo/g, replacement: "\u0B95\u0BCB" },
    { pattern: /kaa/g, replacement: "\u0B95\u0BBE" },
    { pattern: /kuu/g, replacement: "\u0B95\u0BC2" },
    { pattern: /kii/g, replacement: "\u0B95\u0BC0" },
    { pattern: /ka/g, replacement: "\u0B95" },
    { pattern: /ki/g, replacement: "\u0B95\u0BBF" },
    { pattern: /kI/g, replacement: "\u0B95\u0BC0" },
    { pattern: /kA/g, replacement: "\u0B95\u0BBE" },
    { pattern: /ke/g, replacement: "\u0B95\u0BC6" },
    { pattern: /kE/g, replacement: "\u0B95\u0BC7" },
    { pattern: /ko/g, replacement: "\u0B95\u0BCA" },
    { pattern: /kO/g, replacement: "\u0B95\u0BCB" },
    { pattern: /ku/g, replacement: "\u0B95\u0BC1" },
    { pattern: /kU/g, replacement: "\u0B95\u0BC2" },
    
    // g series (maps to ka)
    { pattern: /gau/g, replacement: "\u0B95\u0BCC" },
    { pattern: /gai/g, replacement: "\u0B95\u0BC8" },
    { pattern: /gee/g, replacement: "\u0B95\u0BC7" },
    { pattern: /goo/g, replacement: "\u0B95\u0BCB" },
    { pattern: /gaa/g, replacement: "\u0B95\u0BBE" },
    { pattern: /guu/g, replacement: "\u0B95\u0BC2" },
    { pattern: /gii/g, replacement: "\u0B95\u0BC0" },
    { pattern: /ga/g, replacement: "\u0B95" },
    { pattern: /gi/g, replacement: "\u0B95\u0BBF" },
    { pattern: /gI/g, replacement: "\u0B95\u0BC0" },
    { pattern: /gA/g, replacement: "\u0B95\u0BBE" },
    { pattern: /ge/g, replacement: "\u0B95\u0BC6" },
    { pattern: /gE/g, replacement: "\u0B95\u0BC7" },
    { pattern: /go/g, replacement: "\u0B95\u0BCA" },
    { pattern: /gO/g, replacement: "\u0B95\u0BCB" },
    { pattern: /gu/g, replacement: "\u0B95\u0BC1" },
    { pattern: /gU/g, replacement: "\u0B95\u0BC2" },
    
    // c series
    { pattern: /cau/g, replacement: "\u0B9A\u0BCC" },
    { pattern: /cai/g, replacement: "\u0B9A\u0BC8" },
    { pattern: /cee/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /coo/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /caa/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /cuu/g, replacement: "\u0B9A\u0BC2" },
    { pattern: /cii/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /ca/g, replacement: "\u0B9A" },
    { pattern: /ci/g, replacement: "\u0B9A\u0BBF" },
    { pattern: /cI/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /cA/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /ce/g, replacement: "\u0B9A\u0BC6" },
    { pattern: /cE/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /co/g, replacement: "\u0B9A\u0BCA" },
    { pattern: /cO/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /cu/g, replacement: "\u0B9A\u0BC1" },
    { pattern: /cU/g, replacement: "\u0B9A\u0BC2" },
    
    // s series (also maps to sa)
    { pattern: /sau/g, replacement: "\u0B9A\u0BCC" },
    { pattern: /sai/g, replacement: "\u0B9A\u0BC8" },
    { pattern: /see/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /soo/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /saa/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /suu/g, replacement: "\u0B9A\u0BC2" },
    { pattern: /sii/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /sa/g, replacement: "\u0B9A" },
    { pattern: /si/g, replacement: "\u0B9A\u0BBF" },
    { pattern: /sI/g, replacement: "\u0B9A\u0BC0" },
    { pattern: /sA/g, replacement: "\u0B9A\u0BBE" },
    { pattern: /se/g, replacement: "\u0B9A\u0BC6" },
    { pattern: /sE/g, replacement: "\u0B9A\u0BC7" },
    { pattern: /so/g, replacement: "\u0B9A\u0BCA" },
    { pattern: /sO/g, replacement: "\u0B9A\u0BCB" },
    { pattern: /su/g, replacement: "\u0B9A\u0BC1" },
    { pattern: /sU/g, replacement: "\u0B9A\u0BC2" },
    
    // S series (maps to sa Sanskrit) - these should be processed before the basic 's'
    { pattern: /-sau/g, replacement: "\u0BB8\u0BCC" },
    { pattern: /-sai/g, replacement: "\u0BB8\u0BC8" },
    { pattern: /-see/g, replacement: "\u0BB8\u0BC7" },
    { pattern: /-soo/g, replacement: "\u0BB8\u0BCB" },
    { pattern: /-saa/g, replacement: "\u0BB8\u0BBE" },
    { pattern: /-suu/g, replacement: "\u0BB8\u0BC2" },
    { pattern: /-sii/g, replacement: "\u0BB8\u0BC0" },
    { pattern: /-sa/g, replacement: "\u0BB8" },
    { pattern: /-si/g, replacement: "\u0BB8\u0BBF" },
    { pattern: /-sI/g, replacement: "\u0BB8\u0BC0" },
    { pattern: /-sA/g, replacement: "\u0BB8\u0BBE" },
    { pattern: /-se/g, replacement: "\u0BB8\u0BC6" },
    { pattern: /-sE/g, replacement: "\u0BB8\u0BC7" },
    { pattern: /-so/g, replacement: "\u0BB8\u0BCA" },
    { pattern: /-sO/g, replacement: "\u0BB8\u0BCB" },
    { pattern: /-su/g, replacement: "\u0BB8\u0BC1" },
    { pattern: /-sU/g, replacement: "\u0BB8\u0BC2" },
    
    { pattern: /Sau/g, replacement: "\u0BB8\u0BCC" },
    { pattern: /Sai/g, replacement: "\u0BB8\u0BC8" },
    { pattern: /See/g, replacement: "\u0BB8\u0BC7" },
    { pattern: /Soo/g, replacement: "\u0BB8\u0BCB" },
    { pattern: /Saa/g, replacement: "\u0BB8\u0BBE" },
    { pattern: /Suu/g, replacement: "\u0BB8\u0BC2" },
    { pattern: /Sii/g, replacement: "\u0BB8\u0BC0" },
    { pattern: /Sa/g, replacement: "\u0BB8" },
    { pattern: /Si/g, replacement: "\u0BB8\u0BBF" },
    { pattern: /SI/g, replacement: "\u0BB8\u0BC0" },
    { pattern: /SA/g, replacement: "\u0BB8\u0BBE" },
    { pattern: /Se/g, replacement: "\u0BB8\u0BC6" },
    { pattern: /SE/g, replacement: "\u0BB8\u0BC7" },
    { pattern: /So/g, replacement: "\u0BB8\u0BCA" },
    { pattern: /SO/g, replacement: "\u0BB8\u0BCB" },
    { pattern: /Su/g, replacement: "\u0BB8\u0BC1" },
    { pattern: /SU/g, replacement: "\u0BB8\u0BC2" },
    
    // j series
    { pattern: /jau/g, replacement: "\u0B9C\u0BCC" },
    { pattern: /jai/g, replacement: "\u0B9C\u0BC8" },
    { pattern: /jee/g, replacement: "\u0B9C\u0BC7" },
    { pattern: /joo/g, replacement: "\u0B9C\u0BCB" },
    { pattern: /jaa/g, replacement: "\u0B9C\u0BBE" },
    { pattern: /juu/g, replacement: "\u0B9C\u0BC2" },
    { pattern: /jii/g, replacement: "\u0B9C\u0BC0" },
    { pattern: /ja/g, replacement: "\u0B9C" },
    { pattern: /ji/g, replacement: "\u0B9C\u0BBF" },
    { pattern: /jI/g, replacement: "\u0B9C\u0BC0" },
    { pattern: /jA/g, replacement: "\u0B9C\u0BBE" },
    { pattern: /je/g, replacement: "\u0B9C\u0BC6" },
    { pattern: /jE/g, replacement: "\u0B9C\u0BC7" },
    { pattern: /jo/g, replacement: "\u0B9C\u0BCA" },
    { pattern: /jO/g, replacement: "\u0B9C\u0BCB" },
    { pattern: /ju/g, replacement: "\u0B9C\u0BC1" },
    { pattern: /jU/g, replacement: "\u0B9C\u0BC2" },
    
    // t series
    { pattern: /tau/g, replacement: "\u0B9F\u0BCC" },
    { pattern: /tai/g, replacement: "\u0B9F\u0BC8" },
    { pattern: /tee/g, replacement: "\u0B9F\u0BC7" },
    { pattern: /too/g, replacement: "\u0B9F\u0BCB" },
    { pattern: /taa/g, replacement: "\u0B9F\u0BBE" },
    { pattern: /tuu/g, replacement: "\u0B9F\u0BC2" },
    { pattern: /tii/g, replacement: "\u0B9F\u0BC0" },
    { pattern: /ta/g, replacement: "\u0B9F" },
    { pattern: /ti/g, replacement: "\u0B9F\u0BBF" },
    { pattern: /tI/g, replacement: "\u0B9F\u0BC0" },
    { pattern: /tA/g, replacement: "\u0B9F\u0BBE" },
    { pattern: /te/g, replacement: "\u0B9F\u0BC6" },
    { pattern: /tE/g, replacement: "\u0B9F\u0BC7" },
    { pattern: /to/g, replacement: "\u0B9F\u0BCA" },
    { pattern: /tO/g, replacement: "\u0B9F\u0BCB" },
    { pattern: /tu/g, replacement: "\u0B9F\u0BC1" },
    { pattern: /tU/g, replacement: "\u0B9F\u0BC2" },
    
    // d series (maps to ta)
    { pattern: /dau/g, replacement: "\u0B9F\u0BCC" },
    { pattern: /dai/g, replacement: "\u0B9F\u0BC8" },
    { pattern: /dee/g, replacement: "\u0B9F\u0BC7" },
    { pattern: /doo/g, replacement: "\u0B9F\u0BCB" },
    { pattern: /daa/g, replacement: "\u0B9F\u0BBE" },
    { pattern: /duu/g, replacement: "\u0B9F\u0BC2" },
    { pattern: /dii/g, replacement: "\u0B9F\u0BC0" },
    { pattern: /da/g, replacement: "\u0B9F" },
    { pattern: /di/g, replacement: "\u0B9F\u0BBF" },
    { pattern: /dI/g, replacement: "\u0B9F\u0BC0" },
    { pattern: /dA/g, replacement: "\u0B9F\u0BBE" },
    { pattern: /de/g, replacement: "\u0B9F\u0BC6" },
    { pattern: /dE/g, replacement: "\u0B9F\u0BC7" },
    { pattern: /do/g, replacement: "\u0B9F\u0BCA" },
    { pattern: /dO/g, replacement: "\u0B9F\u0BCB" },
    { pattern: /du/g, replacement: "\u0B9F\u0BC1" },
    { pattern: /dU/g, replacement: "\u0B9F\u0BC2" },
    
    // N series (Na - ண)
    { pattern: /Nau/g, replacement: "\u0BA3\u0BCC" },
    { pattern: /Nai/g, replacement: "\u0BA3\u0BC8" },
    { pattern: /Nee/g, replacement: "\u0BA3\u0BC7" },
    { pattern: /Noo/g, replacement: "\u0BA3\u0BCB" },
    { pattern: /Naa/g, replacement: "\u0BA3\u0BBE" },
    { pattern: /Nuu/g, replacement: "\u0BA3\u0BC2" },
    { pattern: /Nii/g, replacement: "\u0BA3\u0BC0" },
    { pattern: /Na/g, replacement: "\u0BA3" },
    { pattern: /Ni/g, replacement: "\u0BA3\u0BBF" },
    { pattern: /NI/g, replacement: "\u0BA3\u0BC0" },
    { pattern: /NA/g, replacement: "\u0BA3\u0BBE" },
    { pattern: /Ne/g, replacement: "\u0BA3\u0BC6" },
    { pattern: /NE/g, replacement: "\u0BA3\u0BC7" },
    { pattern: /No/g, replacement: "\u0BA3\u0BCA" },
    { pattern: /NO/g, replacement: "\u0BA3\u0BCB" },
    { pattern: /Nu/g, replacement: "\u0BA3\u0BC1" },
    { pattern: /NU/g, replacement: "\u0BA3\u0BC2" },
    
    // p series
    { pattern: /pau/g, replacement: "\u0BAA\u0BCC" },
    { pattern: /pai/g, replacement: "\u0BAA\u0BC8" },
    { pattern: /pee/g, replacement: "\u0BAA\u0BC7" },
    { pattern: /poo/g, replacement: "\u0BAA\u0BCB" },
    { pattern: /paa/g, replacement: "\u0BAA\u0BBE" },
    { pattern: /puu/g, replacement: "\u0BAA\u0BC2" },
    { pattern: /pii/g, replacement: "\u0BAA\u0BC0" },
    { pattern: /pa/g, replacement: "\u0BAA" },
    { pattern: /pi/g, replacement: "\u0BAA\u0BBF" },
    { pattern: /pI/g, replacement: "\u0BAA\u0BC0" },
    { pattern: /pA/g, replacement: "\u0BAA\u0BBE" },
    { pattern: /pe/g, replacement: "\u0BAA\u0BC6" },
    { pattern: /pE/g, replacement: "\u0BAA\u0BC7" },
    { pattern: /po/g, replacement: "\u0BAA\u0BCA" },
    { pattern: /pO/g, replacement: "\u0BAA\u0BCB" },
    { pattern: /pu/g, replacement: "\u0BAA\u0BC1" },
    { pattern: /pU/g, replacement: "\u0BAA\u0BC2" },
    
    // b series (maps to pa)
    { pattern: /bau/g, replacement: "\u0BAA\u0BCC" },
    { pattern: /bai/g, replacement: "\u0BAA\u0BC8" },
    { pattern: /bee/g, replacement: "\u0BAA\u0BC7" },
    { pattern: /boo/g, replacement: "\u0BAA\u0BCB" },
    { pattern: /baa/g, replacement: "\u0BAA\u0BBE" },
    { pattern: /buu/g, replacement: "\u0BAA\u0BC2" },
    { pattern: /bii/g, replacement: "\u0BAA\u0BC0" },
    { pattern: /ba/g, replacement: "\u0BAA" },
    { pattern: /bi/g, replacement: "\u0BAA\u0BBF" },
    { pattern: /bI/g, replacement: "\u0BAA\u0BC0" },
    { pattern: /bA/g, replacement: "\u0BAA\u0BBE" },
    { pattern: /be/g, replacement: "\u0BAA\u0BC6" },
    { pattern: /bE/g, replacement: "\u0BAA\u0BC7" },
    { pattern: /bo/g, replacement: "\u0BAA\u0BCA" },
    { pattern: /bO/g, replacement: "\u0BAA\u0BCB" },
    { pattern: /bu/g, replacement: "\u0BAA\u0BC1" },
    { pattern: /bU/g, replacement: "\u0BAA\u0BC2" },
    
    // m series
    { pattern: /mau/g, replacement: "\u0BAE\u0BCC" },
    { pattern: /mai/g, replacement: "\u0BAE\u0BC8" },
    { pattern: /mee/g, replacement: "\u0BAE\u0BC7" },
    { pattern: /moo/g, replacement: "\u0BAE\u0BCB" },
    { pattern: /maa/g, replacement: "\u0BAE\u0BBE" },
    { pattern: /muu/g, replacement: "\u0BAE\u0BC2" },
    { pattern: /mii/g, replacement: "\u0BAE\u0BC0" },
    { pattern: /ma/g, replacement: "\u0BAE" },
    { pattern: /mi/g, replacement: "\u0BAE\u0BBF" },
    { pattern: /mI/g, replacement: "\u0BAE\u0BC0" },
    { pattern: /mA/g, replacement: "\u0BAE\u0BBE" },
    { pattern: /me/g, replacement: "\u0BAE\u0BC6" },
    { pattern: /mE/g, replacement: "\u0BAE\u0BC7" },
    { pattern: /mo/g, replacement: "\u0BAE\u0BCA" },
    { pattern: /mO/g, replacement: "\u0BAE\u0BCB" },
    { pattern: /mu/g, replacement: "\u0BAE\u0BC1" },
    { pattern: /mU/g, replacement: "\u0BAE\u0BC2" },
    
    // y series
    { pattern: /yau/g, replacement: "\u0BAF\u0BCC" },
    { pattern: /yai/g, replacement: "\u0BAF\u0BC8" },
    { pattern: /yee/g, replacement: "\u0BAF\u0BC7" },
    { pattern: /yoo/g, replacement: "\u0BAF\u0BCB" },
    { pattern: /yaa/g, replacement: "\u0BAF\u0BBE" },
    { pattern: /yuu/g, replacement: "\u0BAF\u0BC2" },
    { pattern: /yii/g, replacement: "\u0BAF\u0BC0" },
    { pattern: /ya/g, replacement: "\u0BAF" },
    { pattern: /yi/g, replacement: "\u0BAF\u0BBF" },
    { pattern: /yI/g, replacement: "\u0BAF\u0BC0" },
    { pattern: /yA/g, replacement: "\u0BAF\u0BBE" },
    { pattern: /ye/g, replacement: "\u0BAF\u0BC6" },
    { pattern: /yE/g, replacement: "\u0BAF\u0BC7" },
    { pattern: /yo/g, replacement: "\u0BAF\u0BCA" },
    { pattern: /yO/g, replacement: "\u0BAF\u0BCB" },
    { pattern: /yu/g, replacement: "\u0BAF\u0BC1" },
    { pattern: /yU/g, replacement: "\u0BAF\u0BC2" },
    
    // r series
    { pattern: /rau/g, replacement: "\u0BB0\u0BCC" },
    { pattern: /rai/g, replacement: "\u0BB0\u0BC8" },
    { pattern: /ree/g, replacement: "\u0BB0\u0BC7" },
    { pattern: /roo/g, replacement: "\u0BB0\u0BCB" },
    { pattern: /raa/g, replacement: "\u0BB0\u0BBE" },
    { pattern: /ruu/g, replacement: "\u0BB0\u0BC2" },
    { pattern: /rii/g, replacement: "\u0BB0\u0BC0" },
    { pattern: /ra/g, replacement: "\u0BB0" },
    { pattern: /ri/g, replacement: "\u0BB0\u0BBF" },
    { pattern: /rI/g, replacement: "\u0BB0\u0BC0" },
    { pattern: /rA/g, replacement: "\u0BB0\u0BBE" },
    { pattern: /re/g, replacement: "\u0BB0\u0BC6" },
    { pattern: /rE/g, replacement: "\u0BB0\u0BC7" },
    { pattern: /ro/g, replacement: "\u0BB0\u0BCA" },
    { pattern: /rO/g, replacement: "\u0BB0\u0BCB" },
    { pattern: /ru/g, replacement: "\u0BB0\u0BC1" },
    { pattern: /rU/g, replacement: "\u0BB0\u0BC2" },
    
    // R series (Ra)
    { pattern: /Rau/g, replacement: "\u0BB1\u0BCC" },
    { pattern: /Rai/g, replacement: "\u0BB1\u0BC8" },
    { pattern: /Ree/g, replacement: "\u0BB1\u0BC7" },
    { pattern: /Roo/g, replacement: "\u0BB1\u0BCB" },
    { pattern: /Raa/g, replacement: "\u0BB1\u0BBE" },
    { pattern: /Ruu/g, replacement: "\u0BB1\u0BC2" },
    { pattern: /Rii/g, replacement: "\u0BB1\u0BC0" },
    { pattern: /Ra/g, replacement: "\u0BB1" },
    { pattern: /Ri/g, replacement: "\u0BB1\u0BBF" },
    { pattern: /RI/g, replacement: "\u0BB1\u0BC0" },
    { pattern: /RA/g, replacement: "\u0BB1\u0BBE" },
    { pattern: /Re/g, replacement: "\u0BB1\u0BC6" },
    { pattern: /RE/g, replacement: "\u0BB1\u0BC7" },
    { pattern: /Ro/g, replacement: "\u0BB1\u0BCA" },
    { pattern: /RO/g, replacement: "\u0BB1\u0BCB" },
    { pattern: /Ru/g, replacement: "\u0BB1\u0BC1" },
    { pattern: /RU/g, replacement: "\u0BB1\u0BC2" },
    
    // l series
    { pattern: /lau/g, replacement: "\u0BB2\u0BCC" },
    { pattern: /lai/g, replacement: "\u0BB2\u0BC8" },
    { pattern: /lee/g, replacement: "\u0BB2\u0BC7" },
    { pattern: /loo/g, replacement: "\u0BB2\u0BCB" },
    { pattern: /laa/g, replacement: "\u0BB2\u0BBE" },
    { pattern: /luu/g, replacement: "\u0BB2\u0BC2" },
    { pattern: /lii/g, replacement: "\u0BB2\u0BC0" },
    { pattern: /la/g, replacement: "\u0BB2" },
    { pattern: /li/g, replacement: "\u0BB2\u0BBF" },
    { pattern: /lI/g, replacement: "\u0BB2\u0BC0" },
    { pattern: /lA/g, replacement: "\u0BB2\u0BBE" },
    { pattern: /le/g, replacement: "\u0BB2\u0BC6" },
    { pattern: /lE/g, replacement: "\u0BB2\u0BC7" },
    { pattern: /lo/g, replacement: "\u0BB2\u0BCA" },
    { pattern: /lO/g, replacement: "\u0BB2\u0BCB" },
    { pattern: /lu/g, replacement: "\u0BB2\u0BC1" },
    { pattern: /lU/g, replacement: "\u0BB2\u0BC2" },
    
    // L series
    { pattern: /Lau/g, replacement: "\u0BB3\u0BCC" },
    { pattern: /Lai/g, replacement: "\u0BB3\u0BC8" },
    { pattern: /Lee/g, replacement: "\u0BB3\u0BC7" },
    { pattern: /Loo/g, replacement: "\u0BB3\u0BCB" },
    { pattern: /Laa/g, replacement: "\u0BB3\u0BBE" },
    { pattern: /Luu/g, replacement: "\u0BB3\u0BC2" },
    { pattern: /Lii/g, replacement: "\u0BB3\u0BC0" },
    { pattern: /La/g, replacement: "\u0BB3" },
    { pattern: /Li/g, replacement: "\u0BB3\u0BBF" },
    { pattern: /LI/g, replacement: "\u0BB3\u0BC0" },
    { pattern: /LA/g, replacement: "\u0BB3\u0BBE" },
    { pattern: /Le/g, replacement: "\u0BB3\u0BC6" },
    { pattern: /LE/g, replacement: "\u0BB3\u0BC7" },
    { pattern: /Lo/g, replacement: "\u0BB3\u0BCA" },
    { pattern: /LO/g, replacement: "\u0BB3\u0BCB" },
    { pattern: /Lu/g, replacement: "\u0BB3\u0BC1" },
    { pattern: /LU/g, replacement: "\u0BB3\u0BC2" },
    
    // v series
    { pattern: /vau/g, replacement: "\u0BB5\u0BCC" },
    { pattern: /vai/g, replacement: "\u0BB5\u0BC8" },
    { pattern: /vee/g, replacement: "\u0BB5\u0BC7" },
    { pattern: /voo/g, replacement: "\u0BB5\u0BCB" },
    { pattern: /vaa/g, replacement: "\u0BB5\u0BBE" },
    { pattern: /vuu/g, replacement: "\u0BB5\u0BC2" },
    { pattern: /vii/g, replacement: "\u0BB5\u0BC0" },
    { pattern: /va/g, replacement: "\u0BB5" },
    { pattern: /vi/g, replacement: "\u0BB5\u0BBF" },
    { pattern: /vI/g, replacement: "\u0BB5\u0BC0" },
    { pattern: /vA/g, replacement: "\u0BB5\u0BBE" },
    { pattern: /ve/g, replacement: "\u0BB5\u0BC6" },
    { pattern: /vE/g, replacement: "\u0BB5\u0BC7" },
    { pattern: /vo/g, replacement: "\u0BB5\u0BCA" },
    { pattern: /vO/g, replacement: "\u0BB5\u0BCB" },
    { pattern: /vu/g, replacement: "\u0BB5\u0BC1" },
    { pattern: /vU/g, replacement: "\u0BB5\u0BC2" },
    
    // h series
    { pattern: /hau/g, replacement: "\u0BB9\u0BCC" },
    { pattern: /hai/g, replacement: "\u0BB9\u0BC8" },
    { pattern: /hee/g, replacement: "\u0BB9\u0BC7" },
    { pattern: /hoo/g, replacement: "\u0BB9\u0BCB" },
    { pattern: /haa/g, replacement: "\u0BB9\u0BBE" },
    { pattern: /huu/g, replacement: "\u0BB9\u0BC2" },
    { pattern: /hii/g, replacement: "\u0BB9\u0BC0" },
    { pattern: /ha/g, replacement: "\u0BB9" },
    { pattern: /hi/g, replacement: "\u0BB9\u0BBF" },
    { pattern: /hI/g, replacement: "\u0BB9\u0BC0" },
    { pattern: /hA/g, replacement: "\u0BB9\u0BBE" },
    { pattern: /he/g, replacement: "\u0BB9\u0BC6" },
    { pattern: /hE/g, replacement: "\u0BB9\u0BC7" },
    { pattern: /ho/g, replacement: "\u0BB9\u0BCA" },
    { pattern: /hO/g, replacement: "\u0BB9\u0BCB" },
    { pattern: /hu/g, replacement: "\u0BB9\u0BC1" },
    { pattern: /hU/g, replacement: "\u0BB9\u0BC2" },
    
    // H series (maps to ha)
    { pattern: /Hau/g, replacement: "\u0BB9\u0BCC" },
    { pattern: /Hai/g, replacement: "\u0BB9\u0BC8" },
    { pattern: /Hee/g, replacement: "\u0BB9\u0BC7" },
    { pattern: /Hoo/g, replacement: "\u0BB9\u0BCB" },
    { pattern: /Haa/g, replacement: "\u0BB9\u0BBE" },
    { pattern: /Huu/g, replacement: "\u0BB9\u0BC2" },
    { pattern: /Hii/g, replacement: "\u0BB9\u0BC0" },
    { pattern: /Ha/g, replacement: "\u0BB9" },
    { pattern: /Hi/g, replacement: "\u0BB9\u0BBF" },
    { pattern: /HI/g, replacement: "\u0BB9\u0BC0" },
    { pattern: /HA/g, replacement: "\u0BB9\u0BBE" },
    { pattern: /He/g, replacement: "\u0BB9\u0BC6" },
    { pattern: /HE/g, replacement: "\u0BB9\u0BC7" },
    { pattern: /Ho/g, replacement: "\u0BB9\u0BCA" },
    { pattern: /HO/g, replacement: "\u0BB9\u0BCB" },
    { pattern: /Hu/g, replacement: "\u0BB9\u0BC1" },
    { pattern: /HU/g, replacement: "\u0BB9\u0BC2" },
    
    // Special characters
    { pattern: /fa/g, replacement: "\u0BAA\u0BC6\u0B83" },
    { pattern: /fi/g, replacement: "\u0BAA\u0BBF\u0B83" },
    { pattern: /xa/g, replacement: "\u0B95\u0BCD\u0BB8" },
    { pattern: /za/g, replacement: "\u0B9C\u0BC6\u0B83" },
    
    // Pure vowels - these should be near the end to avoid conflicts
    { pattern: /au/g, replacement: "\u0B94" },
    { pattern: /ai/g, replacement: "\u0B90" },
    { pattern: /aa/g, replacement: "\u0B86" },
    { pattern: /ee/g, replacement: "\u0B8F" },
    { pattern: /ii/g, replacement: "\u0B88" },
    { pattern: /uu/g, replacement: "\u0B8A" },
    { pattern: /oo/g, replacement: "\u0B93" },
    { pattern: /i/g, replacement: "\u0B87" },
    { pattern: /I/g, replacement: "\u0B88" },
    { pattern: /a/g, replacement: "\u0B85" },
    { pattern: /A/g, replacement: "\u0B86" },
    { pattern: /e/g, replacement: "\u0B8E" },
    { pattern: /E/g, replacement: "\u0B8F" },
    { pattern: /u/g, replacement: "\u0B89" },
    { pattern: /U/g, replacement: "\u0B8A" },
    { pattern: /o/g, replacement: "\u0B92" },
    { pattern: /O/g, replacement: "\u0B93" },
    
    // Special characters
    { pattern: /q/g, replacement: "\u0B83" },  // visarga - ஃ
    { pattern: /x/g, replacement: "\u0BEF" },  // Tamil numeral 9
    
    // Tamil numerals - place at the end
    { pattern: /-1000/g, replacement: "\u0BF2" },
    { pattern: /-100/g, replacement: "\u0BF1" },
    { pattern: /-10/g, replacement: "\u0BF0" },
    { pattern: /-1/g, replacement: "\u0BE7" },
    { pattern: /-2/g, replacement: "\u0BE8" },
    { pattern: /-3/g, replacement: "\u0BE9" },
    { pattern: /-4/g, replacement: "\u0BEA" },
    { pattern: /-5/g, replacement: "\u0BEB" },
    { pattern: /-6/g, replacement: "\u0BEC" },
    { pattern: /-7/g, replacement: "\u0BED" },
    { pattern: /-8/g, replacement: "\u0BEE" },
    { pattern: /-9/g, replacement: "\u0BEF" },
    { pattern: /-0/g, replacement: "0" },
    
    // Consonants without vowels - must be processed last
    { pattern: /nj/g, replacement: "\u0B9E\u0BCD" },
    { pattern: /ng/g, replacement: "\u0B99\u0BCD" },
    { pattern: /n/g, replacement: "\u0BA9\u0BCD" },
    { pattern: /N/g, replacement: "\u0BA3\u0BCD" },
    { pattern: /^n/g, replacement: "\u0BA8\u0BCD" },
    { pattern: /\nn/g, replacement: "\u0BA8\u0BCD" },
    { pattern: /w/g, replacement: "\u0BA8\u0BCD" },
    { pattern: /zh/g, replacement: "\u0BB4\u0BCD" },
    { pattern: /z/g, replacement: "\u0BB4\u0BCD" },
    { pattern: /j/g, replacement: "\u0B9C\u0BCD" },
    { pattern: /th/g, replacement: "\u0BA4\u0BCD" },
    { pattern: /sh/g, replacement: "\u0BB7\u0BCD" },
    { pattern: /dh/g, replacement: "\u0BA4\u0BCD" },
    { pattern: /ch/g, replacement: "\u0B9A\u0BCD" },
    { pattern: /h/g, replacement: "\u0BB9\u0BCD" },
    { pattern: /H/g, replacement: "\u0BB9\u0BCD" },
    { pattern: /c/g, replacement: "\u0B9A\u0BCD" },
    { pattern: /k/g, replacement: "\u0B95\u0BCD" },
    { pattern: /g/g, replacement: "\u0B95\u0BCD" },
    { pattern: /s/g, replacement: "\u0B9A\u0BCD" },
    { pattern: /S/g, replacement: "\u0BB8\u0BCD" },
    { pattern: /-s/g, replacement: "\u0BB8\u0BCD" },
    { pattern: /r/g, replacement: "\u0BB0\u0BCD" },
    { pattern: /R/g, replacement: "\u0BB1\u0BCD" },
    { pattern: /t/g, replacement: "\u0B9F\u0BCD" },
    { pattern: /d/g, replacement: "\u0B9F\u0BCD" },
    { pattern: /p/g, replacement: "\u0BAA\u0BCD" },
    { pattern: /b/g, replacement: "\u0BAA\u0BCD" },
    { pattern: /m/g, replacement: "\u0BAE\u0BCD" },
    { pattern: /y/g, replacement: "\u0BAF\u0BCD" },
    { pattern: /l/g, replacement: "\u0BB2\u0BCD" },
    { pattern: /L/g, replacement: "\u0BB3\u0BCD" },
    { pattern: /v/g, replacement: "\u0BB5\u0BCD" }
  ];

  // Apply all replacements
  let result = text;
  replacements.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement);
  });

  return result;
};

export const transliterateFromTamil = (text) => {
  if (!text) return "";
  
  // Implementing the reverse mapping would require a different approach
  // as Tamil Unicode characters need to be mapped back to Roman characters
  // This would be a complex task that could be added in a future version
  
  return text;
};