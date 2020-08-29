import SimplexNoise from "simplex-noise"
import cuid from "cuid"

let simplex = new SimplexNoise()

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
    noise(...args) {
        switch (args.length) {
            case 1:
                return (simplex.noise2D(...args, 0) + 1) / 2
            case 2:
                return (simplex.noise2D(...args) + 1) / 2
            case 3:
                return (simplex.noise3D(...args) + 1) / 2
            default:
                throw new Error("Noise requires at least one of x, y, z")
        }
    }
}

export default random