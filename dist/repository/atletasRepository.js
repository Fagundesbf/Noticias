"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const atletasSchema_1 = require("../models/atletasSchema");
exports.default = mongoose.model("news", atletasSchema_1.default);
