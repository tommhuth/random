const random = {
    id() {
        // https://chatgpt.com
        const bytes = crypto.getRandomValues(new Uint8Array(16))

        // Per RFC4122: set bits for version and variant
        bytes[6] = (bytes[6] & 0x0f) | 0x40 // version 4
        bytes[8] = (bytes[8] & 0x3f) | 0x80 // variant 10

        const toHex = (n) => n.toString(16).padStart(2, "0")

        return [
            [...bytes.slice(0, 4)].map(toHex).join(""),
            [...bytes.slice(4, 6)].map(toHex).join(""),
            [...bytes.slice(6, 8)].map(toHex).join(""),
            [...bytes.slice(8, 10)].map(toHex).join(""),
            [...bytes.slice(10, 16)].map(toHex).join("")
        ].join("-")
    },
    boolean(likelihood = .5) {
        return Math.random() < likelihood
    },
    float(min, max) {
        return Math.random() * (max - min) + min
    },
    integer(min, max) {
        return Math.round(random.float(min, max))
    },
    pick(...list) {
        return list[random.integer(0, list.length - 1)]
    },
}

export default random