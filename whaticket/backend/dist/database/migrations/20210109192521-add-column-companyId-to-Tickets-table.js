'use strict';
const _0x2083c6 = _0x549e;
function _0x549e(_0x24e8cd, _0x392b2b) {
    const _0xb25c16 = _0x33fb();
    return _0x549e = function (_0x18fd34, _0x9a33a9) {
        _0x18fd34 = _0x18fd34 - (0x1fd2 * 0x1 + -0x1fa1 + -0x6b * -0x2);
        let _0x250d9b = _0xb25c16[_0x18fd34];
        return _0x250d9b;
    }, _0x549e(_0x24e8cd, _0x392b2b);
}
function _0x33fb() {
    const _0x147c1e = [
        'value',
        '477tcUUVy',
        'erty',
        '39576QBUOQd',
        'sequelize',
        '504710YrKZWs',
        'companyId',
        '54tAuRTh',
        'mArLy',
        '__esModule',
        'removeColu',
        'addColumn',
        '4437410etkluR',
        'defineProp',
        'DataTypes',
        'exports',
        'SET\x20NULL',
        'WOrtM',
        'Vipbr',
        'LCqQa',
        'Tickets',
        '49641gMPjBS',
        'Gnbyh',
        '25095GMicZQ',
        'Companies',
        'CASCADE',
        '4611JylHMt',
        'INTEGER',
        '279334ODsZaT',
        'SSyae',
        '4xltnud',
        'aMRCE'
    ];
    _0x33fb = function () {
        return _0x147c1e;
    };
    return _0x33fb();
}
(function (_0x4d65cc, _0x27637a) {
    const _0x54db83 = _0x549e, _0x11996a = _0x4d65cc();
    while (!![]) {
        try {
            const _0x3f1d27 = -parseInt(_0x54db83(0x10c)) / (-0x1d * 0x36 + 0x248e + -0xa25 * 0x3) + parseInt(_0x54db83(0x113)) / (-0x1d85 + -0x56c * 0x7 + 0x19 * 0x2b3) + parseInt(_0x54db83(0x111)) / (0x12a + 0x22b8 + -0x23df) + -parseInt(_0x54db83(0x115)) / (0x1e83 + 0x1bd2 + -0x3a51) * (parseInt(_0x54db83(0x11c)) / (0x1a73 + 0x2 * 0x2a4 + -0x3 * 0xa92)) + parseInt(_0x54db83(0x11e)) / (-0x133e + 0x2363 + -0x101f) * (-parseInt(_0x54db83(0x10e)) / (0x1665 + 0x7 * 0x95 + 0x1 * -0x1a71)) + parseInt(_0x54db83(0x11a)) / (-0x1 * 0x322 + 0xf0 + -0xbe * -0x3) * (-parseInt(_0x54db83(0x118)) / (-0x1f6d * -0x1 + -0x753 + -0x1811)) + parseInt(_0x54db83(0x123)) / (0xe3a * 0x2 + 0xe5d * -0x1 + -0xe0d);
            if (_0x3f1d27 === _0x27637a)
                break;
            else
                _0x11996a['push'](_0x11996a['shift']());
        } catch (_0x86d932) {
            _0x11996a['push'](_0x11996a['shift']());
        }
    }
}(_0x33fb, -0x13a0 * 0x35 + 0x5bb1 * -0x9 + -0x1e25f * -0x5));
const _0x1906db = {};
_0x1906db[_0x2083c6(0x117)] = !![], Object[_0x2083c6(0x124) + _0x2083c6(0x119)](exports, _0x2083c6(0x120), _0x1906db);
const sequelize_1 = require(_0x2083c6(0x11b));
module[_0x2083c6(0x126)] = {
    'up': _0x5c3f5c => {
        const _0x213bee = _0x2083c6, _0x12fe37 = {};
        _0x12fe37[_0x213bee(0x108)] = _0x213bee(0x10b), _0x12fe37[_0x213bee(0x116)] = _0x213bee(0x11d), _0x12fe37[_0x213bee(0x11f)] = _0x213bee(0x10f), _0x12fe37[_0x213bee(0x10a)] = _0x213bee(0x110), _0x12fe37[_0x213bee(0x109)] = _0x213bee(0x107);
        const _0x3a259e = _0x12fe37;
        return _0x5c3f5c[_0x213bee(0x122)](_0x3a259e[_0x213bee(0x108)], _0x3a259e[_0x213bee(0x116)], {
            'type': sequelize_1[_0x213bee(0x125)][_0x213bee(0x112)],
            'references': {
                'model': _0x3a259e[_0x213bee(0x11f)],
                'key': 'id'
            },
            'onUpdate': _0x3a259e[_0x213bee(0x10a)],
            'onDelete': _0x3a259e[_0x213bee(0x109)]
        });
    },
    'down': _0x77336c => {
        const _0x527941 = _0x2083c6, _0x5c53c4 = {};
        _0x5c53c4[_0x527941(0x10d)] = _0x527941(0x10b), _0x5c53c4[_0x527941(0x114)] = _0x527941(0x11d);
        const _0x5ea357 = _0x5c53c4;
        return _0x77336c[_0x527941(0x121) + 'mn'](_0x5ea357[_0x527941(0x10d)], _0x5ea357[_0x527941(0x114)]);
    }
};