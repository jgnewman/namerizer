var lists = {
  ANIMAL_PALS: require("./lists/animalpals.json"),
  MILLENIAL_CRINGE: require("./lists/millenialcringe.json"),
  FANCY_PANTS: require("./lists/fancypants.json"),
};

function getLists() {
  var output = {}
  for (var i in lists) {
    if (lists.hasOwnProperty(i)) {
      output[i] = JSON.parse(JSON.stringify(lists[i]));
    }
  }
  return output;
}

function getListIds() {
  var output = []
  for (var i in lists) {
    if (lists.hasOwnProperty(i)) {
      output.push(i);
    }
  }
  return output;
}

function randomArrayItem(array) {
  return array[ Math.floor(Math.random() * array.length) ];
}

function Name(listId) {
  if (!Object.prototype.hasOwnProperty.call(lists, listId)) {
    throw new Error("List", listId, "does not exist");
  }

  this._list = lists[listId];
  this._adjective = randomArrayItem(this._list.adjectives);
  this._noun = randomArrayItem(this._list.nouns);
  this._name = this._adjective + " " + this._noun;
}

Name.prototype = {

  name: function () {
    return this._name;
  },

  camelCased: function () {
    var wordList = this._name.toLowerCase().split(/\s/);
    var camelList = [];
    var word, i;

    for (i = 0; i < wordList.length; i += 1) {
      word = wordList[i];
      if (i !== 0 && /[a-z]/.test(word[0])) {
        word = word[0].toUpperCase() + word.slice(1);
      }
      camelList.push(word);
    }

    return camelList.join("");
  },

  underscored: function () {
    return this._name.toLowerCase().replace(/\s+/g, "_");
  },

  dasherized: function () {
    return this._name.toLowerCase().replace(/\s+/g, "-");
  }

};

function generate(listId) {
  return new Name(listId);
}

module.exports = {
  getListIds: getListIds,
  getLists: getLists,
  generate: generate,
};
