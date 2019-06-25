(function(){    // function run by itself - anonymous function?
    function Init(){
        console.log("Initialization Start");

        let x: number = 10;
    }

    window.onload = Init;
})();