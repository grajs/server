"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_static_1 = __importDefault(require("koa-static"));
var koa_body_1 = __importDefault(require("koa-body"));
var index_1 = __importDefault(require("./router/index"));
var path_1 = require("path");
var app = new koa_1.default();
app.use(koa_static_1.default(path_1.resolve(__dirname, '../static')));
app.use(koa_body_1.default({ multipart: true }));
app.use(index_1.default.routes()).use(index_1.default.allowedMethods());
app.listen(3000);
