define([], () => {
  'use strict';

  class PageModule {
    calculateResult(equation){
      return eval(equation).toString(); 
    }
  }
  
  return PageModule;
});