import crypto from "crypto";

export function randomCodeGenerator(length = 16) {
    return crypto.randomBytes(length).toString('hex');
}