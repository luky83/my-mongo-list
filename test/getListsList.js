var mongolist = require("../")
, MongoClient = require('mongodb').MongoClient
, url = 'mongodb://localhost/test'
, assert = require("assert")
, clean = require ("mongo-clean");

describe ('Mongolist', function (){


var db;
var instance;

  beforeEach(function(done){
    MongoClient.connect(url, { w: 1 }, function(err, mdb) {
      db = mdb;
      clean(db, function() {
        instance = mongolist(db)
        done()
      })
    })  
  })
  
  
  describe('retriveLists', function(){
    it('should return a lists list', function(done){
      instance.getLists(function(err, lists) {
        assert.equal(0, lists.length);
        done()
      })
    })
  })
  
  describe('insert', function(){
    it('should insert an item into the first list', function(done){
      instance.insert({name:'luca',message:'prova',flag:"todo"},function(err, list) {
        assert.equal('luca', list.name)
        assert.equal('prova', list.message)
        assert.equal('todo', list.flag)
        done()
      })
    })
  })

  
  /*describe('done', function(){
    it('should change the item flag', function(done){
      instance.update(id, function(err, list){
        assert.equal('done', list.flag)
        done()
      })
    })
  })*/

})
