'use strict';
function _0x4933() {
    const _0x4ea275 = [
        'default',
        '3007038mYtLPJ',
        'DeletedUse',
        'destroy',
        'ls/User',
        'oPzbs',
        '3450470fQwhxQ',
        'rs/AppErro',
        '../../help',
        'RPeti',
        '5409400FpRzxg',
        '__importDe',
        'findOne',
        '$get',
        'ers/Update',
        '372914oRTHWN',
        '15009wbNWjb',
        '8151309uWpFwC',
        'tsStatus',
        'value',
        '../../mode',
        'erty',
        'defineProp',
        'tickets',
        'ERR_NO_USE',
        'oyDWZ',
        '7bqsiMY',
        '478304vgUgju',
        '50bSLSHw',
        'fault',
        'rOpenTicke',
        '__esModule',
        'where',
        '../../erro',
        'length',
        '50SbRriU',
        'open',
        'glkrb',
        'R_FOUND'
    ];
    _0x4933 = function () {
        return _0x4ea275;
    };
    return _0x4933();
}
const _0x328672 = _0x502e;
(function (_0x181463, _0x39c44d) {
    const _0x48f94f = _0x502e, _0x38ac10 = _0x181463();
    while (!![]) {
        try {
            const _0x5511e8 = -parseInt(_0x48f94f(0x109)) / (-0x977 * 0x2 + -0x2665 + -0x4 * -0xe55) + -parseInt(_0x48f94f(0x116)) / (0x1557 + -0x91c + -0xc39 * 0x1) * (parseInt(_0x48f94f(0x10a)) / (-0x5a7 * 0x2 + 0x9e3 * 0x1 + 0x16e)) + -parseInt(_0x48f94f(0x115)) / (-0x24c7 + -0x22d8 + 0x47a3) * (-parseInt(_0x48f94f(0x11d)) / (0x1c64 + 0x2b * 0xcf + -0x3f24)) + -parseInt(_0x48f94f(0xfb)) / (-0x1 * 0x1105 + 0x1 * -0x2452 + -0x13 * -0x2cf) * (parseInt(_0x48f94f(0x114)) / (0x1f85 * -0x1 + 0x19b1 * 0x1 + 0x5db)) + -parseInt(_0x48f94f(0x104)) / (-0xb * -0x98 + -0x1df * 0x11 + 0x194f) + parseInt(_0x48f94f(0x10b)) / (0x206f + -0x11 * 0xfb + 0x1 * -0xfbb) + parseInt(_0x48f94f(0x100)) / (0x18de + -0x8ec * 0x2 + 0x3 * -0x254);
            if (_0x5511e8 === _0x39c44d)
                break;
            else
                _0x38ac10['push'](_0x38ac10['shift']());
        } catch (_0x291328) {
            _0x38ac10['push'](_0x38ac10['shift']());
        }
    }
}(_0x4933, -0x40cd6 + -0xdd47 * -0x1a + -0x6a7fd));
var __importDefault = this && this[_0x328672(0x105) + _0x328672(0x117)] || function (_0x4745c1) {
    const _0x121249 = _0x328672;
    return _0x4745c1 && _0x4745c1[_0x121249(0x119)] ? _0x4745c1 : { 'default': _0x4745c1 };
};
const _0x47d353 = {};
_0x47d353[_0x328672(0x10d)] = !![], Object[_0x328672(0x110) + _0x328672(0x10f)](exports, _0x328672(0x119), _0x47d353);
const User_1 = __importDefault(require(_0x328672(0x10e) + _0x328672(0xfe))), AppError_1 = __importDefault(require(_0x328672(0x11b) + _0x328672(0x101) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(_0x328672(0x102) + _0x328672(0x108) + _0x328672(0xfc) + _0x328672(0x118) + _0x328672(0x10c))), DeleteUserService = async (_0x52a790, _0x2f320e) => {
        const _0x310656 = _0x328672, _0x652d7a = {};
        _0x652d7a[_0x310656(0x103)] = _0x310656(0x112) + _0x310656(0xf9), _0x652d7a[_0x310656(0x113)] = _0x310656(0x111), _0x652d7a[_0x310656(0xf8)] = _0x310656(0xf7), _0x652d7a[_0x310656(0xff)] = function (_0x5c941e, _0x5921b1) {
            return _0x5c941e > _0x5921b1;
        };
        const _0x509408 = _0x652d7a, _0x3a29f8 = {};
        _0x3a29f8['id'] = _0x52a790;
        const _0xc4b8ce = {};
        _0xc4b8ce[_0x310656(0x11a)] = _0x3a29f8;
        const _0x158f74 = await User_1[_0x310656(0xfa)][_0x310656(0x106)](_0xc4b8ce);
        if (!_0x158f74)
            throw new AppError_1[(_0x310656(0xfa))](_0x509408[_0x310656(0x103)], 0x1db9 + -0x1159 * -0x1 + -0x50e * 0x9);
        const _0x5cb1b6 = await _0x158f74[_0x310656(0x107)](_0x509408[_0x310656(0x113)], { 'where': { 'status': _0x509408[_0x310656(0xf8)] } });
        _0x509408[_0x310656(0xff)](_0x5cb1b6[_0x310656(0x11c)], 0x1544 + -0x1 * 0x1a29 + 0x1 * 0x4e5) && (-0x3 * 0xb69 + 0x211 * -0x3 + 0x286e, UpdateDeletedUserOpenTicketsStatus_1[_0x310656(0xfa)])(_0x5cb1b6, _0x2f320e), await _0x158f74[_0x310656(0xfd)]();
    };
function _0x502e(_0x2d7b0d, _0x3217c5) {
    const _0x74de0a = _0x4933();
    return _0x502e = function (_0x5d5e53, _0x5bf7ec) {
        _0x5d5e53 = _0x5d5e53 - (-0x80e + -0x3 * 0x633 + 0xe * 0x1f9);
        let _0x4a4810 = _0x74de0a[_0x5d5e53];
        return _0x4a4810;
    }, _0x502e(_0x2d7b0d, _0x3217c5);
}
exports[_0x328672(0xfa)] = DeleteUserService;