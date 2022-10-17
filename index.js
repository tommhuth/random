import cuid from "cuid" 

const random = {
    id() {
        return cuid()
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