import { getRandom } from './common'

// .env file contains "NODE_PATH=src/" to allow absolute paths to this folder

const CONVERSIONS = {
  LB_PER_KG: 2.20462,
  OZ_PER_G: 0.035274,
  MI_PER_KM: 0.621371,
  FT_PER_M: 3.2808399,
  IN_PER_CM: 0.393701,
  GAL_PER_L: 0.264172,
  FLOZ_PER_CC: 0.033814,
  F_PER_C_FACTOR: 0.55556, F_PER_C_OFFSET: 32,
}

export const CFG = { NUM_SIG_DIGITS: 3, MAX_NUM_ANSWERS: 5, ANSWER_SPREAD: .7 };

export const UNITS =
      [
        {
          imperial: { units: "pounds", abbreviation: "lb", rangeMin: 10, rangeMax: 1000, convert: function(imperial) { return imperial/CONVERSIONS.LB_PER_KG; } },
          metric: { units: "kilograms", abbreviation: "kg", rangeMin: (10/CONVERSIONS.LB_PER_KG), rangeMax: (1000/CONVERSIONS.LB_PER_KG), convert: function(metric) { return metric*CONVERSIONS.LB_PER_KG } }
        },
        {
          imperial: { units: "ounces", abbreviation: "oz", rangeMin: 5, rangeMax: 50, convert: function(imperial) { return imperial/CONVERSIONS.OZ_PER_G; } },
          metric: { units: "grams", abbreviation: "g", rangeMin: (5/CONVERSIONS.OZ_PER_G), rangeMax: (50/CONVERSIONS.OZ_PER_G), convert: function(metric) { return metric*CONVERSIONS.OZ_PER_G } }
        },
        {
          imperial: { units: "miles", abbreviation: "mi", rangeMin: 1, rangeMax: 1000, convert: function(imperial) { return imperial/CONVERSIONS.MI_PER_KM; } },
          metric: { units: "kilometers", abbreviation: "km", rangeMin: (1/CONVERSIONS.MI_PER_KM), rangeMax: (1000/CONVERSIONS.MI_PER_KM), convert: function(metric) { return metric*CONVERSIONS.MI_PER_KM } }
        },
        {
          imperial: { units: "feet", abbreviation: "ft", rangeMin: 1, rangeMax: 500, convert: function(imperial) { return imperial/CONVERSIONS.FT_PER_M; } },
          metric: { units: "meters", abbreviation: "m", rangeMin: (1/CONVERSIONS.FT_PER_M), rangeMax: (500/CONVERSIONS.FT_PER_M), convert: function(metric) { return metric*CONVERSIONS.FT_PER_M } }
        },
        {
          imperial: { units: "inches", abbreviation: "in", rangeMin: 2, rangeMax: 100, convert: function(imperial) { return imperial/CONVERSIONS.IN_PER_CM; } },
          metric: { units: "centimeters", abbreviation: "cm", rangeMin: (2/CONVERSIONS.IN_PER_CM), rangeMax: (100/CONVERSIONS.IN_PER_CM), convert: function(metric) { return metric*CONVERSIONS.IN_PER_CM } }
        },
        {
          imperial: { units: "gallons", abbreviation: "gal", rangeMin: 1, rangeMax: 100, convert: function(imperial) { return imperial/CONVERSIONS.GAL_PER_L; } },
          metric: { units: "liters", abbreviation: "l", rangeMin: (1/CONVERSIONS.GAL_PER_L), rangeMax: (500/CONVERSIONS.GAL_PER_L), convert: function(metric) { return metric*CONVERSIONS.GAL_PER_L } }
        },
        {
          imperial: { units: "fluid ounces", abbreviation: "fl oz", rangeMin: 1, rangeMax: 30, convert: function(imperial) { return imperial/CONVERSIONS.FLOZ_PER_CC; } },
          metric: { units: "cubic centimeters", abbreviation: "cc", rangeMin: (1/CONVERSIONS.FLOZ_PER_CC), rangeMax: (30/CONVERSIONS.FLOZ_PER_CC), convert: function(metric) { return metric*CONVERSIONS.FLOZ_PER_CC } }
        },
        {
          imperial: { units: "fahrenheit", abbreviation: "°F", rangeMin: 50, rangeMax: 130, convert: function(imperial) { return (imperial-CONVERSIONS.F_PER_C_OFFSET)*CONVERSIONS.F_PER_C_FACTOR; } },
          metric: { units: "celsius", abbreviation: "°C", rangeMin: 10, rangeMax: 54.4, convert: function(metric) { return (metric/CONVERSIONS.F_PER_C_FACTOR)+CONVERSIONS.F_PER_C_OFFSET; } }
        },
      ]


export const MESSAGES = {
  start: ["What do you think?", "Wanna take a guess?", "Take a shot?"],
  success: ["Well done!", "Awesome!", "You're a star!", "You aren't cheating, are you?",
    "Tres bien!", "Ichi ban!", "Sehr gut!", "Molto bene!"],
  failure: ["Too bad.", "Better luck next time.", "Sorry, it takes practice.", "Quelle dommage."],
  random: function(type) {
    if (this.hasOwnProperty(type) && type!=="random")  // wowsers - get function name dynamically?
      return this[type][getRandom(0, this[type].length, true)];
    else {
      console.error('Type "' + type + '" is not a valid property of MESSAGES.');
      return "Message type error.";
    }
  }
}

export const RADIO = {
  TINT: '#1704E0',
  SELECTED_TINT: 'white',
  BACK_TINT: 'antiquewhite'
}

export const DIFFICULTIES = [
  'Easy',
  'Medium',
  'Hard',
  'Lethal'
]

export const FOOTER = [
  '\u00A92017 Kevin Smith Web Development',
  'kevinsmithwebdev.com'
]
