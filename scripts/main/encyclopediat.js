function Encyclopediat()
{
  Invoke.call(this);

  this.url = window.location.origin.toString();
  
  this.requirements = {
    corpse:["layout","collector","term"]
  };

  this.archive = new DatArchive(window.location.origin.toString());
  this.name = "encyclopediat";
  this.corpse = null;
  this.collector = null;

  this.start = function()
  {
    this.corpse = new Layout(this);
    this.corpse.install();

    this.collector = new Collector(this);
    this.collector.start();
  }

  this.update = function()
  {
    this.corpse.update();
  }

  this.edit = function(e)
  {
    var term = this.collector.dict[e];
    console.log(term.find_active_version())
  }
}

function compress_dat_url(url)
{
  return url.substr(0,12)+".."+url.substr(url.length-3,2);
}

invoke.seal("main","encyclopediat");