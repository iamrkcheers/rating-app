app.factory("ratingfactory",function(){
    var obj={
        objList:[],
        push:function(name,desc,mngr,rating,count){
            var o=new object(name,desc,mngr,rating,count);
            obj.objList.push(o);
        },
        get:function(index){
           var o = obj.objList.filter(function(item){
                return item.id=="index";
            });
            obj.objList.pop(o);
        }
    }
    return obj;
});
   function object(name,desc,mngr,rating,count){
        this.name=name;
        this.desc=desc;
        this.mngr=mngr;
        this.rating=rating;
        this.count=count;

   }