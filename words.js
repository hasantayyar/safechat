var async = require("async");

var words = [ 'fuck', 'asshole', 'göt', 'piç', 'orospu', 'amcık', 'pezevek', 'aq', 'amk', 'ibne', 'götoş', 'sikiş', 'aq.', 'yarrak', 'penis', 'dick', 'ibne', 'sikmek', 'recep', 'tayyip', 'erdoğan', 'recep tayyip erdoğan', 'rte', 'seks', 'sikiş', 'sokuş', 'çaktığım', 'amık', 'kıç', 'siktim', 'sikerler', 'sikeceğim', 'sikmiştim', 'sikerim', 'amuğa', 'makat', 'attırmak', 'erekte', 'ereksiyon', 'siktir', 'siktirgit'];
module.exports.replace = function(msg) {

  var msg_array = msg.split(" ");
  var safe_msg = "";
  async.eachLimit(msg_array, 6, function(word){
    for (var i = 0; i < words.length; i++)
      if(words[i] == word) word = "****";
    safe_msg = safe_msg + " " + word;
  });
  delete msg_array;
  return safe_msg;
};
