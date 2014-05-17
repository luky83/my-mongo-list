

function A(db){
	if (!(this instanceof A)){
	  return new A(db)
	}
    this.db = db
} 

A.prototype.getLists = function(done){
    var lists = this.db.collection('lists');
    lists.find().toArray(function(err, results){
      done(err, results)
    });
}

A.prototype.insert = function(item,done){
    var lists = this.db.collection('lists');
    lists.insert(item, function(err, results){
      done(err, results[0])
    });
}

A.prototype.update = function(id,done){
    var lists = this.db.collection('lists');
    lists.insert(id, function(err, results){
      done(err, results)
    });
}


module.exports = A

