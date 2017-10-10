(function () {
  'use strict';

  /*** Private Functions ***/
  function getDelimiter(list) {
    var delimiter = String(list).match(/,|;|:|-/g);
    return delimiter != null && delimiter.length ? delimiter[0] : ',';
  }

  function listToArray(list) {
    return list.split(getDelimiter(list));
  }

  function toIntArray(arr) {
    for (var i = 0; i < arr.length; i++)
      arr[i] = Number(arr[i].trim())

    return arr
  }

  function escapeString(string) {
    return String(string).trim();
  }

  /*** Library ***/
  var list = function() {
    list.append = function (list, value) {
      if(list.length == 0) return value;
      else return String(list).concat(getDelimiter(list), value);
    },

    list.avg = function (list) {
      var listArr = listToArray(list);
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        sum += Number(listArr[i].trim());

      return (sum / listArr.length).toFixed(2);
    },

    list.changeDelims = function (list, newDelimiter) {
      var regex = new RegExp(getDelimiter(list), "g");

      return list.replace(regex, newDelimiter);
    },


    list.concat = function (list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);
      return listArr1.concat(listArr2).toString();
    },

    list.contains = function (list, substring) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(escapeString(listArr[i]).includes(substring)) return i;

      return 0;
    },

    list.containsNoCase = function (list, substring) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(escapeString(listArr[i]).toLowerCase().includes(substring.toLowerCase())) return i;

      return 0;
    },

    list.deleteAt = function (list, position) {
      var listArr = listToArray(list);

      listArr.splice(position, 1);
      return listArr.toString();
    },

    list.each = function (list, callback) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        callback(listArr[i].trim(), i);
    },

    list.find = function (list, value) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(listArr[i].trim() == value) return i;

      return 0;
    },

    list.findNoCase = function (list, value) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++)
        if(escapeString(listArr[i]).toLowerCase() == value.toLowerCase()) return i;

      return 0;
    },

    list.first = function (list) {
      var listArr = listToArray(list);

      return listArr[0];
    },

    list.getAt = function (list, position) {
      var listArr = listToArray(list);

      return listArr[position];
    },

    list.getDuplicates = function (list) {
      var listArr = listToArray(list);
      var tempArr = new Array();

      for (var i = 0; i < listArr.length; i++) {
        for (var k = i + 1; k < listArr.length; k++)
          if(listArr[i].trim() == listArr[k].trim()) tempArr.push(listArr[k].trim());
      }
      return tempArr.toString();
    },

    list.indexOf = function (list, position) {
      var listArr = listToArray(list);
      return listArr.indexOf(escapeString(position));
    },

    list.isList = function (list) {
      return Array.isArray(listToArray(list));
    },

    list.insertAt = function (list, position, value) {
      var listArr = listToArray(list);

      listArr.splice(position,0,value);
      return listArr.toString();
    },

    list.last = function (list) {
      var listArr = listToArray(list)
      return listArr[listArr.length-1];
    },

    list.lastIndexOf = function (list, position) {
      var listArr = listToArray(list);

      return listArr.lastIndexOf(escapeString(position));
    },

    list.len = function (list) {
      return listToArray(list).length;
    },

    list.max = function (list) {
      var listArr = toIntArray(listToArray(list));
      var max = listArr[0];

      for (var i = 0; i < listArr.length; i++)
        if(listArr[i] > max) max = listArr[i];

      return max;
    },

    list.min = function (list) {
      var listArr = toIntArray(listToArray(list));
      var min = listArr[0];

      for (var i = 0; i < listArr.length; i++)
        if(listArr[i] < min) min = listArr[i];

      return min;
    },

    list.prepend = function (list, value) {
      var listArr = listToArray(list);

      listArr.splice(0,0,value);
      return listArr.toString();
    },

    list.qualify = function (list, value) {
      var listArr = listToArray(list);

      listArr.splice(0,0,value);
      listArr.splice(listArr.length,0,value);

      return listArr.toString();
    },

    list.removeDuplicates = function (list) {
      var listArr = listToArray(list);

      for (var i = 0; i < listArr.length; i++) {
        for (var k = i + 1; k < listArr.length; k++)
          if(listArr[i].trim() == listArr[k].trim()) listArr.splice(k, 1)
      }
      return listArr.toString();
    },

    list.replace = function (stringToReplace, list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);
      var stringArr = stringToReplace.split(' ');

      for (var i = 0; i < stringArr.length; i++) {
        for (var k = 0; k < listArr1.length; k++)
          if(stringArr[i].trim() == listArr1[k].trim())
            stringArr[i] = listArr2[k].trim();
      }
      return stringArr.toString();
    },

    list.replaceNoCase = function (stringToReplace, list1, list2) {
      var listArr1 = listToArray(list1);
      var listArr2 = listToArray(list2);
      var stringArr = stringToReplace.split(' ');

      for (var i = 0; i < stringArr.length; i++) {
        for (var k = 0; k < listArr1.length; k++)
          if(stringArr[i].trim().toLowerCase() == listArr1[k].trim().toLowerCase())
            stringArr[i] = listArr2[k].trim();
      }
      return stringArr.toString();
    },

    list.rest = function (list) {
      var listArr = listToArray(list);

      listArr.shift();
      return listArr.toString();
    },

    list.reverse = function (list) {
      return listToArray(list).reverse().toString();
    },

    list.setAt = function (list, position, value) {
      var listArr = listToArray(list);

      listArr[position] = value;
      return listArr.toString();
    },

    list.slice = function (list, start, end) {
      var listArr = listToArray(list);

      return listArr.slice(start, end).toString();
    },

    list.sort = function (list) {
      var listArr = toIntArray(listToArray(list));

      return listArr.sort(function(a,b){return a - b}).toString();
    },

    list.swap = function (list, pos1, pos2) {
      var listArr = listToArray(list);

      var temp = listArr[pos1];
      listArr[pos1] = listArr[pos2];
      listArr[pos2] = temp;

      return listArr.toString();
    },

    list.toArray = function (list) {
      return list.split(getDelimiter(list));
    },

    list.valueCount = function (list, value) {
      var listArr = listToArray(list);
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        if(escapeString(listArr[i]) == value) sum++;

      return sum;
    },

    list.valueCountNoCase = function (list, value) {
      var listArr = listToArray(list);
      var sum = 0;

      for (var i = 0; i < listArr.length; i++)
        if(escapeString(listArr[i]).toLowerCase() == value.toLowerCase()) sum++;

      return sum;
    }

    return list;
  };

  if (typeof module !== "undefined" && typeof module.exports !== "undefined")
    module.exports = list();
  else
    window.list = list();

})();
