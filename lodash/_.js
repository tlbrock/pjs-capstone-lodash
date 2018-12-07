var _ = {
  clamp(num, min, max) {
    //Clamps num between min and max using if/else
    if (num < min) {
      return min;
    } else if (num > max) {
      return max;
    } else {
      return num;
    }
  },

  inRange(num, start, end) {
    //returns boolean based on whether num is between start and end
    //Handle if no end parameter
    if(!end) {
      end = start;
      start = 0;
    };
    //check if start/end need to be swapped and return
    //value based on comparison
    if (start > end) {
      return ( num >= end && num < start );
    } else {
      return ( num >= start && num < end );
    }
  },

  words(string, pattern=" ") {
    //just using the built in split method
    return string.split(pattern);
  },

  // pad(string, length) {
  //   //using while loop to add padding to right then left
  //   //until length is reached
  //   while(string.length < length) {
  //     string = string + " ";
  //     if(string.length < length) {
  //       string = " " + string;
  //     };
  //   };
  //   return string;
  // },

  pad(string, length, char=" ") {
    //implemented with full lodash support
    if (string.length >= length) {return string};
    let diff = length - string.length;
    let padLength = Math.floor(diff/2);
    let padding = "";
    //creates even padding for front and back
    while(padding.length < padLength) {
      padding = padding + char.substring(0, padLength - padding.length)
    };
    newString = padding + string + padding;
    //adds final character if uneven padding required
    if (newString.length < length) {
      newString = newString + char[padding.length%char.length];
    };
    return newString;

  },

  // has(object, key) {
  //   return object.hasOwnProperty(key);
  // },

    // has(object, path) {
    //   if (object[path]) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },

  has(object, path) {
    //Recurses down path to check for value
    //if path in string form, change to array
    if (typeof path == 'string') {
      path = path.split(".");
    }
    //if at end of array, check for value and return true
    //elseif value exists and array > 1, call _has on nested object
    //if no value found return false
    if (object[path[0]] && path.length == 1) {
      return true;
    } else if (object[path[0]] && path.length > 1) {
        return this.has(object[path[0]], this.drop(path))
    } else {
      return false;
    };
  },

  invert(object) {
    //returns object with keys/values inverted
    let inverse = {}
    for (var key in object) {
      inverse[object[key]] = key;
    };
    return inverse;
  },

  findKey(object, fxn) {
    //returns key in object for when fxn in true
    for (key in object) {
      if (fxn(object[key])) {
        return key;
      };
    };
    return undefined;
  },

  drop(array, num=1) {
    //returns new array
    return array.slice(num);
  },

  dropWhile(array, fxn) {
    //drops first element until fxn returns false, returns result
    let arrayClone = array;
    for (var i = 0; i < array.length; i++) {
      if (fxn(array[i], i, array)) {
        arrayClone = this.drop(arrayClone);
      } else {
        return arrayClone;
      };
    };
  },

  chunk(array, size=1) {
    //returns array with subarrays of size size
    let chunks = [];
    for (let i = 0; i < array.length; i = i + size) {
      chunks.push(array.slice(i, i + size));
    };
    return chunks;
  }

}


// Do not write or modify code below this line.
module.exports = _;
