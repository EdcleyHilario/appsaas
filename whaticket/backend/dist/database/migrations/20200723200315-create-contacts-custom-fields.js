'use strict';
function _0x53b7() {
    const _0x8d8655 = [
        'ContactCus',
        'GfdKt',
        'tomFields',
        '6DTyWAD',
        'DATE',
        '2837961xHFiAl',
        '10225klfUex',
        'SiVKM',
        '7469330ImiYJp',
        'primaryKey',
        'type',
        'Contacts',
        '__esModule',
        '736LojNKT',
        'autoIncrem',
        'zitSa',
        'sequelize',
        '1842mwrELp',
        'IWidu',
        'exports',
        'allowNull',
        '700244mXTDzf',
        'STRING',
        'INTEGER',
        'DataTypes',
        'createTabl',
        'ent',
        'defineProp',
        'erty',
        'CASCADE',
        'dropTable',
        'value',
        '45168siHKZu',
        '1652MTxQVL',
        '4498956cuPvfu'
    ];
    _0x53b7 = function () {
        return _0x8d8655;
    };
    return _0x53b7();
}
const _0x45ef47 = _0x296f;
(function (_0x5722f1, _0x1c799a) {
    const _0x6ccf13 = _0x296f, _0x5ec316 = _0x5722f1();
    while (!![]) {
        try {
            const _0x508aab = parseInt(_0x6ccf13(0xa1)) / (-0x1e3 + -0x8db * 0x4 + 0x2550) * (-parseInt(_0x6ccf13(0xb0)) / (-0x621 * -0x4 + 0xa42 * -0x3 + 0x644)) + -parseInt(_0x6ccf13(0xa6)) / (0x1 * -0x1b2d + 0x131 * 0x3 + 0x179d) * (parseInt(_0x6ccf13(0x95)) / (0x110 + 0x6 * 0x679 + 0x5 * -0x7fa)) + parseInt(_0x6ccf13(0xa9)) / (0x1d90 + -0x1f4a + -0x95 * -0x3) * (parseInt(_0x6ccf13(0xb4)) / (0xc * -0x101 + -0x3 * 0x7b + -0x481 * -0x3)) + parseInt(_0x6ccf13(0xa8)) / (-0x1 * -0xa52 + 0x1b90 + 0x371 * -0xb) + -parseInt(_0x6ccf13(0xa0)) / (-0x1 * 0x1687 + -0x5db * -0x2 + 0xad9 * 0x1) + -parseInt(_0x6ccf13(0xa2)) / (0x42c * -0x8 + 0x859 + -0x8 * -0x322) + parseInt(_0x6ccf13(0xab)) / (0x13 * 0x145 + -0x2049 + 0x834);
            if (_0x508aab === _0x1c799a)
                break;
            else
                _0x5ec316['push'](_0x5ec316['shift']());
        } catch (_0x18824a) {
            _0x5ec316['push'](_0x5ec316['shift']());
        }
    }
}(_0x53b7, 0x41532 + -0x1762a + 0x2359f));
function _0x296f(_0x38764f, _0x26f6e4) {
    const _0x2829c7 = _0x53b7();
    return _0x296f = function (_0x1871d, _0x1cee33) {
        _0x1871d = _0x1871d - (-0x1 * 0x1f61 + -0x25 * -0xa + 0x1e83);
        let _0x463330 = _0x2829c7[_0x1871d];
        return _0x463330;
    }, _0x296f(_0x38764f, _0x26f6e4);
}
const _0x5f5ce6 = {};
_0x5f5ce6[_0x45ef47(0x9f)] = !![], Object[_0x45ef47(0x9b) + _0x45ef47(0x9c)](exports, _0x45ef47(0xaf), _0x5f5ce6);
const sequelize_1 = require(_0x45ef47(0xb3));
module[_0x45ef47(0xb6)] = {
    'up': _0x1e9fd7 => {
        const _0x2e2e57 = _0x45ef47, _0xb58008 = {};
        _0xb58008[_0x2e2e57(0xaa)] = _0x2e2e57(0xa3) + _0x2e2e57(0xa5), _0xb58008[_0x2e2e57(0xa4)] = _0x2e2e57(0xae), _0xb58008[_0x2e2e57(0xb5)] = _0x2e2e57(0x9d);
        const _0x1aa95c = _0xb58008, _0x4e8964 = {};
        _0x4e8964[_0x2e2e57(0xad)] = sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0x97)], _0x4e8964[_0x2e2e57(0xb1) + _0x2e2e57(0x9a)] = !![], _0x4e8964[_0x2e2e57(0xac)] = !![], _0x4e8964[_0x2e2e57(0x94)] = ![];
        const _0x1ea386 = {};
        _0x1ea386[_0x2e2e57(0xad)] = sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0x96)], _0x1ea386[_0x2e2e57(0x94)] = ![];
        const _0x29af94 = {};
        return _0x29af94[_0x2e2e57(0xad)] = sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0x96)], _0x29af94[_0x2e2e57(0x94)] = ![], _0x1e9fd7[_0x2e2e57(0x99) + 'e'](_0x1aa95c[_0x2e2e57(0xaa)], {
            'id': _0x4e8964,
            'name': _0x1ea386,
            'value': _0x29af94,
            'contactId': {
                'type': sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0x97)],
                'references': {
                    'model': _0x1aa95c[_0x2e2e57(0xa4)],
                    'key': 'id'
                },
                'onUpdate': _0x1aa95c[_0x2e2e57(0xb5)],
                'onDelete': _0x1aa95c[_0x2e2e57(0xb5)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0xa7)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[_0x2e2e57(0x98)][_0x2e2e57(0xa7)],
                'allowNull': ![]
            }
        });
    },
    'down': _0x369214 => {
        const _0x1a352f = _0x45ef47, _0x8f437e = {};
        _0x8f437e[_0x1a352f(0xb2)] = _0x1a352f(0xa3) + _0x1a352f(0xa5);
        const _0x3ad536 = _0x8f437e;
        return _0x369214[_0x1a352f(0x9e)](_0x3ad536[_0x1a352f(0xb2)]);
    }
};