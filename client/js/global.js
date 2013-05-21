var global = {} || window;
global.url = function(type){
  if (type === "debug"){
    return "http://127.0.0.1:5000";
  }else if (type === "production"){
    return "";
  }

};

