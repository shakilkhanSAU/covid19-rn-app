import { colors } from "../../theme/colors"
import { typography } from "../../theme/typography"


const Base = {
    fontFamily: typography.graphikPrimary,
    fontSize: 18,
    color: 'black'
}

const Medium = {
    fontFamily: typography.graphikMedium,
    color: colors.white
}

const Bold = {
    fontFamily: typography.graphikBold,
    color: colors.white
}

export const presets = {
    default: {
        ...Base
    },
    medium: {
        ...Medium, fontSize: 24
    },
    bold: {
        ...Bold, fontSize: 26
    },
    h1: {
        ...Bold, fontSize: 38
    },
    h2: {
        ...Medium, fontSize: 34
    },
    h3: {
        ...Medium, fontSize: 18, color: 'black'
    },
    h4: {
        ...Medium, fontSize: 23
    }
}