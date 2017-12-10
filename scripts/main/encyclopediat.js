function Encyclopediat()
{
  Invoke.call(this);
  
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
}

invoke.seal("main","encyclopediat");