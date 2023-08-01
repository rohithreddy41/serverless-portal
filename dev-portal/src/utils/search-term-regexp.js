// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

// I'd prefer to do `/[\p{L}\p{M}\p{N}]{2,}/giu`, but Firefox doesn't support Unicode property escapes.
// This was generated with the aid of https://mothereff.in/regexpu + a Unicode category table, and
// for code size uses `/[\p{C}\p{P}\p{S}\p{Z}]{2,}/gu` with the inner class manually edited to be
// negated. Note that matches must be at least 2 characters long, and the regexp reflects this.

// Also, ESLint incorrectly warns here about stuff, and it's basically binary anyways.
// eslint-disable-next-line
export default /[^\0-\/:-@\[-`\{-\xA9\xAB-\xB1\xB4\xB6-\xB8\xBB\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08BE-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2\u09F3\u09FA\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B55\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B78-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF3-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C77\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D04\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D64\u0D65\u0D79\u0D80\u0D81\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u1368\u137D-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u17EF\u17FA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DB-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1ABF-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u206F\u2072\u2073\u207A-\u207E\u208A-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A-\u245F\u249C-\u24E9\u2500-\u2775\u2794-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFC\u2CFE\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u3191\u3196-\u319F\u31BB-\u31EF\u3200-\u321F\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DB6-\u4DFF\u9FF0-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7C7-\uA7F6\uA828-\uA82F\uA836-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB68-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF\u{1000C}\u{10027}\u{1003B}\u{1003E}\u{1004E}\u{1004F}\u{1005E}-\u{1007F}\u{100FB}-\u{10106}\u{10134}-\u{1013F}\u{10179}-\u{10189}\u{1018C}-\u{101FC}\u{101FE}-\u{1027F}\u{1029D}-\u{1029F}\u{102D1}-\u{102DF}\u{102FC}-\u{102FF}\u{10324}-\u{1032C}\u{1034B}-\u{1034F}\u{1037B}-\u{1037F}\u{1039E}\u{1039F}\u{103C4}-\u{103C7}\u{103D0}\u{103D6}-\u{103FF}\u{1049E}\u{1049F}\u{104AA}-\u{104AF}\u{104D4}-\u{104D7}\u{104FC}-\u{104FF}\u{10528}-\u{1052F}\u{10564}-\u{105FF}\u{10737}-\u{1073F}\u{10756}-\u{1075F}\u{10768}-\u{107FF}\u{10806}\u{10807}\u{10809}\u{10836}\u{10839}-\u{1083B}\u{1083D}\u{1083E}\u{10856}\u{10857}\u{10877}\u{10878}\u{1089F}-\u{108A6}\u{108B0}-\u{108DF}\u{108F3}\u{108F6}-\u{108FA}\u{1091C}-\u{1091F}\u{1093A}-\u{1097F}\u{109B8}-\u{109BB}\u{109D0}\u{109D1}\u{10A04}\u{10A07}-\u{10A0B}\u{10A14}\u{10A18}\u{10A36}\u{10A37}\u{10A3B}-\u{10A3E}\u{10A49}-\u{10A5F}\u{10A7F}\u{10AA0}-\u{10ABF}\u{10AC8}\u{10AE7}-\u{10AEA}\u{10AF0}-\u{10AFF}\u{10B36}-\u{10B3F}\u{10B56}\u{10B57}\u{10B73}-\u{10B77}\u{10B92}-\u{10BA8}\u{10BB0}-\u{10BFF}\u{10C49}-\u{10C7F}\u{10CB3}-\u{10CBF}\u{10CF3}-\u{10CF9}\u{10D28}-\u{10D2F}\u{10D3A}-\u{10E5F}\u{10E7F}-\u{10EFF}\u{10F28}-\u{10F2F}\u{10F55}-\u{10FDF}\u{10FF7}-\u{10FFF}\u{11047}-\u{11051}\u{11070}-\u{1107E}\u{110BB}-\u{110CF}\u{110E9}-\u{110EF}\u{110FA}-\u{110FF}\u{11135}\u{11140}-\u{11143}\u{11147}-\u{1114F}\u{11174}\u{11175}\u{11177}-\u{1117F}\u{111C5}-\u{111C8}\u{111CD}-\u{111CF}\u{111DB}\u{111DD}-\u{111E0}\u{111F5}-\u{111FF}\u{11212}\u{11238}-\u{1123D}\u{1123F}-\u{1127F}\u{11287}\u{11289}\u{1128E}\u{1129E}\u{112A9}-\u{112AF}\u{112EB}-\u{112EF}\u{112FA}-\u{112FF}\u{11304}\u{1130D}\u{1130E}\u{11311}\u{11312}\u{11329}\u{11331}\u{11334}\u{1133A}\u{11345}\u{11346}\u{11349}\u{1134A}\u{1134E}\u{1134F}\u{11351}-\u{11356}\u{11358}-\u{1135C}\u{11364}\u{11365}\u{1136D}-\u{1136F}\u{11375}-\u{113FF}\u{1144B}-\u{1144F}\u{1145A}-\u{1145D}\u{11460}-\u{1147F}\u{114C6}\u{114C8}-\u{114CF}\u{114DA}-\u{1157F}\u{115B6}\u{115B7}\u{115C1}-\u{115D7}\u{115DE}-\u{115FF}\u{11641}-\u{11643}\u{11645}-\u{1164F}\u{1165A}-\u{1167F}\u{116B9}-\u{116BF}\u{116CA}-\u{116FF}\u{1171B}\u{1171C}\u{1172C}-\u{1172F}\u{1173C}-\u{117FF}\u{1183B}-\u{1189F}\u{118F3}-\u{118FE}\u{11900}-\u{1199F}\u{119A8}\u{119A9}\u{119D8}\u{119D9}\u{119E2}\u{119E5}-\u{119FF}\u{11A3F}-\u{11A46}\u{11A48}-\u{11A4F}\u{11A9A}-\u{11A9C}\u{11A9E}-\u{11ABF}\u{11AF9}-\u{11BFF}\u{11C09}\u{11C37}\u{11C41}-\u{11C4F}\u{11C6D}-\u{11C71}\u{11C90}\u{11C91}\u{11CA8}\u{11CB7}-\u{11CFF}\u{11D07}\u{11D0A}\u{11D37}-\u{11D39}\u{11D3B}\u{11D3E}\u{11D48}-\u{11D4F}\u{11D5A}-\u{11D5F}\u{11D66}\u{11D69}\u{11D8F}\u{11D92}\u{11D99}-\u{11D9F}\u{11DAA}-\u{11EDF}\u{11EF7}-\u{11FBF}\u{11FD5}-\u{11FFF}\u{1239A}-\u{123FF}\u{1246F}-\u{1247F}\u{12544}-\u{12FFF}\u{1342F}-\u{143FF}\u{14647}-\u{167FF}\u{16A39}-\u{16A3F}\u{16A5F}\u{16A6A}-\u{16ACF}\u{16AEE}\u{16AEF}\u{16AF5}-\u{16AFF}\u{16B37}-\u{16B3F}\u{16B44}-\u{16B4F}\u{16B5A}\u{16B62}\u{16B78}-\u{16B7C}\u{16B90}-\u{16E3F}\u{16E97}-\u{16EFF}\u{16F4B}-\u{16F4E}\u{16F88}-\u{16F8E}\u{16FA0}-\u{16FDF}\u{16FE2}\u{16FE4}-\u{16FFF}\u{187F8}-\u{187FF}\u{18AF3}-\u{1AFFF}\u{1B11F}-\u{1B14F}\u{1B153}-\u{1B163}\u{1B168}-\u{1B16F}\u{1B2FC}-\u{1BBFF}\u{1BC6B}-\u{1BC6F}\u{1BC7D}-\u{1BC7F}\u{1BC89}-\u{1BC8F}\u{1BC9A}-\u{1BC9C}\u{1BC9F}-\u{1D164}\u{1D16A}-\u{1D16C}\u{1D173}-\u{1D17A}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D241}\u{1D245}-\u{1D2DF}\u{1D2F4}-\u{1D35F}\u{1D379}-\u{1D3FF}\u{1D455}\u{1D49D}\u{1D4A0}\u{1D4A1}\u{1D4A3}\u{1D4A4}\u{1D4A7}\u{1D4A8}\u{1D4AD}\u{1D4BA}\u{1D4BC}\u{1D4C4}\u{1D506}\u{1D50B}\u{1D50C}\u{1D515}\u{1D51D}\u{1D53A}\u{1D53F}\u{1D545}\u{1D547}-\u{1D549}\u{1D551}\u{1D6A6}\u{1D6A7}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D7CC}\u{1D7CD}\u{1D800}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA9A}\u{1DAA0}\u{1DAB0}-\u{1DFFF}\u{1E007}\u{1E019}\u{1E01A}\u{1E022}\u{1E025}\u{1E02B}-\u{1E0FF}\u{1E12D}-\u{1E12F}\u{1E13E}\u{1E13F}\u{1E14A}-\u{1E14D}\u{1E14F}-\u{1E2BF}\u{1E2FA}-\u{1E7FF}\u{1E8C5}\u{1E8C6}\u{1E8D7}-\u{1E8FF}\u{1E94C}-\u{1E94F}\u{1E95A}-\u{1EC70}\u{1ECAC}\u{1ECB0}\u{1ECB5}-\u{1ED00}\u{1ED2E}\u{1ED3E}-\u{1EDFF}\u{1EE04}\u{1EE20}\u{1EE23}\u{1EE25}\u{1EE26}\u{1EE28}\u{1EE33}\u{1EE38}\u{1EE3A}\u{1EE3C}-\u{1EE41}\u{1EE43}-\u{1EE46}\u{1EE48}\u{1EE4A}\u{1EE4C}\u{1EE50}\u{1EE53}\u{1EE55}\u{1EE56}\u{1EE58}\u{1EE5A}\u{1EE5C}\u{1EE5E}\u{1EE60}\u{1EE63}\u{1EE65}\u{1EE66}\u{1EE6B}\u{1EE73}\u{1EE78}\u{1EE7D}\u{1EE7F}\u{1EE8A}\u{1EE9C}-\u{1EEA0}\u{1EEA4}\u{1EEAA}\u{1EEBC}-\u{1F0FF}\u{1F10D}-\u{1FFFF}\u{2A6D7}-\u{2A6FF}\u{2B735}-\u{2B73F}\u{2B81E}\u{2B81F}\u{2CEA2}-\u{2CEAF}\u{2EBE1}-\u{2F7FF}\u{2FA1E}-\u{E00FF}\u{E01F0}-\u{10FFFF}]{2,}/giu
