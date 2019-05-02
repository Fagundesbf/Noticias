"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const profissionalSchema_1 = require("../models/profissionalSchema");
exports.default = mongoose.model("profissional", profissionalSchema_1.default);
