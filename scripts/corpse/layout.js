function Layout(host)
{
  Corpse.call(this,host);

  this.start = function()
  {
    this.hd.innerHTML = `<h1>Encyclopediat</h1><input type='text' placeholder='Filter'/>`    
  }

  this.update = function()
  {
    var html = "";
    var sidebar_html = "";

    for(id in this.host.collector.dict){
      var term = this.host.collector.dict[id];
      html += term.to_html();
      sidebar_html += "<ln><a href='#"+term.name+"'>"+term.name+"</a></ln>"
    }
    this.md.innerHTML = "<list class='sidebar'>"+sidebar_html+"</list><list>"+html+"</list>";
  }
}

invoke.vessel.seal("corpse","layout");
