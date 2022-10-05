(function (_0x337255, _0x370e72) {
    const _0x54114b = _0x7502, _0x24e710 = _0x337255();
    while (!![]) {
        try {
            const _0x39e2fe = -parseInt(_0x54114b(0x104)) / 0x1 * (parseInt(_0x54114b(0x109)) / 0x2) + parseInt(_0x54114b(0x84)) / 0x3 + -parseInt(_0x54114b(0xb2)) / 0x4 * (-parseInt(_0x54114b(0x8b)) / 0x5) + -parseInt(_0x54114b(0xbf)) / 0x6 + -parseInt(_0x54114b(0xc8)) / 0x7 * (-parseInt(_0x54114b(0x112)) / 0x8) + -parseInt(_0x54114b(0xc0)) / 0x9 * (-parseInt(_0x54114b(0x130)) / 0xa) + parseInt(_0x54114b(0x96)) / 0xb * (-parseInt(_0x54114b(0xfc)) / 0xc);
            if (_0x39e2fe === _0x370e72)
                break;
            else
                _0x24e710['push'](_0x24e710['shift']());
        } catch (_0x4998a1) {
            _0x24e710['push'](_0x24e710['shift']());
        }
    }
}(_0x10ef, 0x9e83f), ((() => {
    'use strict';
    const _0x5b01da = _0x7502;
    var _0x595d61 = {};
    ;
    function _0x16feef(_0x51633f) {
        const _0x3abdef = _0x7502;
        return _0x271fc6(_0x2dfb75[_0x3abdef(0xe2)])[_0x3abdef(0x9b)](_0x51633f);
    }
    function _0x271fc6(_0x54ed69) {
        const _0xc45eef = _0x7502;
        let _0x51f690;
        if (document[_0xc45eef(0xec)]['lang'])
            _0x51f690 = document[_0xc45eef(0xec)][_0xc45eef(0x9f)];
        else {
            if (navigator[_0xc45eef(0xab)])
                _0x51f690 = navigator[_0xc45eef(0xab)];
            else
                try {
                    _0x51f690 = new URL(Array[_0xc45eef(0x9d)](document['querySelectorAll'](_0xc45eef(0xf4)))?.['find'](_0x5eb10b => _0x5eb10b?.[_0xc45eef(0x88)](_0xc45eef(0x10c))?.[_0xc45eef(0xa0)](_0xc45eef(0xff)))?.[_0xc45eef(0x88)](_0xc45eef(0x10c)))?.[_0xc45eef(0xd0)]?.['get']('locale');
                } catch {
                    _0x5ef3e1('Cannot\x20find\x20browser\x20locale.\x20Use\x20en\x20as\x20default\x20for\x20number\x20formatting.'), _0x51f690 = 'en';
                }
        }
        let _0x4c93b0, _0x2b3b79;
        switch (_0x54ed69) {
        case 'compactLong':
            _0x4c93b0 = 'compact', _0x2b3b79 = _0xc45eef(0xc5);
            break;
        case _0xc45eef(0x12a):
            _0x4c93b0 = _0xc45eef(0x12a), _0x2b3b79 = 'short';
            break;
        case 'compactShort':
        default:
            _0x4c93b0 = _0xc45eef(0xf6), _0x2b3b79 = _0xc45eef(0xe4);
        }
        const _0xc84312 = Intl[_0xc45eef(0x85)](_0x51f690, {
            'notation': _0x4c93b0,
            'compactDisplay': _0x2b3b79
        });
        return _0xc84312;
    }
    function _0x2547ed(_0x382d83) {
        const _0x12b0db = _0x7502;
        return chrome[_0x12b0db(0xee)]['getMessage'](_0x382d83);
    }
    function _0x3cbb0c() {
        const _0xcea4d1 = _0x7502;
        if (typeof chrome !== 'undefined' && typeof chrome['runtime'] !== _0xcea4d1(0xe7))
            return chrome;
        else
            return typeof browser !== _0xcea4d1(0xe7) && typeof browser[_0xcea4d1(0x99)] !== 'undefined' ? browser : (console[_0xcea4d1(0xda)](_0xcea4d1(0x82)), ![]);
    }
    function _0x1792a6(_0x401847) {
        const _0xec30a2 = _0x7502, _0x4fe8fd = new URL(_0x401847), _0x263d39 = _0x4fe8fd['pathname'];
        if (_0x263d39[_0xec30a2(0xbb)](_0xec30a2(0xfd)))
            return document['querySelector']('meta[itemprop=\x27videoId\x27]')[_0xec30a2(0x117)];
        else {
            if (_0x263d39[_0xec30a2(0xbb)]('/shorts'))
                return _0x263d39[_0xec30a2(0xc9)](0x8);
            return _0x4fe8fd[_0xec30a2(0xd0)][_0xec30a2(0x12c)]('v');
        }
    }
    function _0x47b199(_0x51c025) {
        const _0x32c0ba = _0x7502, _0xe66ac4 = _0x51c025[_0x32c0ba(0xaa)](), _0x5e77c1 = innerHeight || document[_0x32c0ba(0xec)][_0x32c0ba(0x137)], _0x5a5a2c = innerWidth || document[_0x32c0ba(0xec)][_0x32c0ba(0xf9)];
        return !(_0xe66ac4[_0x32c0ba(0xa8)] == 0x0 && _0xe66ac4[_0x32c0ba(0x115)] == 0x0 && _0xe66ac4['bottom'] == 0x0 && _0xe66ac4[_0x32c0ba(0x125)] == 0x0) && _0xe66ac4['top'] >= 0x0 && _0xe66ac4['left'] >= 0x0 && _0xe66ac4[_0x32c0ba(0xdd)] <= _0x5e77c1 && _0xe66ac4[_0x32c0ba(0x125)] <= _0x5a5a2c;
    }
    function _0x160e94() {
        const _0x21b9bd = _0x7502, _0x4fdc9f = _0x1792a6(window['location'][_0x21b9bd(0x10c)]);
        return document[_0x21b9bd(0xb7)](_0x21b9bd(0xb8) + _0x4fdc9f + '\x27]') !== null || document['querySelector']('#player[loading=\x22false\x22]:not([hidden])') !== null;
    }
    function _0x5ef3e1(_0x36bada, _0x4ddbf8) {
        const _0x1cd3cc = _0x7502;
        _0x36bada = _0x1cd3cc(0xd1) + _0x36bada, _0x4ddbf8 ? _0x4ddbf8(_0x36bada) : console[_0x1cd3cc(0xda)](_0x36bada);
    }
    function _0x26d1cc(_0x3c7417) {
        const _0x3c244a = _0x7502;
        let _0x4a1394;
        switch (_0x2dfb75[_0x3c244a(0x10b)]) {
        case _0x3c244a(0x123):
            _0x3c7417 === !![] ? _0x4a1394 = 'dodgerblue' : _0x4a1394 = _0x3c244a(0xc3);
            break;
        case _0x3c244a(0x11a):
            _0x3c7417 === !![] ? _0x4a1394 = _0x3c244a(0x11d) : _0x4a1394 = _0x3c244a(0x93);
            break;
        case _0x3c244a(0xc2):
        default:
            _0x3c7417 === !![] ? _0x4a1394 = 'lime' : _0x4a1394 = _0x3c244a(0x107);
        }
        return _0x4a1394;
    }
    ;
    function _0x140233(_0x371041, _0x274fec) {
        const _0x2fb87a = _0x7502;
        if (!_0x3b39c9()) {
            let _0x42fcfb = document[_0x2fb87a(0x87)](_0x2fb87a(0x127));
            const _0x1374a4 = _0x2503ad()[_0x2fb87a(0xf9)] + _0x54faa1()[_0x2fb87a(0xf9)] + 0x8, _0x2723c4 = _0x371041 + _0x274fec > 0x0 ? _0x371041 / (_0x371041 + _0x274fec) * 0x64 : 0x32;
            var _0x86020b = parseFloat(_0x2723c4[_0x2fb87a(0xcd)](0x1));
            const _0x5241c1 = (0x64 - _0x86020b)['toLocaleString']();
            _0x86020b = _0x86020b['toLocaleString']();
            if (_0x2dfb75[_0x2fb87a(0x108)]) {
                var _0x22bf0a;
                switch (_0x2dfb75['tooltipPercentageMode']) {
                case _0x2fb87a(0xbc):
                    _0x22bf0a = _0x371041[_0x2fb87a(0xaf)]() + _0x2fb87a(0xea) + _0x274fec['toLocaleString']() + _0x2fb87a(0xae) + _0x5241c1 + '%';
                    break;
                case _0x2fb87a(0x111):
                    _0x22bf0a = _0x86020b + '%&nbsp;/&nbsp;' + _0x5241c1 + '%';
                    break;
                case _0x2fb87a(0xce):
                    _0x22bf0a = _0x86020b + '%';
                    break;
                case _0x2fb87a(0xdf):
                    _0x22bf0a = _0x5241c1 + '%';
                    break;
                default:
                    _0x22bf0a = _0x371041[_0x2fb87a(0xaf)]() + _0x2fb87a(0xea) + _0x274fec[_0x2fb87a(0xaf)]() + _0x2fb87a(0xae) + _0x86020b + '%';
                }
            } else
                _0x22bf0a = _0x371041[_0x2fb87a(0xaf)]() + _0x2fb87a(0xea) + _0x274fec['toLocaleString']();
            if (!_0x4c9e96()) {
                if (!_0x42fcfb && !_0x9bd32()) {
                    let _0x5b18dc = '', _0x5b3e85 = '';
                    _0x2dfb75['coloredBar'] && (_0x5b18dc = ';\x20background-color:\x20' + _0x26d1cc(!![]), _0x5b3e85 = _0x2fb87a(0xb9) + _0x26d1cc(![]));
                    (document['getElementById'](_0x196a35() ? _0x2fb87a(0x11b) : _0x2fb87a(0xd6)) || document[_0x2fb87a(0xb7)](_0x2fb87a(0x131)))['insertAdjacentHTML'](_0x2fb87a(0x81), '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ryd-tooltip\x22\x20style=\x22width:\x20' + _0x1374a4 + 'px' + (_0x196a35() ? _0x2fb87a(0xb5) : '') + _0x2fb87a(0x9e) + _0x5b3e85 + _0x2fb87a(0x126) + _0x2723c4 + '%;\x20height:\x20100%' + _0x5b18dc + _0x2fb87a(0x11e) + _0x22bf0a + _0x2fb87a(0xbe));
                    if (_0x196a35()) {
                        let _0x2055b0 = document[_0x2fb87a(0x87)](_0x2fb87a(0x12d));
                        _0x2055b0[_0x2fb87a(0x9a)][_0x2fb87a(0x97)] = _0x2fb87a(0x106), _0x2055b0[_0x2fb87a(0x9a)][_0x2fb87a(0x133)] = '10px';
                    }
                } else
                    document[_0x2fb87a(0x87)](_0x2fb87a(0x127))[_0x2fb87a(0x9a)][_0x2fb87a(0x128)] = _0x1374a4 + 'px', document['getElementById'](_0x2fb87a(0xdc))[_0x2fb87a(0x9a)][_0x2fb87a(0x128)] = _0x2723c4 + '%', document[_0x2fb87a(0xb7)]('#ryd-dislike-tooltip\x20>\x20#tooltip')[_0x2fb87a(0x103)] = _0x22bf0a, _0x2dfb75[_0x2fb87a(0xc1)] && (document[_0x2fb87a(0x87)](_0x2fb87a(0x127))[_0x2fb87a(0x9a)]['backgroundColor'] = _0x26d1cc(![]), document['getElementById']('ryd-bar')[_0x2fb87a(0x9a)][_0x2fb87a(0xe1)] = _0x26d1cc(!![]));
            }
        } else {
            _0x5ef3e1('removing\x20bar');
            let _0x39ec57 = document[_0x2fb87a(0x87)]('ryd-bar-container');
            _0x39ec57 && _0x39ec57[_0x2fb87a(0xf7)]['removeChild'](_0x39ec57);
        }
    }
    ;
    function _0x12ec96(_0x19cbad, _0x7dfc38) {
        const _0x56474e = _0x7502;
        let _0x349892 = document[_0x56474e(0x12b)](_0x56474e(0x91)), _0x5e07b8 = document[_0x56474e(0x12b)](_0x56474e(0x101));
        _0x5e07b8[_0x56474e(0x100)]('class', 'rating'), _0x5e07b8[_0x56474e(0x100)]('max', '5'), _0x5e07b8[_0x56474e(0x100)](_0x56474e(0xa6), ''), _0x5e07b8[_0x56474e(0x100)](_0x56474e(0x9a), _0x56474e(0xdb) + _0x19cbad[_0x56474e(0x121)]() + _0x56474e(0x11f)), _0x5e07b8[_0x56474e(0x100)](_0x56474e(0x10e), _0x56474e(0x136)), _0x349892[_0x56474e(0x122)](_0x5e07b8);
        let _0x368ad1;
        _0x7dfc38 ? _0x368ad1 = document[_0x56474e(0xb7)](_0x56474e(0x105)) : _0x368ad1 = document['querySelector'](_0x56474e(0x116));
        _0x368ad1['insertAdjacentElement']('afterend', _0x349892);
        try {
            let _0x2f422d = document['querySelector']('#ryd-bar-container');
            _0x2f422d['setAttribute'](_0x56474e(0x9a), 'width:\x20190%;\x20height:\x202px;');
        } catch (_0x318355) {
            cLog('RateBar\x20Not\x20Present');
        }
        let _0x193649 = _0x56474e(0xb1);
        document['head']['insertAdjacentHTML'](_0x56474e(0x81), _0x193649);
    }
    const _0x3f27cc = 'https://returnyoutubedislikeapi.com', _0xfbab13 = _0x5b01da(0xca), _0x4583c9 = _0x5b01da(0xe5), _0x847c0c = _0x5b01da(0xf8);
    let _0x2dfb75 = {
            'disableVoteSubmission': ![],
            'coloredThumbs': ![],
            'coloredBar': ![],
            'colorTheme': _0x5b01da(0xc2),
            'numberDisplayFormat': 'compactShort',
            'showTooltipPercentage': ![],
            'tooltipPercentageMode': _0x5b01da(0x11c),
            'numberDisplayReformatLikes': ![]
        }, _0x4b55d2 = {
            'likes': 0x0,
            'dislikes': 0x0,
            'previousState': _0x847c0c
        };
    function _0x9bd32() {
        const _0x15427b = _0x5b01da;
        return location[_0x15427b(0xc6)] == 'm.youtube.com';
    }
    function _0x4c9e96() {
        const _0x2a690c = _0x5b01da;
        return location[_0x2a690c(0xfb)]['startsWith'](_0x2a690c(0xfe));
    }
    function _0x196a35() {
        const _0x4362d1 = _0x5b01da;
        return document[_0x4362d1(0x87)]('comment-teaser') !== null;
    }
    let _0xe5c0f2 = new Object();
    _0x4c9e96() && _0xe5c0f2[_0x5b01da(0x7f)] !== !![] && (_0x5ef3e1(_0x5b01da(0xd7)), _0xe5c0f2[_0x5b01da(0x8a)] = {
        'childList': ![],
        'attributes': !![],
        'subtree': ![]
    }, _0xe5c0f2[_0x5b01da(0x7f)] = !![], _0xe5c0f2[_0x5b01da(0xf2)] = new MutationObserver(function (_0x27f8f5, _0x529573) {
        const _0x398984 = _0x5b01da;
        _0x27f8f5[_0x398984(0xe6)](_0x1ac6d8 => {
            const _0x457cdd = _0x398984;
            if (_0x1ac6d8[_0x457cdd(0x10e)] === _0x457cdd(0x12f) && _0x1ac6d8['target']['nodeName'] === _0x457cdd(0xe8) && _0x1ac6d8[_0x457cdd(0xfa)]['id'] === 'button') {
                _0x1ac6d8[_0x457cdd(0xfa)][_0x457cdd(0x88)](_0x457cdd(0xd5)) === _0x457cdd(0xa7) ? _0x1ac6d8[_0x457cdd(0xfa)][_0x457cdd(0x9a)][_0x457cdd(0xcb)] = _0x1ac6d8[_0x457cdd(0xfa)][_0x457cdd(0xf3)]['parentElement']['id'] === 'like-button' ? _0x26d1cc(!![]) : _0x26d1cc(![]) : _0x1ac6d8['target'][_0x457cdd(0x9a)]['color'] = _0x457cdd(0x12e);
                return;
            }
            _0x5ef3e1(_0x457cdd(0x86) + _0x1ac6d8[_0x457cdd(0xfa)] + _0x1ac6d8[_0x457cdd(0x10e)]);
        });
    }));
    function _0x3b39c9() {
        const _0x114637 = _0x5b01da;
        if (_0x9bd32())
            return /^\D*$/[_0x114637(0x102)](_0x58c273()[_0x114637(0x10d)][0x0][_0x114637(0xb7)](_0x114637(0x124))[_0x114637(0xc7)]);
        return /^\D*$/[_0x114637(0x102)](_0x58c273()[_0x114637(0x10d)][0x0][_0x114637(0xc7)]);
    }
    function _0x6617e0() {
        const _0x2e8d5f = _0x5b01da;
        if (_0x9bd32())
            return _0x2503ad()[_0x2e8d5f(0xb7)](_0x2e8d5f(0xe3))[_0x2e8d5f(0x88)]('aria-label') == _0x2e8d5f(0xa7);
        return _0x2503ad()[_0x2e8d5f(0xd8)][_0x2e8d5f(0xd2)](_0x2e8d5f(0x95));
    }
    function _0x9fb6c3() {
        const _0x1dcdb0 = _0x5b01da;
        if (_0x9bd32())
            return _0x54faa1()[_0x1dcdb0(0xb7)](_0x1dcdb0(0xe3))[_0x1dcdb0(0x88)](_0x1dcdb0(0xa2)) == 'true';
        return _0x54faa1()['classList'][_0x1dcdb0(0xd2)]('style-default-active');
    }
    function _0x123832(_0x490f35) {
        const _0x287ad8 = _0x5b01da;
        if (_0x6617e0())
            return {
                'current': _0xfbab13,
                'previous': _0x490f35[_0x287ad8(0x8f)]
            };
        if (_0x9fb6c3())
            return {
                'current': _0x4583c9,
                'previous': _0x490f35[_0x287ad8(0x8f)]
            };
        return {
            'current': _0x847c0c,
            'previous': _0x490f35[_0x287ad8(0x8f)]
        };
    }
    function _0x54b90c(_0x174d7d) {
        const _0x30d246 = _0x5b01da;
        _0x335160()[_0x30d246(0xc7)] = _0x174d7d;
    }
    function _0x2a463b(_0x25539f) {
        const _0x2be4dd = _0x5b01da;
        _0x3bbc2d()?.[_0x2be4dd(0xeb)]('is-empty');
        if (!_0x3b39c9()) {
            if (_0x9bd32()) {
                _0x58c273()['children'][0x1][_0x2be4dd(0xb7)](_0x2be4dd(0x124))[_0x2be4dd(0xc7)] = _0x25539f;
                return;
            }
            _0x3bbc2d()[_0x2be4dd(0xc7)] = _0x25539f;
        } else {
            _0x5ef3e1(_0x2be4dd(0xb3));
            if (_0x9bd32()) {
                _0x58c273()[_0x2be4dd(0x10d)][0x1][_0x2be4dd(0xb7)](_0x2be4dd(0x124))[_0x2be4dd(0xc7)] = _0x2547ed(_0x2be4dd(0x94));
                return;
            }
            _0x3bbc2d()[_0x2be4dd(0xc7)] = _0x2547ed(_0x2be4dd(0x94));
        }
    }
    function _0x4e7aa6() {
        const _0xe99d72 = _0x5b01da;
        try {
            if (_0x4c9e96())
                return ![];
            let _0x5b5d17 = _0x2503ad()[_0xe99d72(0xb7)](_0xe99d72(0xf5))[_0xe99d72(0x88)]('aria-label')[_0xe99d72(0xcf)](/\D/g, '');
            return _0x5b5d17['length'] > 0x0 ? parseInt(_0x5b5d17) : ![];
        } catch {
            return ![];
        }
    }
    function _0xd95f94(_0x1f9bdf, _0x1a7a20) {
        const _0xda7a9e = _0x5b01da, _0x26e8b5 = _0x16feef(_0x1f9bdf[_0xda7a9e(0xcc)]);
        _0x2a463b(_0x26e8b5);
        if (_0x2dfb75['numberDisplayReformatLikes'] === !![]) {
            const _0x160f29 = _0x4e7aa6();
            _0x160f29 !== ![] && _0x54b90c(_0x16feef(_0x160f29));
        }
        _0x1a7a20[_0xda7a9e(0xcc)] = parseInt(_0x1f9bdf[_0xda7a9e(0xcc)]), _0x1a7a20[_0xda7a9e(0xef)] = _0x4e7aa6() || parseInt(_0x1f9bdf[_0xda7a9e(0xef)]), _0x140233(_0x1a7a20[_0xda7a9e(0xef)], _0x1a7a20[_0xda7a9e(0xcc)]);
        if (_0x2dfb75[_0xda7a9e(0xd3)] === !![]) {
            if (_0x4c9e96()) {
                let _0xd3f61b = _0x2503ad()[_0xda7a9e(0xb7)](_0xda7a9e(0x8d)), _0x223e3c = _0x54faa1()['querySelector'](_0xda7a9e(0x8d));
                _0xd3f61b['getAttribute'](_0xda7a9e(0xd5)) === _0xda7a9e(0xa7) && (_0xd3f61b[_0xda7a9e(0x9a)][_0xda7a9e(0xcb)] = _0x26d1cc(!![])), _0x223e3c[_0xda7a9e(0x88)](_0xda7a9e(0xd5)) === _0xda7a9e(0xa7) && (_0x223e3c['style'][_0xda7a9e(0xcb)] = _0x26d1cc(![])), _0xe5c0f2['observer'][_0xda7a9e(0x83)](_0xd3f61b, _0xe5c0f2[_0xda7a9e(0x8a)]), _0xe5c0f2[_0xda7a9e(0xf2)][_0xda7a9e(0x83)](_0x223e3c, _0xe5c0f2[_0xda7a9e(0x8a)]);
            } else
                _0x2503ad()['style'][_0xda7a9e(0xcb)] = _0x26d1cc(!![]), _0x54faa1()[_0xda7a9e(0x9a)]['color'] = _0x26d1cc(![]);
        }
    }
    function _0x290ef7(_0x318b9d) {
        const _0x4ff50d = _0x5b01da;
        _0x58c273()[_0x4ff50d(0x10d)][0x1][_0x4ff50d(0xb7)](_0x4ff50d(0xc4))['innerText'] = _0x2547ed(_0x4ff50d(0xbd));
    }
    async function _0x38c75c(_0x8f7736) {
        const _0xab5145 = _0x5b01da;
        _0x8f7736[_0xab5145(0x8f)] = _0x9fb6c3() ? _0x4583c9 : _0x6617e0() ? _0xfbab13 : _0x847c0c;
        let _0x305999 = ![], _0x2022c0 = _0x1792a6(window['location'][_0xab5145(0x10c)]), _0x24d811 = _0x4e7aa6() || null, _0x2ac8d4 = await fetch(_0x3f27cc + _0xab5145(0x120) + _0x2022c0 + _0xab5145(0xde) + (_0x24d811 || ''), {
                'method': 'GET',
                'headers': { 'Accept': _0xab5145(0x113) }
            })[_0xab5145(0x135)](_0xea5275 => {
                const _0x2a574f = _0xab5145;
                if (!_0xea5275['ok'])
                    _0x290ef7(_0xea5275[_0x2a574f(0x134)]);
                return _0xea5275;
            })[_0xab5145(0x135)](_0x5a1738 => _0x5a1738[_0xab5145(0xd9)]())[_0xab5145(0xa4)](_0x290ef7);
        _0x5ef3e1(_0xab5145(0x10f)), _0x5ef3e1(JSON[_0xab5145(0xd4)](_0x2ac8d4)), _0x2ac8d4 !== undefined && !('traceId' in _0x2ac8d4) && !_0x305999 && _0xd95f94(_0x2ac8d4, _0x8f7736);
    }
    function _0x6f7bd4() {
        _0x38c75c(_0x4b55d2);
    }
    function _0x11b9c7() {
        _0x184f68(), _0x54714c(), _0x3b0c65(), _0x5ee65c(), _0xfb6ead(), _0x507973(), _0x26dfc3(), _0x488781();
    }
    function _0x184f68() {
        const _0xeb963f = _0x5b01da;
        _0x3cbb0c()[_0xeb963f(0xba)]['sync']['get']([_0xeb963f(0x8c)], _0x2b2cd2 => {
            const _0x439c72 = _0xeb963f;
            _0x2b2cd2[_0x439c72(0x8c)] === undefined ? _0x3cbb0c()[_0x439c72(0xba)][_0x439c72(0xb4)][_0x439c72(0xa5)]({ 'disableVoteSubmission': ![] }) : _0x2dfb75[_0x439c72(0x8c)] = _0x2b2cd2['disableVoteSubmission'];
        });
    }
    function _0x54714c() {
        const _0x4b221f = _0x5b01da;
        _0x3cbb0c()['storage'][_0x4b221f(0xb4)][_0x4b221f(0x12c)](['coloredThumbs'], _0x3fbad9 => {
            const _0x497366 = _0x4b221f;
            _0x3fbad9[_0x497366(0xd3)] === undefined ? _0x3cbb0c()['storage']['sync'][_0x497366(0xa5)]({ 'coloredThumbs': ![] }) : _0x2dfb75[_0x497366(0xd3)] = _0x3fbad9[_0x497366(0xd3)];
        });
    }
    function _0x3b0c65() {
        const _0x40e28b = _0x5b01da;
        _0x3cbb0c()[_0x40e28b(0xba)][_0x40e28b(0xb4)][_0x40e28b(0x12c)]([_0x40e28b(0xc1)], _0x22636c => {
            const _0xa17352 = _0x40e28b;
            _0x22636c[_0xa17352(0xc1)] === undefined ? _0x3cbb0c()[_0xa17352(0xba)][_0xa17352(0xb4)][_0xa17352(0xa5)]({ 'coloredBar': ![] }) : _0x2dfb75[_0xa17352(0xc1)] = _0x22636c['coloredBar'];
        });
    }
    function _0x5ee65c() {
        const _0x185394 = _0x5b01da;
        _0x3cbb0c()['storage'][_0x185394(0xb4)][_0x185394(0x12c)]([_0x185394(0x10b)], _0x2ceec2 => {
            const _0x13b23c = _0x185394;
            _0x2ceec2[_0x13b23c(0x10b)] === undefined ? _0x3cbb0c()[_0x13b23c(0xba)][_0x13b23c(0xb4)][_0x13b23c(0xa5)]({ 'colorTheme': ![] }) : _0x2dfb75['colorTheme'] = _0x2ceec2[_0x13b23c(0x10b)];
        });
    }
    function _0xfb6ead() {
        const _0x44e5f4 = _0x5b01da;
        _0x3cbb0c()[_0x44e5f4(0xba)][_0x44e5f4(0xb4)][_0x44e5f4(0x12c)]([_0x44e5f4(0xe2)], _0x27384 => {
            const _0x28ac4f = _0x44e5f4;
            _0x27384['numberDisplayFormat'] === undefined ? _0x3cbb0c()[_0x28ac4f(0xba)]['sync'][_0x28ac4f(0xa5)]({ 'numberDisplayFormat': _0x28ac4f(0xed) }) : _0x2dfb75[_0x28ac4f(0xe2)] = _0x27384[_0x28ac4f(0xe2)];
        });
    }
    function _0x507973() {
        const _0x42b22e = _0x5b01da;
        _0x3cbb0c()[_0x42b22e(0xba)][_0x42b22e(0xb4)]['get']([_0x42b22e(0x108)], _0x5570be => {
            const _0x175137 = _0x42b22e;
            _0x5570be[_0x175137(0x108)] === undefined ? _0x3cbb0c()['storage'][_0x175137(0xb4)]['set']({ 'showTooltipPercentage': ![] }) : _0x2dfb75[_0x175137(0x108)] = _0x5570be[_0x175137(0x108)];
        });
    }
    function _0x26dfc3() {
        const _0x5c8e1b = _0x5b01da;
        _0x3cbb0c()['storage']['sync'][_0x5c8e1b(0x12c)]([_0x5c8e1b(0x10a)], _0x551c36 => {
            const _0x3ccd29 = _0x5c8e1b;
            _0x551c36[_0x3ccd29(0x10a)] === undefined ? _0x3cbb0c()['storage']['sync'][_0x3ccd29(0xa5)]({ 'tooltipPercentageMode': _0x3ccd29(0x11c) }) : _0x2dfb75[_0x3ccd29(0x10a)] = _0x551c36[_0x3ccd29(0x10a)];
        });
    }
    function _0x488781() {
        const _0x54b592 = _0x5b01da;
        _0x3cbb0c()['storage'][_0x54b592(0xb4)]['get'](['numberDisplayReformatLikes'], _0x676b68 => {
            const _0x41790b = _0x54b592;
            _0x676b68['numberDisplayReformatLikes'] === undefined ? _0x3cbb0c()[_0x41790b(0xba)][_0x41790b(0xb4)][_0x41790b(0xa5)]({ 'numberDisplayReformatLikes': ![] }) : _0x2dfb75[_0x41790b(0x132)] = _0x676b68[_0x41790b(0x132)];
        });
    }
    ;
    function _0x58c273() {
        const _0x40c3f3 = _0x5b01da;
        if (_0x4c9e96()) {
            let _0x1794e9 = document[_0x40c3f3(0x89)](_0x9bd32() ? _0x40c3f3(0x98) : _0x40c3f3(0x80));
            for (let _0x27e529 of _0x1794e9) {
                if (_0x47b199(_0x27e529))
                    return _0x27e529;
            }
        }
        if (_0x9bd32())
            return document[_0x40c3f3(0xb7)]('.slim-video-action-bar-actions');
        return document[_0x40c3f3(0x87)](_0x40c3f3(0xd6))?.[_0x40c3f3(0xac)] === null ? document['querySelector']('ytd-menu-renderer.ytd-watch-metadata\x20>\x20div') : document[_0x40c3f3(0x87)](_0x40c3f3(0xd6))?.[_0x40c3f3(0xb7)](_0x40c3f3(0xa3));
    }
    function _0x2503ad() {
        const _0x3afa34 = _0x5b01da;
        return _0x58c273()['children'][0x0][_0x3afa34(0x138)] === _0x3afa34(0xe0) ? _0x58c273()[_0x3afa34(0x10d)][0x0][_0x3afa34(0x10d)][0x0] : _0x58c273()[_0x3afa34(0x10d)][0x0];
    }
    function _0x335160() {
        const _0x2959f0 = _0x5b01da;
        return _0x2503ad()[_0x2959f0(0xb7)]('#text') ?? _0x2503ad()[_0x2959f0(0xa9)]('yt-formatted-string')[0x0];
    }
    function _0x54faa1() {
        const _0x1ca01c = _0x5b01da;
        return _0x58c273()['children'][0x0][_0x1ca01c(0x138)] === _0x1ca01c(0xe0) ? _0x58c273()['children'][0x0][_0x1ca01c(0x10d)][0x1] : _0x58c273()['children'][0x1];
    }
    function _0x3bbc2d() {
        const _0x3f5bed = _0x5b01da;
        let _0x3b621c = _0x54faa1()[_0x3f5bed(0xb7)]('#text') ?? _0x54faa1()[_0x3f5bed(0xa9)](_0x3f5bed(0x92))[0x0] ?? _0x54faa1()['querySelector'](_0x3f5bed(0x8e));
        if (_0x3b621c == null) {
            let _0x5ce19e = document[_0x3f5bed(0x12b)](_0x3f5bed(0xad));
            _0x5ce19e['id'] = _0x3f5bed(0x118), _0x54faa1()[_0x3f5bed(0xb7)](_0x3f5bed(0xe3))['appendChild'](_0x5ce19e), _0x54faa1()['querySelector'](_0x3f5bed(0xe3))[_0x3f5bed(0x9a)][_0x3f5bed(0x128)] = _0x3f5bed(0x119), _0x3b621c = _0x54faa1()[_0x3f5bed(0xb7)]('#text');
        }
        return _0x3b621c;
    }
    function _0x45c9d8() {
        const _0x5dd4b2 = _0x5b01da;
        return document[_0x5dd4b2(0xb7)](_0x5dd4b2(0x110)) ? !![] : ![];
    }
    ;
    function _0x743caf(_0xed1103) {
        const _0x23398e = _0x5b01da;
        _0x2dfb75[_0x23398e(0x8c)] !== !![] && _0x3cbb0c()[_0x23398e(0x99)]['sendMessage']({
            'message': _0x23398e(0x114),
            'vote': _0xed1103,
            'videoId': _0x1792a6(window[_0x23398e(0xe9)][_0x23398e(0x10c)])
        });
    }
    function _0x254655() {
        const _0x161ceb = _0x5b01da;
        if (_0x45c9d8() === ![]) {
            if (_0x4b55d2[_0x161ceb(0x8f)] === _0x4583c9) {
                _0x743caf(0x1);
                if (_0x4b55d2[_0x161ceb(0xcc)] > 0x0)
                    _0x4b55d2[_0x161ceb(0xcc)]--;
                _0x4b55d2[_0x161ceb(0xef)]++, _0x140233(_0x4b55d2[_0x161ceb(0xef)], _0x4b55d2[_0x161ceb(0xcc)]), _0x2a463b(_0x16feef(_0x4b55d2[_0x161ceb(0xcc)])), _0x4b55d2['previousState'] = _0xfbab13;
            } else {
                if (_0x4b55d2[_0x161ceb(0x8f)] === _0x847c0c)
                    _0x743caf(0x1), _0x4b55d2[_0x161ceb(0xef)]++, _0x140233(_0x4b55d2[_0x161ceb(0xef)], _0x4b55d2[_0x161ceb(0xcc)]), _0x4b55d2[_0x161ceb(0x8f)] = _0xfbab13;
                else {
                    if (_0x4b55d2[_0x161ceb(0x8f)] = _0xfbab13) {
                        _0x743caf(0x0);
                        if (_0x4b55d2[_0x161ceb(0xef)] > 0x0)
                            _0x4b55d2[_0x161ceb(0xef)]--;
                        _0x140233(_0x4b55d2[_0x161ceb(0xef)], _0x4b55d2[_0x161ceb(0xcc)]), _0x4b55d2[_0x161ceb(0x8f)] = _0x847c0c;
                    }
                }
            }
            if (_0x2dfb75['numberDisplayReformatLikes'] === !![]) {
                const _0x1ac688 = _0x4e7aa6();
                _0x1ac688 !== ![] && _0x54b90c(_0x16feef(_0x1ac688));
            }
        }
    }
    function _0x1426be() {
        const _0x4bad29 = _0x5b01da;
        if (_0x45c9d8() == ![]) {
            if (_0x4b55d2[_0x4bad29(0x8f)] === _0x847c0c)
                _0x743caf(-0x1), _0x4b55d2['dislikes']++, _0x2a463b(_0x16feef(_0x4b55d2[_0x4bad29(0xcc)])), _0x140233(_0x4b55d2[_0x4bad29(0xef)], _0x4b55d2['dislikes']), _0x4b55d2[_0x4bad29(0x8f)] = _0x4583c9;
            else {
                if (_0x4b55d2[_0x4bad29(0x8f)] === _0x4583c9) {
                    _0x743caf(0x0);
                    if (_0x4b55d2['dislikes'] > 0x0)
                        _0x4b55d2[_0x4bad29(0xcc)]--;
                    _0x2a463b(_0x16feef(_0x4b55d2['dislikes'])), _0x140233(_0x4b55d2[_0x4bad29(0xef)], _0x4b55d2[_0x4bad29(0xcc)]), _0x4b55d2['previousState'] = _0x847c0c;
                } else {
                    if (_0x4b55d2[_0x4bad29(0x8f)] === _0xfbab13) {
                        _0x743caf(-0x1);
                        if (_0x4b55d2[_0x4bad29(0xef)] > 0x0)
                            _0x4b55d2[_0x4bad29(0xef)]--;
                        _0x4b55d2[_0x4bad29(0xcc)]++, _0x2a463b(_0x16feef(_0x4b55d2[_0x4bad29(0xcc)])), _0x140233(_0x4b55d2['likes'], _0x4b55d2['dislikes']), _0x4b55d2[_0x4bad29(0x8f)] = _0x4583c9;
                        if (_0x2dfb75[_0x4bad29(0x132)] === !![]) {
                            const _0x2f7f71 = _0x4e7aa6();
                            _0x2f7f71 !== ![] && _0x54b90c(_0x16feef(_0x2f7f71));
                        }
                    }
                }
            }
        }
    }
    function _0x144f12() {
        const _0x736cfb = _0x5b01da;
        !window[_0x736cfb(0xb6)] && (_0x2503ad()[_0x736cfb(0x129)](_0x736cfb(0xb0), _0x254655), _0x54faa1()[_0x736cfb(0x129)]('click', _0x1426be), _0x2503ad()[_0x736cfb(0x129)](_0x736cfb(0x90), _0x254655), _0x2503ad()[_0x736cfb(0x129)](_0x736cfb(0x90), _0x1426be), window[_0x736cfb(0xb6)] = !![]);
    }
    function _0x367b50(_0x2db5c9, _0x4f47fc) {
        const _0x71ec03 = _0x5b01da;
        _0x2db5c9[_0x71ec03(0x8c)] !== undefined && _0x44c6d2(_0x2db5c9[_0x71ec03(0x8c)][_0x71ec03(0xf1)]), _0x2db5c9[_0x71ec03(0xd3)] !== undefined && _0x2137f0(_0x2db5c9['coloredThumbs']['newValue']), _0x2db5c9[_0x71ec03(0xc1)] !== undefined && _0xfb87ab(_0x2db5c9[_0x71ec03(0xc1)][_0x71ec03(0xf1)]), _0x2db5c9[_0x71ec03(0x10b)] !== undefined && _0x4696a0(_0x2db5c9['colorTheme'][_0x71ec03(0xf1)]), _0x2db5c9['numberDisplayFormat'] !== undefined && _0x44b7b1(_0x2db5c9[_0x71ec03(0xe2)]['newValue']), _0x2db5c9[_0x71ec03(0x132)] !== undefined && _0x1256a1(_0x2db5c9[_0x71ec03(0x132)][_0x71ec03(0xf1)]);
    }
    function _0x44c6d2(_0x3a5c04) {
        const _0x59c7ee = _0x5b01da;
        _0x2dfb75[_0x59c7ee(0x8c)] = _0x3a5c04;
    }
    function _0x2137f0(_0x2c12db) {
        const _0x1a6348 = _0x5b01da;
        _0x2dfb75[_0x1a6348(0xd3)] = _0x2c12db;
    }
    function _0xfb87ab(_0x2f51af) {
        const _0x5c3293 = _0x5b01da;
        _0x2dfb75[_0x5c3293(0xc1)] = _0x2f51af;
    }
    function _0x4696a0(_0x2f0b23) {
        const _0x2e925a = _0x5b01da;
        if (!_0x2f0b23)
            _0x2f0b23 = _0x2e925a(0xc2);
        _0x2dfb75[_0x2e925a(0x10b)] = _0x2f0b23;
    }
    function _0x44b7b1(_0x2a815a) {
        const _0x4c2d03 = _0x5b01da;
        _0x2dfb75[_0x4c2d03(0xe2)] = _0x2a815a;
    }
    function _0x1256a1(_0x29b34f) {
        _0x2dfb75['numberDisplayReformatLikes'] = _0x29b34f;
    }
    ;
    _0x11b9c7();
    let _0x3f5953 = null;
    function _0x86ac5d(_0xea064c) {
        function _0x2f00b4() {
            const _0xf2d80e = _0x7502;
            (_0x4c9e96() || _0x58c273()?.[_0xf2d80e(0xac)] && _0x160e94()) && (_0x144f12(), _0x6f7bd4(), _0x3cbb0c()['storage'][_0xf2d80e(0xa1)][_0xf2d80e(0xf0)](_0x367b50), clearInterval(_0x3f5953), _0x3f5953 = null);
        }
        _0x3f5953 = setInterval(_0x2f00b4, 0x6f);
    }
    _0x86ac5d(), document['addEventListener'](_0x5b01da(0x9c), function (_0x32e88c) {
        const _0x59812b = _0x5b01da;
        if (_0x3f5953 !== null)
            clearInterval(_0x3f5953);
        window[_0x59812b(0xb6)] = ![], _0x86ac5d();
    });
})()));
function _0x7502(_0x3a132f, _0x39a5e3) {
    const _0x10ef48 = _0x10ef();
    return _0x7502 = function (_0x7502f7, _0x5d18d9) {
        _0x7502f7 = _0x7502f7 - 0x7f;
        let _0x1eaf62 = _0x10ef48[_0x7502f7];
        return _0x1eaf62;
    }, _0x7502(_0x3a132f, _0x39a5e3);
}
function _0x10ef() {
    const _0x1f793a = [
        'newValue',
        'observer',
        'parentElement',
        'head\x20>\x20link[rel=\x27search\x27]',
        'yt-formatted-string#text',
        'compact',
        'parentNode',
        'NEUTRAL_STATE',
        'clientWidth',
        'target',
        'pathname',
        '12HqFIHR',
        '/clip',
        '/shorts',
        '?locale=',
        'setAttribute',
        'input',
        'test',
        'innerHTML',
        '844ytbhOg',
        '#app\x20>\x20div.page-container\x20>\x20ytm-watch\x20>\x20ytm-single-column-watch-next-results-renderer\x20>\x20ytm-slim-video-metadata-section-renderer\x20>\x20ytm-slim-video-action-bar-renderer\x20>\x20div\x20>\x20ytm-slim-metadata-toggle-button-renderer:nth-child(1)',
        '1px\x20solid\x20var(--yt-spec-10-percent-layer)',
        'red',
        'showTooltipPercentage',
        '470UpsghS',
        'tooltipPercentageMode',
        'colorTheme',
        'href',
        'children',
        'type',
        'response\x20from\x20api:',
        'a[href^=\x27https://accounts.google.com/ServiceLogin\x27]',
        'both',
        '8dTzuml',
        'application/json',
        'send_vote',
        'left',
        '#top-level-buttons-computed\x20>\x20ytd-toggle-button-renderer:nth-child(1)',
        'content',
        'text',
        'auto',
        'neon',
        'actions-inner',
        'dash_like',
        'aqua',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<tp-yt-paper-tooltip\x20position=\x22top\x22\x20id=\x22ryd-dislike-tooltip\x22\x20class=\x22style-scope\x20ytd-sentiment-bar-renderer\x22\x20role=\x22tooltip\x22\x20tabindex=\x22-1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--css-build:shady-->',
        ';};background-color:\x20transparent;',
        '/votes?videoId=',
        'toString',
        'appendChild',
        'accessible',
        '.button-renderer-text',
        'right',
        '\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22ryd-bar\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20',
        'ryd-bar-container',
        'width',
        'addEventListener',
        'standard',
        'createElement',
        'get',
        'top-row',
        'unset',
        'attributes',
        '7230Cqbcml',
        'ytm-slim-video-action-bar-renderer',
        'numberDisplayReformatLikes',
        'paddingBottom',
        'error',
        'then',
        'range',
        'clientHeight',
        'tagName',
        'exists',
        '#like-button\x20>\x20ytd-like-button-renderer',
        'beforeend',
        'browser\x20is\x20not\x20supported',
        'observe',
        '1595265dNeYtc',
        'NumberFormat',
        'unexpected\x20mutation\x20observer\x20event:\x20',
        'getElementById',
        'getAttribute',
        'querySelectorAll',
        'options',
        '323125hrOwed',
        'disableVoteSubmission',
        'tp-yt-paper-button#button',
        'span[role=\x27text\x27]',
        'previousState',
        'touchstart',
        'label',
        'yt-formatted-string',
        'magenta',
        'TextLikesDisabled',
        'style-default-active',
        '5044831UkOhKV',
        'borderBottom',
        'ytm-like-button-renderer',
        'runtime',
        'style',
        'format',
        'yt-navigate-finish',
        'from',
        '\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22ryd-tooltip-bar-container\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id=\x22ryd-bar-container\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x20100%;\x20height:\x202px;',
        'lang',
        'includes',
        'onChanged',
        'aria-label',
        '#top-level-buttons-computed',
        'catch',
        'set',
        'readonly',
        'true',
        'top',
        'getElementsByTagName',
        'getBoundingClientRect',
        'language',
        'offsetParent',
        'span',
        '&nbsp;&nbsp;-&nbsp;&nbsp;',
        'toLocaleString',
        'click',
        '<style>\x0a\x0a.rating\x20{\x0a\x20\x20\x20\x20--dir:\x20right;\x0a\x20\x20\x20\x20--fill:\x20gold;\x0a\x20\x20\x20\x20--fillbg:\x20rgba(100,\x20100,\x20100,\x200.15);\x0a\x20\x20\x20\x20--star:\x20url(\x27data:image/svg+xml,<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22M12\x2017.25l-6.188\x203.75\x201.641-7.031-5.438-4.734\x207.172-0.609\x202.813-6.609\x202.813\x206.609\x207.172\x200.609-5.438\x204.734\x201.641\x207.031z\x22/></svg>\x27);\x0a\x20\x20\x20\x20--stars:\x205;\x0a\x20\x20\x20\x20--starSize:\x202.8rem;\x0a\x20\x20\x20\x20--symbol:\x20var(--star);\x0a\x20\x20\x20\x20--value:\x201;\x0a\x20\x20\x20\x20--w:\x20calc(var(--stars)\x20*\x20var(--starSize));\x0a\x20\x20\x20\x20--x:\x20calc(100%\x20*\x20(var(--value)\x20/\x20var(--stars)));\x0a\x20\x20\x20\x20block-size:\x20var(--starSize);\x0a\x20\x20\x20\x20inline-size:\x20var(--w);\x0a\x20\x20\x20\x20position:\x20relative;\x0a\x20\x20\x20\x20touch-action:\x20manipulation;\x0a\x20\x20\x20\x20-webkit-appearance:\x20none;\x0a}\x0a\x0a[dir=\x22rtl\x22]\x20.rating\x20{\x0a\x20\x20\x20\x20--dir:\x20left;\x0a}\x0a.rating::-moz-range-track\x20{\x0a\x20\x20\x20\x20background:\x20linear-gradient(to\x20var(--dir),\x20var(--fill)\x200\x20var(--x),\x20var(--fillbg)\x200\x20var(--x));\x0a\x20\x20\x20\x20block-size:\x20100%;\x0a\x20\x20\x20\x20mask:\x20repeat\x20left\x20center/var(--starSize)\x20var(--symbol);\x0a}\x0a\x0a.rating::-webkit-slider-runnable-track\x20{\x0a\x20\x20\x20\x20background:\x20linear-gradient(to\x20var(--dir),\x20var(--fill)\x200\x20var(--x),\x20var(--fillbg)\x200\x20var(--x));\x0a\x20\x20\x20\x20block-size:\x20100%;\x0a\x20\x20\x20\x20mask:\x20repeat\x20left\x20center/var(--starSize)\x20var(--symbol);\x0a\x20\x20\x20\x20-webkit-mask:\x20repeat\x20left\x20center/var(--starSize)\x20var(--symbol);\x0a}\x0a\x0a.rating::-moz-range-thumb\x20{\x0a\x20\x20\x20\x20height:\x20var(--starSize);\x0a\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20width:\x20var(--starSize);\x0a}\x0a\x0a.rating::-webkit-slider-thumb\x20{\x0a\x20\x20\x20\x20height:\x20var(--starSize);\x0a\x20\x20\x20\x20opacity:\x200;\x0a\x20\x20\x20\x20width:\x20var(--starSize);\x0a\x20\x20\x20\x20-webkit-appearance:\x20none;\x0a}\x0a\x0a.rating,\x0a.rating-label\x20{\x0a\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20font-family:\x20ui-sans-serif,\x20system-ui,\x20sans-serif;\x0a}\x0a\x0a.rating-label\x20{\x0a\x20\x20\x20\x20margin-block-end:\x201rem;\x0a}\x0a\x0a#ryd-bar-container\x20{\x0a\x20\x20background:\x20var(--yt-spec-icon-disabled);\x0a\x20\x20border-radius:\x202px;\x0a}\x0a\x0a#ryd-bar\x20{\x0a\x20\x20background:\x20var(--yt-spec-text-primary);\x0a\x20\x20border-radius:\x202px;\x0a\x20\x20transition:\x20all\x200.15s\x20ease-in-out;\x0a}\x0a\x0a.ryd-tooltip\x20{\x0a\x20\x20position:\x20relative;\x0a\x20\x20display:\x20block;\x0a\x20\x20height:\x202px;\x0a\x20\x20top:\x209px;\x0a}\x0a\x0a.ryd-tooltip-bar-container\x20{\x0a\x20\x20width:\x20100%;\x0a\x20\x20height:\x202px;\x0a\x20\x20position:\x20absolute;\x0a\x20\x20padding-top:\x206px;\x0a\x20\x20padding-bottom:\x2012px;\x0a\x20\x20top:\x20-6px;\x0a}\x0a</style>',
        '44mPpQzl',
        'likes\x20count\x20disabled\x20by\x20creator',
        'sync',
        ';\x20margin-bottom:\x20-2px',
        'returnDislikeButtonlistenersSet',
        'querySelector',
        'ytd-watch-flexy[video-id=\x27',
        ';\x20background-color:\x20',
        'storage',
        'startsWith',
        'dash_dislike',
        'textTempUnavailable',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</tp-yt-paper-tooltip>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20',
        '7050138wYWmsS',
        '6471FzpMiP',
        'coloredBar',
        'classic',
        'gold',
        '#text',
        'long',
        'hostname',
        'innerText',
        '5031572iLOgJm',
        'slice',
        'LIKED_STATE',
        'color',
        'dislikes',
        'toFixed',
        'only_like',
        'replace',
        'searchParams',
        '[return\x20youtube\x20dislike]:\x20',
        'contains',
        'coloredThumbs',
        'stringify',
        'aria-pressed',
        'menu-container',
        'initializing\x20mutation\x20observer',
        'classList',
        'json',
        'log',
        '--fill:rgb(255,\x20215,\x200);--value:',
        'ryd-bar',
        'bottom',
        '&likeCount=',
        'only_dislike',
        'YTD-SEGMENTED-LIKE-DISLIKE-BUTTON-RENDERER',
        'backgroundColor',
        'numberDisplayFormat',
        'button',
        'short',
        'DISLIKED_STATE',
        'forEach',
        'undefined',
        'TP-YT-PAPER-BUTTON',
        'location',
        '&nbsp;/&nbsp;',
        'removeAttribute',
        'documentElement',
        'compactShort',
        'i18n',
        'likes',
        'addListener'
    ];
    _0x10ef = function () {
        return _0x1f793a;
    };
    return _0x10ef();
}