const random = {
    id() {
        // chatgpt.com/
        const b = crypto.getRandomValues(new Uint8Array(16))

        b[6] = (b[6] & 0x0f) | 0x40
        b[8] = (b[8] & 0x3f) | 0x80

        const hex = []

        for (let i = 0; i < 16; i++) {
            hex.push(b[i].toString(16).padStart(2, "0"))
        }

        return `${hex[0]}${hex[1]}${hex[2]}${hex[3]}-${hex[4]}${hex[5]}-${hex[6]}${hex[7]}-${hex[8]}${hex[9]}-${hex[10]}${hex[11]}${hex[12]}${hex[13]}${hex[14]}${hex[15]}`
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