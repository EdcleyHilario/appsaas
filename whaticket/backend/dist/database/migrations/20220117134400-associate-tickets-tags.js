'use strict';
function _0x5705(_0x4001bb, _0x14e988) {
    const _0x1d8388 = _0x2f49();
    return _0x5705 = function (_0x37985c, _0x4b22d4) {
        _0x37985c = _0x37985c - (-0x225b + 0xa9 * 0xd + 0x2 * 0xdc4);
        let _0x33649d = _0x1d8388[_0x37985c];
        return _0x33649d;
    }, _0x5705(_0x4001bb, _0x14e988);
}
const _0x21c053 = _0x5705;
(function (_0x4511cd, _0x5e1ac1) {
    const _0x5b3615 = _0x5705, _0x2b8c4e = _0x4511cd();
    while (!![]) {
        try {
            const _0x169c44 = parseInt(_0x5b3615(0x1d6)) / (-0x59b * 0x5 + -0x8ca + 0x24d2) + -parseInt(_0x5b3615(0x1cf)) / (-0x3 * 0x347 + -0x1 * -0x1754 + -0xd7d) * (-parseInt(_0x5b3615(0x1c5)) / (0x1ce1 + -0x12e * -0x3 + -0x4 * 0x81a)) + -parseInt(_0x5b3615(0x1de)) / (-0x7e4 * -0x2 + 0x1500 + 0x34 * -0xb5) * (parseInt(_0x5b3615(0x1c8)) / (-0x149f + 0x23ce + 0xf2a * -0x1)) + parseInt(_0x5b3615(0x1d9)) / (0xb2 + 0x801 + -0x8ad) + parseInt(_0x5b3615(0x1d7)) / (0x1 * -0x1fba + 0x313 * -0x1 + 0x22d4) + -parseInt(_0x5b3615(0x1c2)) / (0x15c8 + -0x8c9 + -0x1 * 0xcf7) + parseInt(_0x5b3615(0x1c4)) / (-0xb * 0x2b + -0x11 * 0x187 + 0x1bd9 * 0x1);
            if (_0x169c44 === _0x5e1ac1)
                break;
            else
                _0x2b8c4e['push'](_0x2b8c4e['shift']());
        } catch (_0x333ff0) {
            _0x2b8c4e['push'](_0x2b8c4e['shift']());
        }
    }
}(_0x2f49, 0x1 * -0x6c0d3 + -0x805d6 * -0x1 + 0x300d7 * 0x1));
const _0x2913b0 = {};
_0x2913b0[_0x21c053(0x1ca)] = !![], Object[_0x21c053(0x1d1) + _0x21c053(0x1cc)](exports, _0x21c053(0x1cb), _0x2913b0);
const sequelize_1 = require(_0x21c053(0x1cd));
function _0x2f49() {
    const _0x4fa33b = [
        'CASCADE',
        '271527lOOZUE',
        '1857779kKhdoA',
        'dropTable',
        '2715342zFvsuW',
        'QoqRm',
        'Tickets',
        'rMvOy',
        'INTEGER',
        '1913332vYNSAe',
        '2585664dXVbCt',
        'exports',
        '725895EIroeD',
        '4899CvQaHA',
        'DATE',
        'CndiG',
        '5nzZNfD',
        'DataTypes',
        'value',
        '__esModule',
        'erty',
        'sequelize',
        'Tags',
        '14kPROxQ',
        'kLIrl',
        'defineProp',
        'createTabl',
        'MtYJE',
        'TicketTags'
    ];
    _0x2f49 = function () {
        return _0x4fa33b;
    };
    return _0x2f49();
}
module[_0x21c053(0x1c3)] = {
    'up': _0x16a145 => {
        const _0xf46b96 = _0x21c053, _0x27a9be = {};
        _0x27a9be[_0xf46b96(0x1dc)] = _0xf46b96(0x1d4), _0x27a9be[_0xf46b96(0x1c7)] = _0xf46b96(0x1db), _0x27a9be[_0xf46b96(0x1d0)] = _0xf46b96(0x1d5), _0x27a9be[_0xf46b96(0x1da)] = _0xf46b96(0x1ce);
        const _0x4bf912 = _0x27a9be;
        return _0x16a145[_0xf46b96(0x1d2) + 'e'](_0x4bf912[_0xf46b96(0x1dc)], {
            'ticketId': {
                'type': sequelize_1[_0xf46b96(0x1c9)][_0xf46b96(0x1dd)],
                'references': {
                    'model': _0x4bf912[_0xf46b96(0x1c7)],
                    'key': 'id'
                },
                'onUpdate': _0x4bf912[_0xf46b96(0x1d0)],
                'onDelete': _0x4bf912[_0xf46b96(0x1d0)],
                'allowNull': ![]
            },
            'tagId': {
                'type': sequelize_1[_0xf46b96(0x1c9)][_0xf46b96(0x1dd)],
                'references': {
                    'model': _0x4bf912[_0xf46b96(0x1da)],
                    'key': 'id'
                },
                'onUpdate': _0x4bf912[_0xf46b96(0x1d0)],
                'onDelete': _0x4bf912[_0xf46b96(0x1d0)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0xf46b96(0x1c9)][_0xf46b96(0x1c6)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0xf46b96(0x1c9)][_0xf46b96(0x1c6)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x3b1c14 => {
        const _0x4e99ce = _0x21c053, _0x179d90 = {};
        _0x179d90[_0x4e99ce(0x1d3)] = _0x4e99ce(0x1d4);
        const _0x2d60d8 = _0x179d90;
        return _0x3b1c14[_0x4e99ce(0x1d8)](_0x2d60d8[_0x4e99ce(0x1d3)]);
    }
};