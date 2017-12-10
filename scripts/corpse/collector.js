function Collector(host)
{
  this.host = host;
  this.aggregate = [];
  this.dict = {};

  this.start = function()
  {
    console.log("Hello",this.host.archive)
    this.install(this.host.archive);
  }

  this.install = async function(archive)
  {
    var file = await archive.readFile('/aggregate.json',{timeout: 2000}).then(console.log("Installed Collector"));
    this.aggregate = JSON.parse(file).aggregate;
    this.load(this.aggregate)
  }

  this.load = async function(aggregate)
  {
    for(id in aggregate){
      var archive = new DatArchive(aggregate[id]);
      var file = await archive.readFile('/dict.json',{timeout: 2000}).then(console.log("Aggregated",aggregate[id]));
      this.collect(JSON.parse(file),aggregate[id]);
    }
    this.host.update();
  }

  this.collect = async function(dict,auth)
  {
    for(id in dict){
      if(!this.dict[id]){ this.dict[id] = new Term(id); }
      var term = dict[id];
      dict[id].auth = auth
      this.dict[id].push(term);
    }
  }
}

invoke.vessel.seal("corpse","collector");
