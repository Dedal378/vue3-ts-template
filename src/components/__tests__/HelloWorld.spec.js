"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var HelloWorld_vue_1 = require("../HelloWorld.vue");
(0, vitest_1.describe)('HelloWorld', function () {
    (0, vitest_1.it)('renders properly', function () {
        var wrapper = (0, test_utils_1.mount)(HelloWorld_vue_1.default, { props: { msg: 'Hello Vitest' } });
        (0, vitest_1.expect)(wrapper.text()).toContain('Hello Vitest');
    });
});
