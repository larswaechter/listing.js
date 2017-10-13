(function () {
  'use strict';

  /*** Private Functions ***/
  function getDelimiter(list) {
    var delimiter = String(list).match(/,|;|:/g);
    return delimiter != null && delimiter.length ? delimiter[0] : ',';
  }

  function listToArray(list) {
    return list.split(getDelimiter(list));
  }

  function toIntArray(arr) {
    for (var i = 0; i < arr.length; i++)
      arr[i] = Number(arr[i].trim());

    return arr;
  }

  /*** Library ***/
  var listing = function() {
    listing.append = function (list, value) {
      if(list.length == 0) return value;
      else return String(list).concat(getDelimiter(list), value);
    },

    listing.avg = function (list) {
      var listArr = toIntArray(listToArray(list));
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        sum += listArr[i];

      return (sum / listArr.length).toFixed(2);
    },

    listing.changeDelims = function (list, newDelimiter) {
      var regex = new RegExp(getDelimiter(list), "g");

      return list.replace(regex, newDelimiter);
    },


    listing.concat = function (list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);

      return listArr1.concat(listArr2).toString();
    },

    listing.contains = function (list, substring) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]).includes(String(substring))) return i;

      return 0;
    },

    listing.containsNoCase = function (list, substring) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]).toLowerCase().includes(String(substring).toLowerCase())) return i;

      return 0;
    },

    listing.deleteAt = function (list, position) {
      var listArr = listToArray(list);

      listArr.splice(position, 1);
      return listArr.toString();
    },

    listing.each = function (list, callback) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        callback(listArr[i].trim(), i);
    },

    listing.find = function (list, value) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]) == String(value)) return i;

      return 0;
    },

    listing.findNoCase = function (list, value) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]).toLowerCase() == String(value).toLowerCase()) return i;

      return 0;
    },

    listing.first = function (list) {
      var listArr = listToArray(list);

      return listArr[0];
    },

    listing.getAt = function (list, position) {
      var listArr = listToArray(list);

      return listArr[position];
    },

    listing.getDuplicates = function (list) {
      var listArr = listToArray(list);
      var tempArr = new Array();

      for (var i = 0; i < listArr.length; i++) {
        for (var k = i + 1; k < listArr.length; k++)
          if(listArr[i].trim() == listArr[k].trim()) tempArr.push(listArr[k].trim());
      }
      return tempArr.toString();
    },

    listing.isList = function (list) {
      return Array.isArray(listToArray(list));
    },

    listing.insertAt = function (list, position, value) {
      var listArr = listToArray(list);

      listArr.splice(position,0,value);
      return listArr.toString();
    },

    listing.last = function (list) {
      var listArr = listToArray(list)
      return listArr[listArr.length-1];
    },

    listing.len = function (list) {
      return listToArray(list).length;
    },

    listing.max = function (list) {
      var listArr = toIntArray(listToArray(list));
      var max = listArr[0];

      for (var i = 0; i < listArr.length; i++)
        if(listArr[i] > max) max = listArr[i];

      return max;
    },

    listing.min = function (list) {
      var listArr = toIntArray(listToArray(list));
      var min = listArr[0];

      for (var i = 0; i < listArr.length; i++)
        if(listArr[i] < min) min = listArr[i];

      return min;
    },

    listing.prepend = function (list, value) {
      var listArr = listToArray(list);

      listArr.splice(0,0,value);
      return listArr.toString();
    },

    listing.qualify = function (list, value) {
      var listArr = listToArray(list);

      listArr.splice(0,0,value);
      listArr.splice(listArr.length,0,value);

      return listArr.toString();
    },

    listing.removeDuplicates = function (list) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++) {
        for (var k = i + 1; k < listArr.length; k++)
          if(listArr[i].trim() == listArr[k].trim()) listArr.splice(k, 1)
      }
      return listArr.toString();
    },

    listing.replace = function (stringToReplace, list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);
      var stringArr = stringToReplace.split(' ');

      for (var i = 0; i < stringArr.length; i++) {
        for (var k = 0; k < listArr1.length; k++)
          if(stringArr[i].trim() == listArr1[k].trim())
            stringArr[i] = listArr2[k].trim();
      }
      return stringArr.join(' ');
    },

    listing.replaceNoCase = function (stringToReplace, list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);
      var stringArr = stringToReplace.split(' ');

      for (var i = 0; i < stringArr.length; i++) {
        for (var k = 0; k < listArr1.length; k++)
          if(stringArr[i].trim().toLowerCase() == listArr1[k].trim().toLowerCase())
            stringArr[i] = listArr2[k].trim();
      }
      return stringArr.join(' ');
    },

    listing.rest = function (list) {
      var listArr = listToArray(list);

      listArr.shift();
      return listArr.toString();
    },

    listing.reverse = function (list) {
      return listToArray(list).reverse().toString();
    },

    listing.setAt = function (list, position, value) {
      var listArr = listToArray(list);

      listArr[position] = value;
      return listArr.toString();
    },

    listing.slice = function (list, start, end) {
      var listArr = listToArray(list);

      return listArr.slice(start, end).toString();
    },

    listing.sort = function (list) {
      var listArr = toIntArray(listToArray(list));

      return listArr.sort(function(a,b){return a - b}).toString();
    },

    listing.swap = function (list, pos1, pos2) {
      var listArr = listToArray(list);

      var temp = listArr[pos1];
      listArr[pos1] = listArr[pos2];
      listArr[pos2] = temp;

      return listArr.toString();
    },

    listing.toArray = function (list) {
      return list.split(getDelimiter(list));
    },

    listing.valueCount = function (list, value) {
      var listArr = listToArray(list);
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]) == value) sum++;

      return sum;
    },

    listing.valueCountNoCase = function (list, value) {
      var listArr = listToArray(list);
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        if(String(listArr[i]).toLowerCase() == value.toLowerCase()) sum++;

      return sum;
    }

    return listing;
  };

  if (typeof module !== "undefined" && typeof module.exports !== "undefined")
    module.exports = listing();
  else
    window.listing = listing();

})();
