// src/utils/transliterationUtils.js
export const transliterateToTamil = (text) => {
  if (!text) return ""; 

    // We need to organize our replacements in a specific order to ensure correct transliteration
  const replacements = [
   // Initial character normalizations       what should i do in this 
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

    // Special character combinations (process first to avoid conflicts
    { pattern: /kshow/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BCC" }, // க்ஷௌ
    { pattern: /kshai/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC8" }, // க்ஷை
    { pattern: /kshae/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC7" }, // க்ஷே
    { pattern: /kshoa/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BCB" }, // க்ஷோ
    { pattern: /kshaa/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BBE" }, // க்ஷா
    { pattern: /kshuu/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC2" }, // க்ஷூ
    { pattern: /kshii/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC0" }, // க்ஷீ
    { pattern: /ksha/gi, replacement: "\u0B95\u0BCD\u0BB7" }, // க்ஷ
    { pattern: /kshi/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BBF" }, // க்ஷி
    { pattern: /kshu/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC1" }, // க்ஷு (new)
    { pattern: /kshI/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC0" }, // க்ஷீ
    { pattern: /kshA/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BBE" }, // க்ஷா
    { pattern: /kshe/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC6" }, // க்ஷெ
    { pattern: /kshE/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BC7" }, // க்ஷே
    { pattern: /ksho/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BCA" }, // க்ஷொ
    { pattern: /kshO/gi, replacement: "\u0B95\u0BCD\u0BB7\u0BCB" }, // க்ஷோ
    { pattern: /sri/g, replacement: '\u0BB8\u0BCD\u0BB0\u0BC0' }, // ஸ்ரீ
    
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

    // உயிர்மெய்யெழுத்து (Vowel-Consonant Combinations)
    // 'க' (ka) series
    { pattern: /kow/g, replacement: '\u0B95\u0BCC' }, // கௌ
    { pattern: /kai/g, replacement: '\u0B95\u0BC8' }, // கை
    { pattern: /kae/g, replacement: '\u0B95\u0BC7' }, // கே
    { pattern: /koa/g, replacement: '\u0B95\u0BCB' }, // கோ
    { pattern: /kaa/g, replacement: '\u0B95\u0BBE' }, // கா
    { pattern: /kuu/g, replacement: '\u0B95\u0BC2' }, // கூ
    { pattern: /kii/g, replacement: '\u0B95\u0BC0' }, // கீ
    { pattern: /ka/g, replacement: '\u0B95' }, // க
    { pattern: /ki/g, replacement: '\u0B95\u0BBF' }, // கி
    { pattern: /kI/g, replacement: '\u0B95\u0BC0' }, // கீ
    { pattern: /kA/g, replacement: '\u0B95\u0BBE' }, // கா
    { pattern: /ke/g, replacement: '\u0B95\u0BC6' }, // கெ
    { pattern: /kE/g, replacement: '\u0B95\u0BC7' }, // கே
    { pattern: /ko/g, replacement: '\u0B95\u0BCA' }, // கொ
    { pattern: /kO/g, replacement: '\u0B95\u0BCB' }, // கோ
    { pattern: /ku/g, replacement: '\u0B95\u0BC1' }, // கு
    { pattern: /kU/g, replacement: '\u0B95\u0BC2' }, // கூ

    // 'ங' (nGa) series
    { pattern: /nGow/gi, replacement: '\u0B99\u0BCC' }, // ஙௌ
    { pattern: /nGai/gi, replacement: '\u0B99\u0BC8' }, // ஙை
    { pattern: /nGae/gi, replacement: '\u0B99\u0BC7' }, // ஙே
    { pattern: /nGoa/gi, replacement: '\u0B99\u0BCB' }, // ஙோ
    { pattern: /nGaa/gi, replacement: '\u0B99\u0BBE' }, // ஙா
    { pattern: /nGuu/gi, replacement: '\u0B99\u0BC2' }, // ஙூ
    { pattern: /nGii/gi, replacement: '\u0B99\u0BC0' }, // ஙீ
    { pattern: /nGa/gi, replacement: '\u0B99' }, // ங
    { pattern: /nGi/gi, replacement: '\u0B99\u0BBF' }, // ஙி
    { pattern: /nGI/gi, replacement: '\u0B99\u0BC0' }, // ஙீ
    { pattern: /nGA/gi, replacement: '\u0B99\u0BBE' }, // ஙா
    { pattern: /nGe/gi, replacement: '\u0B99\u0BC6' }, // ஙெ
    { pattern: /nGE/gi, replacement: '\u0B99\u0BC7' }, // ஙே
    { pattern: /nGo/gi, replacement: '\u0B99\u0BCA' }, // ஙொ
    { pattern: /nGO/gi, replacement: '\u0B99\u0BCB' }, // ஙோ
    { pattern: /nGu/gi, replacement: '\u0B99\u0BC1' }, // ஙு
    { pattern: /nGU/gi, replacement: '\u0B99\u0BC2' }, // ஙூ

    // 'ச' (sa) series
    { pattern: /sow/g, replacement: '\u0B9A\u0BCC' }, // சௌ
    { pattern: /sai/g, replacement: '\u0B9A\u0BC8' }, // சை
    { pattern: /sae/g, replacement: '\u0B9A\u0BC7' }, // சே
    { pattern: /soa/g, replacement: '\u0B9A\u0BCB' }, // சோ
    { pattern: /saa/g, replacement: '\u0B9A\u0BBE' }, // சா
    { pattern: /suu/g, replacement: '\u0B9A\u0BC2' }, // சூ
    { pattern: /sii/g, replacement: '\u0B9A\u0BC0' }, // சீ
    { pattern: /sa/g, replacement: '\u0B9A' }, // ச
    { pattern: /si/g, replacement: '\u0B9A\u0BBF' }, // சி
    { pattern: /sI/g, replacement: '\u0B9A\u0BC0' }, // சீ
    { pattern: /sA/g, replacement: '\u0B9A\u0BBE' }, // சா
    { pattern: /se/g, replacement: '\u0B9A\u0BC6' }, // செ
    { pattern: /sE/g, replacement: '\u0B9A\u0BC7' }, // சே
    { pattern: /so/g, replacement: '\u0B9A\u0BCA' }, // சொ
    { pattern: /sO/g, replacement: '\u0B9A\u0BCB' }, // சோ
    { pattern: /su/g, replacement: '\u0B9A\u0BC1' }, // சு
    { pattern: /sU/g, replacement: '\u0B9A\u0BC2' }, // சூ

    // 'ஞ' (Gna) series
    { pattern: /Gnow/gi, replacement: '\u0B9E\u0BCC' }, // ஞௌ
    { pattern: /Gnai/gi, replacement: '\u0B9E\u0BC8' }, // ஞை
    { pattern: /Gnae/gi, replacement: '\u0B9E\u0BC7' }, // ஞே
    { pattern: /Gnoa/gi, replacement: '\u0B9E\u0BCB' }, // ஞோ
    { pattern: /Gnaa/gi, replacement: '\u0B9E\u0BBE' }, // ஞா
    { pattern: /Gnuu/gi, replacement: '\u0B9E\u0BC2' }, // ஞூ
    { pattern: /Gnii/gi, replacement: '\u0B9E\u0BC0' }, // ஞீ
    { pattern: /Gna/gi, replacement: '\u0B9E' }, // ஞ
    { pattern: /Gni/gi, replacement: '\u0B9E\u0BBF' }, // ஞி
    { pattern: /GnI/gi, replacement: '\u0B9E\u0BC0' }, // ஞீ
    { pattern: /GnA/gi, replacement: '\u0B9E\u0BBE' }, // ஞா
    { pattern: /Gne/gi, replacement: '\u0B9E\u0BC6' }, // ஞெ
    { pattern: /GnaE/gi, replacement: '\u0B9E\u0BC7' }, // ஞே
    { pattern: /Gno/gi, replacement: '\u0B9E\u0BCA' }, // ஞொ
    { pattern: /GnoA/gi, replacement: '\u0B9E\u0BCB' }, // ஞோ
    { pattern: /Gnu/gi, replacement: '\u0B9E\u0BC1' }, // ஞு
    { pattern: /GnU/gi, replacement: '\u0B9E\u0BC2' }, // ஞூ

    // 'ட' (ta) series
    { pattern: /tow/g, replacement: '\u0B9F\u0BCC' }, // டௌ
    { pattern: /tai/g, replacement: '\u0B9F\u0BC8' }, // டை
    { pattern: /tae/g, replacement: '\u0B9F\u0BC7' }, // டே
    { pattern: /toa/g, replacement: '\u0B9F\u0BCB' }, // டோ
    { pattern: /taa/g, replacement: '\u0B9F\u0BBE' }, // டா
    { pattern: /tuu/g, replacement: '\u0B9F\u0BC2' }, // டூ
    { pattern: /tii/g, replacement: '\u0B9F\u0BC0' }, // டீ
    { pattern: /ta/g, replacement: '\u0B9F' }, // ட
    { pattern: /ti/g, replacement: '\u0B9F\u0BBF' }, // டி
    { pattern: /tI/g, replacement: '\u0B9F\u0BC0' }, // டீ
    { pattern: /tA/g, replacement: '\u0B9F\u0BBE' }, // டா
    { pattern: /te/g, replacement: '\u0B9F\u0BC6' }, // டெ
    { pattern: /tE/g, replacement: '\u0B9F\u0BC7' }, // டே
    { pattern: /to/g, replacement: '\u0B9F\u0BCA' }, // டொ
    { pattern: /tO/g, replacement: '\u0B9F\u0BCB' }, // டோ
    { pattern: /tu/g, replacement: '\u0B9F\u0BC1' }, // டு
    { pattern: /tU/g, replacement: '\u0B9F\u0BC2' }, // டூ

    // 'ண' (Na) series
    { pattern: /Now/g, replacement: '\u0BA3\u0BCC' }, // ணௌ
    { pattern: /Nai/g, replacement: '\u0BA3\u0BC8' }, // ணை
    { pattern: /Nae/g, replacement: '\u0BA3\u0BC7' }, // ணே
    { pattern: /Noa/g, replacement: '\u0BA3\u0BCB' }, // ணோ
    { pattern: /Naa/g, replacement: '\u0BA3\u0BBE' }, // ணா
    { pattern: /Nuu/g, replacement: '\u0BA3\u0BC2' }, // ணூ
    { pattern: /Nii/g, replacement: '\u0BA3\u0BC0' }, // ணீ
    { pattern: /Na/g, replacement: '\u0BA3' }, // ண
    { pattern: /Ni/g, replacement: '\u0BA3\u0BBF' }, // ணி
    { pattern: /NI/g, replacement: '\u0BA3\u0BC0' }, // ணீ
    { pattern: /NA/g, replacement: '\u0BA3\u0BBE' }, // ணா
    { pattern: /Ne/g, replacement: '\u0BA3\u0BC6' }, // ணெ
    { pattern: /NE/g, replacement: '\u0BA3\u0BC7' }, // ணே
    { pattern: /No/g, replacement: '\u0BA3\u0BCA' }, // ணொ
    { pattern: /NO/g, replacement: '\u0BA3\u0BCB' }, // ணோ
    { pattern: /Nu/g, replacement: '\u0BA3\u0BC1' }, // ணு
    { pattern: /NU/g, replacement: '\u0BA3\u0BC2' }, // ணூ

    // 'த' (tha) series
    { pattern: /thow/g, replacement: '\u0BA4\u0BCC' }, // தௌ
    { pattern: /thai/g, replacement: '\u0BA4\u0BC8' }, // தை
    { pattern: /thae/g, replacement: '\u0BA4\u0BC7' }, // தே
    { pattern: /thoa/g, replacement: '\u0BA4\u0BCB' }, // தோ
    { pattern: /thaa/g, replacement: '\u0BA4\u0BBE' }, // தா
    { pattern: /thuu/g, replacement: '\u0BA4\u0BC2' }, // தூ
    { pattern: /thii/g, replacement: '\u0BA4\u0BC0' }, // தீ
    { pattern: /tha/g, replacement: '\u0BA4' }, // த
    { pattern: /thi/g, replacement: '\u0BA4\u0BBF' }, // தி
    { pattern: /thI/g, replacement: '\u0BA4\u0BC0' }, // தீ
    { pattern: /thA/g, replacement: '\u0BA4\u0BBE' }, // தா
    { pattern: /the/g, replacement: '\u0BA4\u0BC6' }, // தெ
    { pattern: /thE/g, replacement: '\u0BA4\u0BC7' }, // தே
    { pattern: /tho/g, replacement: '\u0BA4\u0BCA' }, // தொ
    { pattern: /thO/g, replacement: '\u0BA4\u0BCB' }, // தோ
    { pattern: /thu/g, replacement: '\u0BA4\u0BC1' }, // து
    { pattern: /thU/g, replacement: '\u0BA4\u0BC2' }, // தூ

    // 'ந' (Na) series (using'nh')
    { pattern: /nhow/g, replacement: '\u0BA8\u0BCC' }, // நௌ
    { pattern: /nhai/g, replacement: '\u0BA8\u0BC8' }, // நை
    { pattern: /nhae/g, replacement: '\u0BA8\u0BC7' }, // நே
    { pattern: /nhoa/g, replacement: '\u0BA8\u0BCB' }, // நோ
    { pattern: /nhaa/g, replacement: '\u0BA8\u0BBE' }, // நா
    { pattern: /nhuu/g, replacement: '\u0BA8\u0BC2' }, // நூ
    { pattern: /nhii/g, replacement: '\u0BA8\u0BC0' }, // நீ
    { pattern: /nha/g, replacement: '\u0BA8' }, // ந
    { pattern: /nhi/g, replacement: '\u0BA8\u0BBF' }, // நி
    { pattern: /nhI/g, replacement: '\u0BA8\u0BC0' }, // நீ
    { pattern: /nhA/g, replacement: '\u0BA8\u0BBE' }, // நா
    { pattern: /nhe/g, replacement: '\u0BA8\u0BC6' }, // நெ
    { pattern: /nhE/g, replacement: '\u0BA8\u0BC7' }, // நே
    { pattern: /nho/g, replacement: '\u0BA8\u0BCA' }, // நொ
    { pattern: /nhO/g, replacement: '\u0BA8\u0BCB' }, // நோ
    { pattern: /nhu/g, replacement: '\u0BA8\u0BC1' }, // நு
    { pattern: /nhU/g, replacement: '\u0BA8\u0BC2' }, // நூ

    //'ந' (Na) series using 's'
    { pattern: /snhow/g, replacement: ' \u0BA8\u0BCC' }, // நௌ
    { pattern: /snhai/g, replacement: ' \u0BA8\u0BC8' }, // நை
    { pattern: /snhae/g, replacement: ' \u0BA8\u0BC7' }, // நே
    { pattern: /snhoa/g, replacement: ' \u0BA8\u0BCB' }, // நோ
    { pattern: /snhaa/g, replacement: ' \u0BA8\u0BBE' }, // நா
    { pattern: /snhuu/g, replacement: ' \u0BA8\u0BC2' }, // நூ
    { pattern: /snhii/g, replacement: ' \u0BA8\u0BC0' }, // நீ
    { pattern: /snha/g, replacement: ' \u0BA8' }, // ந
    { pattern: /snhi/g, replacement: ' \u0BA8\u0BBF' }, // நி
    { pattern: /snhI/g, replacement: ' \u0BA8\u0BC0' }, // நீ
    { pattern: /snhA/g, replacement: ' \u0BA8\u0BBE' }, // நா
    { pattern: /snhe/g, replacement: ' \u0BA8\u0BC6' }, // நெ
    { pattern: /snhaE/g, replacement: ' \u0BA8\u0BC7' }, // நே
    { pattern: /snho/g, replacement: ' \u0BA8\u0BCA' }, // நொ
    { pattern: /snhO/g, replacement: ' \u0BA8\u0BCB' }, // நோ
    { pattern: /snhu/g, replacement: ' \u0BA8\u0BC1' }, // நு
    { pattern: /snhU/g, replacement: ' \u0BA8\u0BC2' }, // நூ

    // 'ப' (pa) series
    { pattern: /pow/g, replacement: '\u0BAA\u0BCC' }, // பௌ
    { pattern: /pai/g, replacement: '\u0BAA\u0BC8' }, // பை
    { pattern: /pae/g, replacement: '\u0BAA\u0BC7' }, // பே
    { pattern: /poa/g, replacement: '\u0BAA\u0BCB' }, // போ
    { pattern: /paa/g, replacement: '\u0BAA\u0BBE' }, // பா
    { pattern: /puu/g, replacement: '\u0BAA\u0BC2' }, // பூ
    { pattern: /pii/g, replacement: '\u0BAA\u0BC0' }, // பீ
    { pattern: /pa/g, replacement: '\u0BAA' }, // ப
    { pattern: /pi/g, replacement: '\u0BAA\u0BBF' }, // பி
    { pattern: /pI/g, replacement: '\u0BAA\u0BC0' }, // பீ
    { pattern: /pA/g, replacement: '\u0BAA\u0BBE' }, // பா
    { pattern: /pe/g, replacement: '\u0BAA\u0BC6' }, // பெ
    { pattern: /pE/g, replacement: '\u0BAA\u0BC7' }, // பே
    { pattern: /po/g, replacement: '\u0BAA\u0BCA' }, // பொ
    { pattern: /pO/g, replacement: '\u0BAA\u0BCB' }, // போ
    { pattern: /pu/g, replacement: '\u0BAA\u0BC1' }, // பு
    { pattern: /pU/g, replacement: '\u0BAA\u0BC2' }, // பூ

    // 'ம' (ma) series
    { pattern: /mow/g, replacement: '\u0BAE\u0BCC' }, // மௌ
    { pattern: /mai/g, replacement: '\u0BAE\u0BC8' }, // மை
    { pattern: /mae/g, replacement: '\u0BAE\u0BC7' }, // மே
    { pattern: /moa/g, replacement: '\u0BAE\u0BCB' }, // மோ
    { pattern: /maa/g, replacement: '\u0BAE\u0BBE' }, // மா
    { pattern: /muu/g, replacement: '\u0BAE\u0BC2' }, // மூ
    { pattern: /mii/g, replacement: '\u0BAE\u0BC0' }, // மீ
    { pattern: /ma/g, replacement: '\u0BAE' }, // ம
    { pattern: /mi/g, replacement: '\u0BAE\u0BBF' }, // மி
    { pattern: /mI/g, replacement: '\u0BAE\u0BC0' }, // மீ
    { pattern: /mA/g, replacement: '\u0BAE\u0BBE' }, // மா
    { pattern: /me/g, replacement: '\u0BAE\u0BC6' }, // மெ
    { pattern: /mE/g, replacement: '\u0BAE\u0BC7' }, // மே
    { pattern: /mo/g, replacement: '\u0BAE\u0BCA' }, // மொ
    { pattern: /mO/g, replacement: '\u0BAE\u0BCB' }, // மோ
    { pattern: /mu/g, replacement: '\u0BAE\u0BC1' }, // மு
    { pattern: /mU/g, replacement: '\u0BAE\u0BC2' }, // மூ

    // 'ய' (ya) series
    { pattern: /yow/g, replacement: '\u0BAF\u0BCC' }, // யௌ
    { pattern: /yai/g, replacement: '\u0BAF\u0BC8' }, // யை
    { pattern: /yae/g, replacement: '\u0BAF\u0BC7' }, // யே
    { pattern: /yoa/g, replacement: '\u0BAF\u0BCB' }, // யோ
    { pattern: /yaa/g, replacement: '\u0BAF\u0BBE' }, // யா
    { pattern: /yuu/g, replacement: '\u0BAF\u0BC2' }, // யூ
    { pattern: /yii/g, replacement: '\u0BAF\u0BC0' }, // யீ
    { pattern: /ya/g, replacement: '\u0BAF' }, // ய
    { pattern: /yi/g, replacement: '\u0BAF\u0BBF' }, // யி
    { pattern: /yI/g, replacement: '\u0BAF\u0BC0' }, // யீ
    { pattern: /yA/g, replacement: '\u0BAF\u0BBE' }, // யா
    { pattern: /ye/g, replacement: '\u0BAF\u0BC6' }, // யெ
    { pattern: /yE/g, replacement: '\u0BAF\u0BC7' }, // யே
    { pattern: /yo/g, replacement: '\u0BAF\u0BCA' }, // யொ
    { pattern: /yO/g, replacement: '\u0BAF\u0BCB' }, // யோ
    { pattern: /yu/g, replacement: '\u0BAF\u0BC1' }, // யு
    { pattern: /yU/g, replacement: '\u0BAF\u0BC2' }, // யூ

    // 'ர' (ra) series
    { pattern: /row/g, replacement: '\u0BB0\u0BCC' }, // ரௌ
    { pattern: /rai/g, replacement: '\u0BB0\u0BC8' }, // ரை
    { pattern: /rae/g, replacement: '\u0BB0\u0BC7' }, // ரே
    { pattern: /roa/g, replacement: '\u0BB0\u0BCB' }, // ரோ
    { pattern: /raa/g, replacement: '\u0BB0\u0BBE' }, // ரா
    { pattern: /ruu/g, replacement: '\u0BB0\u0BC2' }, // ரூ
    { pattern: /rii/g, replacement: '\u0BB0\u0BC0' }, // ரீ
    { pattern: /ra/g, replacement: '\u0BB0' }, // ர
    { pattern: /ri/g, replacement: '\u0BB0\u0BBF' }, // ரி
    { pattern: /rI/g, replacement: '\u0BB0\u0BC0' }, // ரீ
    { pattern: /rA/g, replacement: '\u0BB0\u0BBE' }, // ரா
    { pattern: /re/g, replacement: '\u0BB0\u0BC6' }, // ரெ
    { pattern: /rE/g, replacement: '\u0BB0\u0BC7' }, // ரே
    { pattern: /ro/g, replacement: '\u0BB0\u0BCA' }, // ரொ
    { pattern: /rO/g, replacement: '\u0BB0\u0BCB' }, // ரோ
    { pattern: /ru/g, replacement: '\u0BB0\u0BC1' }, // ரு
    { pattern: /rU/g, replacement: '\u0BB0\u0BC2' }, // ரூ

    // 'ல' (la) series
    { pattern: /low/g, replacement: '\u0BB2\u0BCC' }, // லௌ
    { pattern: /lai/g, replacement: '\u0BB2\u0BC8' }, // லை
    { pattern: /lae/g, replacement: '\u0BB2\u0BC7' }, // லே
    { pattern: /loa/g, replacement: '\u0BB2\u0BCB' }, // லோ
    { pattern: /laa/g, replacement: '\u0BB2\u0BBE' }, // லா
    { pattern: /luu/g, replacement: '\u0BB2\u0BC2' }, // லூ
    { pattern: /lii/g, replacement: '\u0BB2\u0BC0' }, // லீ
    { pattern: /la/g, replacement: '\u0BB2' }, // ல
    { pattern: /li/g, replacement: '\u0BB2\u0BBF' }, // லி
    { pattern: /lI/g, replacement: '\u0BB2\u0BC0' }, // லீ
    { pattern: /lA/g, replacement: '\u0BB2\u0BBE' }, // லா
    { pattern: /le/g, replacement: '\u0BB2\u0BC6' }, // லெ
    { pattern: /lE/g, replacement: '\u0BB2\u0BC7' }, // லே
    { pattern: /lo/g, replacement: '\u0BB2\u0BCA' }, // லொ
    { pattern: /lO/g, replacement: '\u0BB2\u0BCB' }, // லோ
    { pattern: /lu/g, replacement: '\u0BB2\u0BC1' }, // லு
    { pattern: /lU/g, replacement: '\u0BB2\u0BC2' }, // லூ

    // 'வ' (va) series
    { pattern: /vow/g, replacement: '\u0BB5\u0BCC' }, // வௌ
    { pattern: /vai/g, replacement: '\u0BB5\u0BC8' }, // வை
    { pattern: /vae/g, replacement: '\u0BB5\u0BC7' }, // வே
    { pattern: /voa/g, replacement: '\u0BB5\u0BCB' }, // வோ
    { pattern: /vaa/g, replacement: '\u0BB5\u0BBE' }, // வா
    { pattern: /vuu/g, replacement: '\u0BB5\u0BC2' }, // வூ
    { pattern: /vii/g, replacement: '\u0BB5\u0BC0' }, // வீ
    { pattern: /va/g, replacement: '\u0BB5' }, // வ
    { pattern: /vi/g, replacement: '\u0BB5\u0BBF' }, // வி
    { pattern: /vI/g, replacement: '\u0BB5\u0BC0' }, // வீ
    { pattern: /vA/g, replacement: '\u0BB5\u0BBE' }, // வா
    { pattern: /ve/g, replacement: '\u0BB5\u0BC6' }, // வெ
    { pattern: /vE/g, replacement: '\u0BB5\u0BC7' }, // வே
    { pattern: /vo/g, replacement: '\u0BB5\u0BCA' }, // வொ
    { pattern: /vO/g, replacement: '\u0BB5\u0BCB' }, // வோ
    { pattern: /vu/g, replacement: '\u0BB5\u0BC1' }, // வு
    { pattern: /vU/g, replacement: '\u0BB5\u0BC2' }, // வூ

    // 'ழ' (zha) series
    { pattern: /zow/g, replacement: '\u0BB4\u0BCC' }, // ழௌ
    { pattern: /zai/g, replacement: '\u0BB4\u0BC8' }, // ழை
    { pattern: /zae/g, replacement: '\u0BB4\u0BC7' }, // ழே
    { pattern: /zoa/g, replacement: '\u0BB4\u0BCB' }, // ழோ
    { pattern: /zaa/g, replacement: '\u0BB4\u0BBE' }, // ழா
    { pattern: /zuu/g, replacement: '\u0BB4\u0BC2' }, // ழூ
    { pattern: /zii/g, replacement: '\u0BB4\u0BC0' }, // ழீ
    { pattern: /za/g, replacement: '\u0BB4' }, // ழ
    { pattern: /zi/g, replacement: '\u0BB4\u0BBF' }, // ழி
    { pattern: /zI/g, replacement: '\u0BB4\u0BC0' }, // ழீ
    { pattern: /zA/g, replacement: '\u0BB4\u0BBE' }, // ழா
    { pattern: /ze/g, replacement: '\u0BB4\u0BC6' }, // ழெ
    { pattern: /zE/g, replacement: '\u0BB4\u0BC7' }, // ழே
    { pattern: /zo/g, replacement: '\u0BB4\u0BCA' }, // ழொ
    { pattern: /zO/g, replacement: '\u0BB4\u0BCB' }, // ழோ
    { pattern: /zu/g, replacement: '\u0BB4\u0BC1' }, // ழு
    { pattern: /zU/g, replacement: '\u0BB4\u0BC2' }, // ழூ

    // 'ள' (La) series
    { pattern: /Low/g, replacement: '\u0BB3\u0BCC' }, // ளௌ
    { pattern: /Lai/g, replacement: '\u0BB3\u0BC8' }, // ளை
    { pattern: /Lae/g, replacement: '\u0BB3\u0BC7' }, // ளே
    { pattern: /Loa/g, replacement: '\u0BB3\u0BCB' }, // ளோ
    { pattern: /Laa/g, replacement: '\u0BB3\u0BBE' }, // ளா
    { pattern: /Luu/g, replacement: '\u0BB3\u0BC2' }, // ளூ
    { pattern: /Lii/g, replacement: '\u0BB3\u0BC0' }, // ளீ
    { pattern: /La/g, replacement: '\u0BB3' }, // ள
    { pattern: /Li/g, replacement: '\u0BB3\u0BBF' }, // ளி
    { pattern: /LI/g, replacement: '\u0BB3\u0BC0' }, // ளீ
    { pattern: /LA/g, replacement: '\u0BB3\u0BBE' }, // ளா
    { pattern: /Le/g, replacement: '\u0BB3\u0BC6' }, // ளெ
    { pattern: /LE/g, replacement: '\u0BB3\u0BC7' }, // ளே
    { pattern: /Lo/g, replacement: '\u0BB3\u0BCA' }, // ளொ
    { pattern: /LO/g, replacement: '\u0BB3\u0BCB' }, // ளோ
    { pattern: /Lu/g, replacement: '\u0BB3\u0BC1' }, // ளு
    { pattern: /LU/g, replacement: '\u0BB3\u0BC2' }, // ளூ

    // 'ற' (Ra) series
    { pattern: /Row/g, replacement: '\u0BB1\u0BCC' }, // றௌ
    { pattern: /Rai/g, replacement: '\u0BB1\u0BC8' }, // றை
    { pattern: /Rae/g, replacement: '\u0BB1\u0BC7' }, // றே
    { pattern: /Roa/g, replacement: '\u0BB1\u0BCB' }, // றோ
    { pattern: /Raa/g, replacement: '\u0BB1\u0BBE' }, // றா
    { pattern: /Ruu/g, replacement: '\u0BB1\u0BC2' }, // றூ
    { pattern: /Rii/g, replacement: '\u0BB1\u0BC0' }, // றீ
    { pattern: /Ra/g, replacement: '\u0BB1' }, // ற
    { pattern: /Ri/g, replacement: '\u0BB1\u0BBF' }, // றி
    { pattern: /RI/g, replacement: '\u0BB1\u0BC0' }, // றீ
    { pattern: /RA/g, replacement: '\u0BB1\u0BBE' }, // றா
    { pattern: /Re/g, replacement: '\u0BB1\u0BC6' }, // றெ
    { pattern: /RE/g, replacement: '\u0BB1\u0BC7' }, // றே
    { pattern: /Ro/g, replacement: '\u0BB1\u0BCA' }, // றொ
    { pattern: /RO/g, replacement: '\u0BB1\u0BCB' }, // றோ
    { pattern: /Ru/g, replacement: '\u0BB1\u0BC1' }, // று
    { pattern: /RU/g, replacement: '\u0BB1\u0BC2' }, // றூ

    // 'ன' (nA) series (using 'nn')
    { pattern: /now/g, replacement: '\u0BA9\u0BCC' }, // னௌ
    { pattern: /nai/g, replacement: '\u0BA9\u0BC8' }, // னை
    { pattern: /nae/g, replacement: '\u0BA9\u0BC7' }, // னே
    { pattern: /noa/g, replacement: '\u0BA9\u0BCB' }, // னோ
    { pattern: /naa/g, replacement: '\u0BA9\u0BBE' }, // னா
    { pattern: /nuu/g, replacement: '\u0BA9\u0BC2' }, // னூ
    { pattern: /nii/g, replacement: '\u0BA9\u0BC0' }, // னீ
    { pattern: /na/g, replacement: '\u0BA9' }, // ன
    { pattern: /ni/g, replacement: '\u0BA9\u0BBF' }, // னி
    { pattern: /nI/g, replacement: '\u0BA9\u0BC0' }, // னீ
    { pattern: /nA/g, replacement: '\u0BA9\u0BBE' }, // னா
    { pattern: /ne/g, replacement: '\u0BA9\u0BC6' }, // னெ
    { pattern: /nE/g, replacement: '\u0BA9\u0BC7' }, // னே
    { pattern: /no/g, replacement: '\u0BA9\u0BCA' }, // னொ
    { pattern: /nO/g, replacement: '\u0BA9\u0BCB' }, // னோ
    { pattern: /nu/g, replacement: '\u0BA9\u0BC1' }, // னு
    { pattern: /nU/g, replacement: '\u0BA9\u0BC2' }, // னூ

    // 'ஷ' (sha) series
    { pattern: /show/gi, replacement: '\u0BB7\u0BCC' }, // ஷௌ
    { pattern: /shai/gi, replacement: '\u0BB7\u0BC8' }, // ஷை
    { pattern: /shae/gi, replacement: '\u0BB7\u0BC7' }, // ஷே
    { pattern: /shoa/gi, replacement: '\u0BB7\u0BCB' }, // ஷோ
    { pattern: /shaa/gi, replacement: '\u0BB7\u0BBE' }, // ஷா
    { pattern: /shuu/gi, replacement: '\u0BB7\u0BC2' }, // ஷூ
    { pattern: /shii/gi, replacement: '\u0BB7\u0BC0' }, // ஷீ
    { pattern: /sha/gi, replacement: '\u0BB7' }, // ஷ
    { pattern: /shi/gi, replacement: '\u0BB7\u0BBF' }, // ஷி
    { pattern: /shI/gi, replacement: '\u0BB7\u0BC0' }, // ஷீ
    { pattern: /shA/gi, replacement: '\u0BB7\u0BBE' }, // ஷா
    { pattern: /she/gi, replacement: '\u0BB7\u0BC6' }, // ஷெ
    { pattern: /shE/gi, replacement: '\u0BB7\u0BC7' }, // ஷே
    { pattern: /sho/gi, replacement: '\u0BB7\u0BCA' }, // ஷொ
    { pattern: /shO/gi, replacement: '\u0BB7\u0BCB' }, // ஷோ
    { pattern: /shu/gi, replacement: '\u0BB7\u0BC1' }, // ஷு
    { pattern: /shU/gi, replacement: '\u0BB7\u0BC2' }, // ஷூ
    
    // 'ஸ' (sa) series
    { pattern: /Sow/g, replacement: '\u0BB8\u0BCC' }, // ஸௌ
    { pattern: /Sai/g, replacement: '\u0BB8\u0BC8' }, // ஸை
    { pattern: /Sae/g, replacement: '\u0BB8\u0BC7' }, // ஸே
    { pattern: /Soa/g, replacement: '\u0BB8\u0BCB' }, // ஸோ
    { pattern: /Saa/g, replacement: '\u0BB8\u0BBE' }, // ஸா
    { pattern: /Suu/g, replacement: '\u0BB8\u0BC2' }, // ஸூ
    { pattern: /Sii/g, replacement: '\u0BB8\u0BC0' }, // ஸீ
    { pattern: /Sa/g, replacement: '\u0BB8' }, // ஸ
    { pattern: /Si/g, replacement: '\u0BB8\u0BBF' }, // ஸி
    { pattern: /SI/g, replacement: '\u0BB8\u0BC0' }, // ஸீ
    { pattern: /SA/g, replacement: '\u0BB8\u0BBE' }, // ஸா
    { pattern: /Se/g, replacement: '\u0BB8\u0BC6' }, // ஸெ
    { pattern: /SE/g, replacement: '\u0BB8\u0BC7' }, // ஸே
    { pattern: /So/g, replacement: '\u0BB8\u0BCA' }, // ஸொ
    { pattern: /SO/g, replacement: '\u0BB8\u0BCB' }, // ஸோ
    { pattern: /Su/g, replacement: '\u0BB8\u0BC1' }, // ஸு
    { pattern: /SU/g, replacement: '\u0BB8\u0BC2' }, // ஸூ

    // 'ஹ' (ha) series
    { pattern: /How/g, replacement: '\u0BB9\u0BCC' }, // ஹௌ
    { pattern: /Hai/g, replacement: '\u0BB9\u0BC8' }, // ஹை
    { pattern: /Hae/g, replacement: '\u0BB9\u0BC7' }, // ஹே
    { pattern: /Hoa/g, replacement: '\u0BB9\u0BCB' }, // ஹோ
    { pattern: /Haa/g, replacement: '\u0BB9\u0BBE' }, // ஹா
    { pattern: /Huu/g, replacement: '\u0BB9\u0BC2' }, // ஹூ
    { pattern: /Hii/g, replacement: '\u0BB9\u0BC0' }, // ஹீ
    { pattern: /Ha/g, replacement: '\u0BB9' }, // ஹ
    { pattern: /Hi/g, replacement: '\u0BB9\u0BBF' }, // ஹி
    { pattern: /HI/g, replacement: '\u0BB9\u0BC0' }, // ஹீ
    { pattern: /HA/g, replacement: '\u0BB9\u0BBE' }, // ஹா
    { pattern: /He/g, replacement: '\u0BB9\u0BC6' }, // ஹெ
    { pattern: /HE/g, replacement: '\u0BB9\u0BC7' }, // ஹே
    { pattern: /Ho/g, replacement: '\u0BB9\u0BCA' }, // ஹொ
    { pattern: /HO/g, replacement: '\u0BB9\u0BCB' }, // ஹோ
    { pattern: /Hu/g, replacement: '\u0BB9\u0BC1' }, // ஹு
    { pattern: /HU/g, replacement: '\u0BB9\u0BC2' }, // ஹூ

    // Additional mappings for borrowed sounds
    { pattern: /jow/g, replacement: '\u0B9C\u0BCC' }, // ஜௌ
    { pattern: /jai/g, replacement: '\u0B9C\u0BC8' }, // ஜை
    { pattern: /jae/g, replacement: '\u0B9C\u0BC7' }, // ஜே
    { pattern: /joa/g, replacement: '\u0B9C\u0BCB' }, // ஜோ
    { pattern: /jaa/g, replacement: '\u0B9C\u0BBE' }, // ஜா
    { pattern: /juu/g, replacement: '\u0B9C\u0BC2' }, // ஜூ
    { pattern: /jii/g, replacement: '\u0B9C\u0BC0' }, // ஜீ
    { pattern: /ja/g, replacement: '\u0B9C' }, // ஜ
    { pattern: /ji/g, replacement: '\u0B9C\u0BBF' }, // ஜி
    { pattern: /jI/g, replacement: '\u0B9C\u0BC0' }, // ஜீ
    { pattern: /jA/g, replacement: '\u0B9C\u0BBE' }, // ஜா
    { pattern: /je/g, replacement: '\u0B9C\u0BC6' }, // ஜெ
    { pattern: /jE/g, replacement: '\u0B9C\u0BC7' }, // ஜே
    { pattern: /jo/g, replacement: '\u0B9C\u0BCA' }, // ஜொ
    { pattern: /jO/g, replacement: '\u0B9C\u0BCB' }, // ஜோ
    { pattern: /ju/g, replacement: '\u0B9C\u0BC1' }, // ஜு
    { pattern: /jU/g, replacement: '\u0B9C\u0BC2' }, // ஜூ
    { pattern: /j/g, replacement: '\u0B9C\u0BCD' }, // ஜ் 

    // Common consonant clusters
    { pattern: /nthau/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BCC' }, // ந்ரௌ
    { pattern: /nthai/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC8' }, // ந்ரை
    { pattern: /nthee/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC7' }, // ந்ரே
    { pattern: /nthoo/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BCB' }, // ந்ரோ
    { pattern: /nthaa/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BBE' }, // ந்ரா
    { pattern: /nthuu/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC2' }, // ந்ரூ
    { pattern: /nthii/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC0' }, // ந்ரீ
    { pattern: /ntha/g, replacement: '\u0BA8\u0BCD\u0BA4' }, // ந்ர
    { pattern: /nthi/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BBF' }, // ந்ரி
    { pattern: /nthI/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC0' }, // ந்ரீ
    { pattern: /nthA/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BBE' }, // ந்ரா
    { pattern: /nthe/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC6' }, // ந்ரெ
    { pattern: /nthE/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC7' }, // ந்ரே
    { pattern: /ntho/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BCA' }, // ந்ரொ
    { pattern: /nthO/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BCB' }, // ந்ரோ
    { pattern: /nthu/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC1' }, // ந்ரு
    { pattern: /nthU/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BC2' }, // ந்ரூ
    { pattern: /nth/g, replacement: '\u0BA8\u0BCD\u0BA4\u0BCD' }, // ந்ர்

    // Additional mappings for common English approximations
    { pattern: /gow/g, replacement: '\u0B95\u0BCC' }, // கௌ
    { pattern: /gai/g, replacement: '\u0B95\u0BC8' }, // கை
    { pattern: /gae/g, replacement: '\u0B95\u0BC7' }, // கே
    { pattern: /goa/g, replacement: '\u0B95\u0BCB' }, // கோ
    { pattern: /gaa/g, replacement: '\u0B95\u0BBE' }, // கா
    { pattern: /guu/g, replacement: '\u0B95\u0BC2' }, // கூ
    { pattern: /gii/g, replacement: '\u0B95\u0BC0' }, // கீ
    { pattern: /ga/g, replacement: '\u0B95' }, // க
    { pattern: /gi/g, replacement: '\u0B95\u0BBF' }, // கி
    { pattern: /gI/g, replacement: '\u0B95\u0BC0' }, // கீ
    { pattern: /gA/g, replacement: '\u0B95\u0BBE' }, // கா
    { pattern: /ge/g, replacement: '\u0B95\u0BC6' }, // கெ
    { pattern: /gE/g, replacement: '\u0B95\u0BC7' }, // கே
    { pattern: /go/g, replacement: '\u0B95\u0BCA' }, // கொ
    { pattern: /gO/g, replacement: '\u0B95\u0BCB' }, // கோ
    { pattern: /gu/g, replacement: '\u0B95\u0BC1' }, // கு
    { pattern: /gU/g, replacement: '\u0B95\u0BC2' }, // க

    { pattern: /bow/g, replacement: '\u0BAA\u0BCC' }, // பௌ
    { pattern: /bai/g, replacement: '\u0BAA\u0BC8' }, // பை
    { pattern: /bae/g, replacement: '\u0BAA\u0BC7' }, // பே
    { pattern: /boa/g, replacement: '\u0BAA\u0BCB' }, // போ
    { pattern: /baa/g, replacement: '\u0BAA\u0BBE' }, // பா
    { pattern: /buu/g, replacement: '\u0BAA\u0BC2' }, // பூ
    { pattern: /bii/g, replacement: '\u0BAA\u0BC0' }, // பீ
    { pattern: /ba/g, replacement: '\u0BAA' }, // ப
    { pattern: /bi/g, replacement: '\u0BAA\u0BBF' }, // பி
    { pattern: /bI/g, replacement: '\u0BAA\u0BC0' }, // பீ
    { pattern: /bA/g, replacement: '\u0BAA\u0BBE' }, // பா
    { pattern: /be/g, replacement: '\u0BAA\u0BC6' }, // பெ
    { pattern: /bE/g, replacement: '\u0BAA\u0BC7' }, // பே
    { pattern: /bo/g, replacement: '\u0BAA\u0BCA' }, // பொ
    { pattern: /bO/g, replacement: '\u0BAA\u0BCB' }, // போ
    { pattern: /bu/g, replacement: '\u0BAA\u0BC1' }, // பு
    { pattern: /bU/g, replacement: '\u0BAA\u0BC2' }, // பூ

    { pattern: /dow/g, replacement: '\u0B9F\u0BCC' }, // டௌ
    { pattern: /dai/g, replacement: '\u0B9F\u0BC8' }, // டை
    { pattern: /dae/g, replacement: '\u0B9F\u0BC7' }, // டே
    { pattern: /doa/g, replacement: '\u0B9F\u0BCB' }, // டோ
    { pattern: /daa/g, replacement: '\u0B9F\u0BBE' }, // டா
    { pattern: /duu/g, replacement: '\u0B9F\u0BC2' }, // டூ
    { pattern: /dii/g, replacement: '\u0B9F\u0BC0' }, // டீ
    { pattern: /da/g, replacement: '\u0B9F' }, // ட
    { pattern: /di/g, replacement: '\u0B9F\u0BBF' }, // டி
    { pattern: /dI/g, replacement: '\u0B9F\u0BC0' }, // டீ
    { pattern: /dA/g, replacement: '\u0B9F\u0BBE' }, // டா
    { pattern: /de/g, replacement: '\u0B9F\u0BC6' }, // டெ
    { pattern: /dE/g, replacement: '\u0B9F\u0BC7' }, // டே
    { pattern: /do/g, replacement: '\u0B9F\u0BCA' }, // டொ
    { pattern: /dO/g, replacement: '\u0B9F\u0BCB' }, // டோ
    { pattern: /du/g, replacement: '\u0B9F\u0BC1' }, // டு
    { pattern: /dU/g, replacement: '\u0B9F\u0BC2' }, // டூ

    { pattern: /wow/g, replacement: "\u0BA8\u0BCC" }, // நௌ
    { pattern: /wai/g, replacement: "\u0BA8\u0BC8" }, // நை
    { pattern: /wae/g, replacement: "\u0BA8\u0BC7" }, // நே
    { pattern: /woa/g, replacement: "\u0BA8\u0BCB" }, // நோ
    { pattern: /waa/g, replacement: "\u0BA8\u0BBE" }, // நா
    { pattern: /wuu/g, replacement: "\u0BA8\u0BC2" }, // நூ
    { pattern: /wii/g, replacement: "\u0BA8\u0BC0" }, // நீ
    { pattern: /wa/g, replacement: "\u0BA8" }, // ந
    { pattern: /wi/g, replacement: "\u0BA8\u0BBF" }, // நி
    { pattern: /wI/g, replacement: "\u0BA8\u0BC0" }, // நீ
    { pattern: /wA/g, replacement: "\u0BA8\u0BBE" }, // நா
    { pattern: /we/g, replacement: "\u0BA8\u0BC6" }, // நெ
    { pattern: /wE/g, replacement: "\u0BA8\u0BC7" }, // நே
    { pattern: /wo/g, replacement: "\u0BA8\u0BCA" }, // நொ
    { pattern: /aO/g, replacement: "\u0BA8\u0BCB" }, // நோ
    { pattern: /wu/g, replacement: "\u0BA8\u0BC1" }, // நு
    { pattern: /wU/g, replacement: "\u0BA8\u0BC2" }, // நூ

    { pattern: /chow/g, replacement: "\u0B9A\u0BCC" }, // சௌ
    { pattern: /chai/g, replacement: "\u0B9A\u0BC8" }, // சை
    { pattern: /chae/g, replacement: "\u0B9A\u0BC7" }, // சே
    { pattern: /choa/g, replacement: "\u0B9A\u0BCB" }, // சோ
    { pattern: /chaa/g, replacement: "\u0B9A\u0BBE" }, // சா
    { pattern: /chuu/g, replacement: "\u0B9A\u0BC2" }, // சூ
    { pattern: /chii/g, replacement: "\u0B9A\u0BC0" }, // சீ
    { pattern: /cha/g, replacement: "\u0B9A" }, // ச
    { pattern: /chi/g, replacement: "\u0B9A\u0BBF" }, // சி
    { pattern: /chI/g, replacement: "\u0B9A\u0BC0" }, // சீ
    { pattern: /chA/g, replacement: "\u0B9A\u0BBE" }, // சா
    { pattern: /che/g, replacement: "\u0B9A\u0BC6" }, // செ
    { pattern: /chE/g, replacement: "\u0B9A\u0BC7" }, // சே
    { pattern: /cho/g, replacement: "\u0B9A\u0BCA" }, // சொ
    { pattern: /chO/g, replacement: "\u0B9A\u0BCB" }, // சோ
    { pattern: /chu/g, replacement: "\u0B9A\u0BC1" }, // சு
    { pattern: /chU/g, replacement: "\u0B9A\u0BC2" }, // சூ

    { pattern: /cow/g, replacement: "\u0B9A\u0BCC" }, // சௌ
    { pattern: /cai/g, replacement: "\u0B9A\u0BC8" }, // சை
    { pattern: /cae/g, replacement: "\u0B9A\u0BC7" }, // சே
    { pattern: /coa/g, replacement: "\u0B9A\u0BCB" }, // சோ
    { pattern: /caa/g, replacement: "\u0B9A\u0BBE" }, // சா
    { pattern: /cuu/g, replacement: "\u0B9A\u0BC2" }, // சூ
    { pattern: /cii/g, replacement: "\u0B9A\u0BC0" }, // சீ
    { pattern: /ca/g, replacement: "\u0B9A" }, // ச
    { pattern: /ci/g, replacement: "\u0B9A\u0BBF" }, // சி
    { pattern: /cI/g, replacement: "\u0B9A\u0BC0" }, // சீ
    { pattern: /cA/g, replacement: "\u0B9A\u0BBE" }, // சா
    { pattern: /ce/g, replacement: "\u0B9A\u0BC6" }, // செ
    { pattern: /cE/g, replacement: "\u0B9A\u0BC7" }, // சே
    { pattern: /co/g, replacement: "\u0B9A\u0BCA" }, // சொ
    { pattern: /cO/g, replacement: "\u0B9A\u0BCB" }, // சோ
    { pattern: /cu/g, replacement: "\u0B9A\u0BC1" }, // சு
    { pattern: /cU/g, replacement: "\u0B9A\u0BC2" }, // சூ

    { pattern: /dhow/g, replacement: "\u0BA4\u0BCC" }, // தௌ
    { pattern: /dhai/g, replacement: "\u0BA4\u0BC8" }, // தை
    { pattern: /dhae/g, replacement: "\u0BA4\u0BC7" }, // தே
    { pattern: /dhoa/g, replacement: "\u0BA4\u0BCB" }, // தோ
    { pattern: /dhaa/g, replacement: "\u0BA4\u0BBE" }, // தா
    { pattern: /dhuu/g, replacement: "\u0BA4\u0BC2" }, // தூ
    { pattern: /dhii/g, replacement: "\u0BA4\u0BC0" }, // தீ
    { pattern: /dha/g, replacement: "\u0BA4" }, // த
    { pattern: /dhi/g, replacement: "\u0BA4\u0BBF" }, // தி
    { pattern: /dhI/g, replacement: "\u0BA4\u0BC0" }, // தீ
    { pattern: /dhA/g, replacement: "\u0BA4\u0BBE" }, // தா
    { pattern: /dhe/g, replacement: "\u0BA4\u0BC6" }, // தெ
    { pattern: /dhE/g, replacement: "\u0BA4\u0BC7" }, // தே
    { pattern: /dho/g, replacement: "\u0BA4\u0BCA" }, // தொ
    { pattern: /dhO/g, replacement: "\u0BA4\u0BCB" }, // தோ
    { pattern: /dhu/g, replacement: "\u0BA4\u0BC1" }, // து
    { pattern: /dhU/g, replacement: "\u0BA4\u0BC2" }, // தூ

    { pattern: /zhow/g, replacement: "\u0BB4\u0BCC" }, // ழௌ
    { pattern: /zhai/g, replacement: "\u0BB4\u0BC8" }, // ழை
    { pattern: /zhae/g, replacement: "\u0BB4\u0BC7" }, // ழே
    { pattern: /zhoa/g, replacement: "\u0BB4\u0BCB" }, // ழோ
    { pattern: /zhaa/g, replacement: "\u0BB4\u0BBE" }, // ழா
    { pattern: /zhuu/g, replacement: "\u0BB4\u0BC2" }, // ழூ
    { pattern: /zhii/g, replacement: "\u0BB4\u0BC0" }, // ழீ
    { pattern: /zha/g, replacement: "\u0BB4" }, // ழ
    { pattern: /zhi/g, replacement: "\u0BB4\u0BBF" }, // ழி
    { pattern: /zhI/g, replacement: "\u0BB4\u0BC0" }, // ழீ
    { pattern: /zhA/g, replacement: "\u0BB4\u0BBE" }, // ழா
    { pattern: /zhe/g, replacement: "\u0BB4\u0BC6" }, // ழெ
    { pattern: /zhE/g, replacement: "\u0BB4\u0BC7" }, // ழே
    { pattern: /zho/g, replacement: "\u0BB4\u0BCA" }, // ழொ
    { pattern: /zhO/g, replacement: "\u0BB4\u0BCB" }, // ழோ
    { pattern: /zhu/g, replacement: "\u0BB4\u0BC1" }, // ழு
    { pattern: /zhU/g, replacement: "\u0BB4\u0BC2" }, // ழூ

    // Special characters
    { pattern: /fa/g, replacement: '\u0BAA\u0BC6\u0B83' }, // பெஃ
    { pattern: /fi/g, replacement: '\u0BAA\u0BBF\u0B83' }, // பிஃ
    { pattern: /xa/g, replacement: '\u0B95\u0BCD\u0BB8' }, // க்ஸ
    { pattern: /za/g, replacement: '\u0B9C\u0BC6\u0B83' }, // ஜெஃ
  
    // Pure vowels - these should be near the end to avoid conflicts
    { pattern: /au/g, replacement: "\u0B94" }, // ஔ
    { pattern: /ai/g, replacement: "\u0B90" }, // ஐ
    { pattern: /aa/g, replacement: "\u0B86" }, // ஆ
    { pattern: /ee/g, replacement: "\u0B8F" }, // ஏ
    { pattern: /ii/g, replacement: "\u0B88" }, // ஈ
    { pattern: /uu/g, replacement: "\u0B8A" }, // ஊ
    { pattern: /oo/g, replacement: "\u0B93" }, // ஓ
    { pattern: /i/g, replacement: "\u0B87" }, // இ
    { pattern: /I/g, replacement: "\u0B88" }, // ஈ
    { pattern: /a/g, replacement: "\u0B85" }, // அ
    { pattern: /A/g, replacement: "\u0B86" }, // ஆ
    { pattern: /e/g, replacement: "\u0B8E" }, // எ
    { pattern: /E/g, replacement: "\u0B8F" }, // ஏ
    { pattern: /u/g, replacement: "\u0B89" }, // உ
    { pattern: /U/g, replacement: "\u0B8A" }, // ஊ
    { pattern: /o/g, replacement: "\u0B92" }, // ஒ
    { pattern: /O/g, replacement: "\u0B93" }, // ஓ
    
    // Special characters
    { pattern: /q/g, replacement: "\u0B83" },  // visarga - ஃ
    { pattern: /x/g, replacement: "\u0BEF" },  // Tamil numeral 9
    
    // Tamil numerals - place at the end
    { pattern: /-1000/g, replacement: "\u0BF2" },
    { pattern: /-100/g, replacement: "\u0BF1" },
    { pattern: /-10/g, replacement: "\u0BF0" },,
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
    // Multi-character consonant patterns (process first to avoid splitting)
    { pattern: /nG/gi, replacement: "\u0B99\u0BCD" }, // ங்
    { pattern: /Gn/gi, replacement: "\u0B9E\u0BCD" }, // ஞ்
    { pattern: /snh/gi, replacement: "\u0BA8\u0BCD" }, // ந்
    { pattern: /nh/gi, replacement: "\u0BA8\u0BCD" }, // ந்
    { pattern: /sh/gi, replacement: "\u0BB7\u0BCD" }, // ஷ்
    // Single-character consonant patterns (process after multi-character patterns)
    // Vallinam (Hard Consonants)
    { pattern: /k/g, replacement: "\u0B95\u0BCD" }, // க்
    { pattern: /g/g, replacement: "\u0B95\u0BCD" }, // க்
    { pattern: /s/g, replacement: "\u0B9A\u0BCD" }, // ச்
    { pattern: /ch/g, replacement: "\u0B9A\u0BCD" }, // ச்
    { pattern: /c/g, replacement: "\u0B9A\u0BCD" }, // ச்
    { pattern: /th/g, replacement: "\u0BA4\u0BCD" }, // த்
    { pattern: /dh/g, replacement: "\u0BA4\u0BCD" }, // த்
    { pattern: /t/g, replacement: "\u0B9F\u0BCD" }, // ட்
    { pattern: /d/g, replacement: "\u0B9F\u0BCD" }, // ட்
    { pattern: /p/g, replacement: "\u0BAA\u0BCD" }, // ப்
    { pattern: /b/g, replacement: "\u0BAA\u0BCD" }, // ப்
    { pattern: /R/g, replacement: "\u0BB1\u0BCD" }, // ற்
    // Mellinam (Soft Consonants)
    { pattern: /N/g, replacement: "\u0BA3\u0BCD" }, // ண்
    { pattern: /w/g, replacement: "\u0BA8\u0BCD" }, // ந்
    { pattern: /m/g, replacement: "\u0BAE\u0BCD" }, // ம்
    { pattern: /n/g, replacement: "\u0BA9\u0BCD" }, // ன்
    // Idayinam (Medium Consonants)
    { pattern: /y/g, replacement: "\u0BAF\u0BCD" }, // ய்
    { pattern: /r/g, replacement: "\u0BB0\u0BCD" }, // ர்
    { pattern: /l/g, replacement: "\u0BB2\u0BCD" }, // ல்
    { pattern: /v/g, replacement: "\u0BB5\u0BCD" }, // வ்
    { pattern: /zh/g, replacement: "\u0BB4\u0BCD" }, // ழ்
    { pattern: /z/g, replacement: "\u0BB4\u0BCD" }, // ழ்
    { pattern: /L/g, replacement: "\u0BB3\u0BCD" }, // ள்
    // Grantha Letters
    { pattern: /j/g, replacement: "\u0B9C\u0BCD" }, // ஜ்
    { pattern: /S/g, replacement: "\u0BB8\u0BCD" }, // ஸ்
    { pattern: /H/g, replacement: "\u0BB9\u0BCD" }, // ஹ்
];
  // Apply all replacements
  let result = text;
  replacements.forEach(({ pattern, replacement }) => {
    result = result.replace(pattern, replacement);
  });

  return result;
};



// Example usage
// console.log(transliterateToTamil('natham')); // Output: நதம்
// console.log(transliterateToTamil('nna')); // Output: ன
// console.log(transliterateToTamil('sri')); // Output: ஸ்ரீ

