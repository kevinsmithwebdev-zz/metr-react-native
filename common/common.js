
// .env file contains "NODE_PATH=src/" to allow absolute paths to this folder

exports.getRandom = function(min, max, isInt) {
  if (isInt)
    return Math.floor(Math.random() * (max - min) + min);
  else
    return Math.random() * (max - min) + min;
}
