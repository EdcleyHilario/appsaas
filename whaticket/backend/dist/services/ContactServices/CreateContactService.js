'use strict';
const _0x2cd60d = _0x5d7b;
function _0x3b6a() {
    const _0x4d7642 = [
        '__importDe',
        '7828WkdIdQ',
        '5556213YOjWaD',
        'ATED_CONTA',
        '4026xmOolA',
        'ERR_DUPLIC',
        '50526OfqTTG',
        'where',
        'companyId',
        'include',
        '948516FRcOBf',
        '1276849QmwFLY',
        '5698960gPOCXa',
        'erty',
        'number',
        'rs/AppErro',
        'findOne',
        'ls/Contact',
        'yLBHa',
        '../../erro',
        'extraInfo',
        '../../mode',
        'defineProp',
        'ovpjC',
        'default',
        'name',
        'value',
        '54tkEJfc',
        'email',
        'create',
        'fault',
        '__esModule',
        '2305CqQuGq'
    ];
    _0x3b6a = function () {
        return _0x4d7642;
    };
    return _0x3b6a();
}
(function (_0x52b7b4, _0x484700) {
    const _0x2447cf = _0x5d7b, _0x33a6d3 = _0x52b7b4();
    while (!![]) {
        try {
            const _0x1d6867 = -parseInt(_0x2447cf(0x118)) / (0x144 * 0x11 + -0x31 * 0x4d + -0x6 * 0x121) + parseInt(_0x2447cf(0x116)) / (0x100 * -0xf + 0x602 * 0x3 + -0x1 * 0x304) * (parseInt(_0x2447cf(0x10c)) / (0xc10 * -0x1 + -0x3 * 0x4c4 + 0x2b * 0x9d)) + parseInt(_0x2447cf(0x113)) / (-0x1d5 + 0x14da + -0x1301) * (parseInt(_0x2447cf(0x111)) / (0x154d + -0x237 + 0x65b * -0x3)) + -parseInt(_0x2447cf(0xfb)) / (-0x17be + -0xb * 0x1bd + -0x2ae3 * -0x1) + -parseInt(_0x2447cf(0xfc)) / (-0x88 * 0x25 + -0x2467 + 0x3816) + parseInt(_0x2447cf(0xfd)) / (-0x186e + 0x2cf * -0x4 + 0x23b2) + -parseInt(_0x2447cf(0x114)) / (0x3e6 + -0x425 + 0x48);
            if (_0x1d6867 === _0x484700)
                break;
            else
                _0x33a6d3['push'](_0x33a6d3['shift']());
        } catch (_0x1594db) {
            _0x33a6d3['push'](_0x33a6d3['shift']());
        }
    }
}(_0x3b6a, -0x569b * 0x2b + -0x2d7 * 0x35 + -0x3 * -0x84ffb));
function _0x5d7b(_0x1e9136, _0x1bca55) {
    const _0x5779cd = _0x3b6a();
    return _0x5d7b = function (_0x691ab3, _0x365c93) {
        _0x691ab3 = _0x691ab3 - (0x35c * -0x1 + 0x1b9e + -0x1748);
        let _0x3362b8 = _0x5779cd[_0x691ab3];
        return _0x3362b8;
    }, _0x5d7b(_0x1e9136, _0x1bca55);
}
var __importDefault = this && this[_0x2cd60d(0x112) + _0x2cd60d(0x10f)] || function (_0x5a5247) {
    const _0x5dd91e = _0x2cd60d;
    return _0x5a5247 && _0x5a5247[_0x5dd91e(0x110)] ? _0x5a5247 : { 'default': _0x5a5247 };
};
const _0x23d489 = {};
_0x23d489[_0x2cd60d(0x10b)] = !![], Object[_0x2cd60d(0x107) + _0x2cd60d(0xfe)](exports, _0x2cd60d(0x110), _0x23d489);
const AppError_1 = __importDefault(require(_0x2cd60d(0x104) + _0x2cd60d(0x100) + 'r')), Contact_1 = __importDefault(require(_0x2cd60d(0x106) + _0x2cd60d(0x102))), CreateContactService = async ({
        name: _0x21aa5f,
        number: _0x3ae8f5,
        email: email = '',
        companyId: _0x36c63a,
        extraInfo: extraInfo = []
    }) => {
        const _0x3454fd = _0x2cd60d, _0x4a3457 = {};
        _0x4a3457[_0x3454fd(0x108)] = _0x3454fd(0x117) + _0x3454fd(0x115) + 'CT', _0x4a3457[_0x3454fd(0x103)] = _0x3454fd(0x105);
        const _0x102fc2 = _0x4a3457, _0x2d2eeb = {};
        _0x2d2eeb[_0x3454fd(0xff)] = _0x3ae8f5, _0x2d2eeb[_0x3454fd(0x11a)] = _0x36c63a;
        const _0x34da35 = {};
        _0x34da35[_0x3454fd(0x119)] = _0x2d2eeb;
        const _0xcd34a5 = await Contact_1[_0x3454fd(0x109)][_0x3454fd(0x101)](_0x34da35);
        if (_0xcd34a5)
            throw new AppError_1[(_0x3454fd(0x109))](_0x102fc2[_0x3454fd(0x108)]);
        const _0x987f65 = {};
        _0x987f65[_0x3454fd(0x10a)] = _0x21aa5f, _0x987f65[_0x3454fd(0xff)] = _0x3ae8f5, _0x987f65[_0x3454fd(0x10d)] = email, _0x987f65[_0x3454fd(0x105)] = extraInfo, _0x987f65[_0x3454fd(0x11a)] = _0x36c63a;
        const _0x2951ca = {};
        _0x2951ca[_0x3454fd(0xfa)] = [_0x102fc2[_0x3454fd(0x103)]];
        const _0x5083b9 = await Contact_1[_0x3454fd(0x109)][_0x3454fd(0x10e)](_0x987f65, _0x2951ca);
        return _0x5083b9;
    };
exports[_0x2cd60d(0x109)] = CreateContactService;