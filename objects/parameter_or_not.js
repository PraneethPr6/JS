function Check(obj1) {
    for(var prop in obj1) {
                  if(obj1.hasOwnProperty(prop))
                      return "true";
              }
          
              return "false";
 }
 
 