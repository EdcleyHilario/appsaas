'use strict';
const _0x342bca = _0x3f77;
(function (_0x2fc926, _0x445904) {
    const _0x3a1061 = _0x3f77, _0x2646f0 = _0x2fc926();
    while (!![]) {
        try {
            const _0x50cb3d = -parseInt(_0x3a1061(0x7d)) / (0x124f + -0x2 * -0x151 + -0x14f0) + -parseInt(_0x3a1061(0x7e)) / (0xdd * -0x17 + 0x1035 * -0x2 + 0x3 * 0x116d) + parseInt(_0x3a1061(0x89)) / (-0x2aa * -0x1 + 0x1317 + 0xf2 * -0x17) * (parseInt(_0x3a1061(0x8a)) / (-0x3 * 0x5b5 + -0x1 * 0x2205 + 0x3328)) + parseInt(_0x3a1061(0x74)) / (0x2623 * 0x1 + 0x5 * 0x2c9 + -0x340b) + parseInt(_0x3a1061(0x77)) / (0x7 * 0x12a + -0x6e8 + -0x138) * (-parseInt(_0x3a1061(0x8c)) / (-0x1 * -0x4a3 + -0x1 * 0x21f5 + 0x1d59)) + parseInt(_0x3a1061(0x8e)) / (0x24f1 + -0x1 * 0x207d + -0x46c) * (-parseInt(_0x3a1061(0x6c)) / (0x1 * 0x207f + 0x2696 + -0x470c)) + parseInt(_0x3a1061(0x86)) / (-0x1 * 0x43c + 0x914 + -0x4ce) * (parseInt(_0x3a1061(0x83)) / (0x336 + 0x1b85 + 0x3d6 * -0x8));
            if (_0x50cb3d === _0x445904)
                break;
            else
                _0x2646f0['push'](_0x2646f0['shift']());
        } catch (_0x119084) {
            _0x2646f0['push'](_0x2646f0['shift']());
        }
    }
}(_0x1a2a, 0x19a976 + 0x355 * 0x2b1 + -0x143b72 * 0x1));
var __importDefault = this && this[_0x342bca(0x7b) + _0x342bca(0x80)] || function (_0x3f57ea) {
    const _0x5dac93 = _0x342bca;
    return _0x3f57ea && _0x3f57ea[_0x5dac93(0x75)] ? _0x3f57ea : { 'default': _0x3f57ea };
};
function _0x3f77(_0x5de11a, _0x56bc9c) {
    const _0x221b15 = _0x1a2a();
    return _0x3f77 = function (_0x4faa0e, _0x372c95) {
        _0x4faa0e = _0x4faa0e - (0x1111 + 0x747 * -0x1 + 0x1 * -0x95f);
        let _0x1983ad = _0x221b15[_0x4faa0e];
        return _0x1983ad;
    }, _0x3f77(_0x5de11a, _0x56bc9c);
}
const _0x433c13 = {};
_0x433c13[_0x342bca(0x88)] = !![], Object[_0x342bca(0x84) + _0x342bca(0x6d)](exports, _0x342bca(0x75), _0x433c13);
const sequelize_1 = require(_0x342bca(0x73)), AppError_1 = __importDefault(require(_0x342bca(0x8d) + _0x342bca(0x72))), Ticket_1 = __importDefault(require(_0x342bca(0x81) + _0x342bca(0x82))), CheckContactOpenTickets = async (_0x55a2d3, _0x1c1422) => {
        const _0x2ed29b = _0x342bca, _0x14d297 = {};
        _0x14d297[_0x2ed29b(0x70)] = _0x2ed29b(0x7a), _0x14d297[_0x2ed29b(0x8b)] = _0x2ed29b(0x6f), _0x14d297[_0x2ed29b(0x79)] = _0x2ed29b(0x85) + _0x2ed29b(0x87) + 'T';
        const _0x1a798e = _0x14d297;
        let _0x4bd9d0;
        if (!_0x1c1422) {
            const _0x452d3c = {
                    [sequelize_1['Op']['or']]: [
                        _0x1a798e[_0x2ed29b(0x70)],
                        _0x1a798e[_0x2ed29b(0x8b)]
                    ]
                }, _0x1e1381 = {};
            _0x1e1381[_0x2ed29b(0x6b)] = _0x55a2d3, _0x1e1381[_0x2ed29b(0x71)] = _0x452d3c;
            const _0x121311 = {};
            _0x121311[_0x2ed29b(0x6e)] = _0x1e1381, _0x4bd9d0 = await Ticket_1[_0x2ed29b(0x78)][_0x2ed29b(0x7c)](_0x121311);
        } else {
            const _0x326f0e = {
                    [sequelize_1['Op']['or']]: [
                        _0x1a798e[_0x2ed29b(0x70)],
                        _0x1a798e[_0x2ed29b(0x8b)]
                    ]
                }, _0x1bfe3e = {};
            _0x1bfe3e[_0x2ed29b(0x6b)] = _0x55a2d3, _0x1bfe3e[_0x2ed29b(0x71)] = _0x326f0e, _0x1bfe3e[_0x2ed29b(0x7f)] = _0x1c1422;
            const _0x4a875d = {};
            _0x4a875d[_0x2ed29b(0x6e)] = _0x1bfe3e, _0x4bd9d0 = await Ticket_1[_0x2ed29b(0x78)][_0x2ed29b(0x7c)](_0x4a875d);
        }
        console[_0x2ed29b(0x76)](_0x4bd9d0);
        if (_0x4bd9d0)
            throw new AppError_1[(_0x2ed29b(0x78))](_0x1a798e[_0x2ed29b(0x79)]);
    };
function _0x1a2a() {
    const _0x34b4d1 = [
        'qYsqW',
        'status',
        'AppError',
        'sequelize',
        '503985cjRcQV',
        '__esModule',
        'log',
        '6zZXNcx',
        'default',
        'TkJma',
        'open',
        '__importDe',
        'findOne',
        '496231EmyThZ',
        '2773086XFQeiG',
        'whatsappId',
        'fault',
        '../models/',
        'Ticket',
        '11506PVNLBq',
        'defineProp',
        'ERR_OTHER_',
        '18860RExGcx',
        'OPEN_TICKE',
        'value',
        '936rhUAgV',
        '23308AOJBUy',
        'IdInR',
        '3039484OeyMVp',
        '../errors/',
        '2524120exMfNC',
        'contactId',
        '18DaOWLC',
        'erty',
        'where',
        'pending'
    ];
    _0x1a2a = function () {
        return _0x34b4d1;
    };
    return _0x1a2a();
}
exports[_0x342bca(0x78)] = CheckContactOpenTickets;