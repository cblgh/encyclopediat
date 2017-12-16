function Layout(host)
{
  Corpse.call(this,host);

  this.start = function()
  {
    this.hd.innerHTML = `<h1>Encyclopediat</h1><input id='filter' type='text' placeholder='Filter'/>`;
  }

  this.attach_listeners = function() {
    document.getElementById("filter").addEventListener("keydown", function(e) {
      console.log("wow i received", e)
    })

    document.getElementById("operator").addEventListener("keydown", function(e) {
      if (e.key == "Enter" && !e.shiftKey) {
        e.preventDefault()
        var input = this.value
        var term = input.split("\n")[0]
        var entry = input.split("\n").slice(1).join("\n")
        console.log("term", term)
        console.log("entry", entry)
        // clear
        this.value = ""
      }
    })
  }

  this.update = function()
  {
    var html = "";

    for(id in this.host.collector.dict){
      var term = this.host.collector.dict[id];
      html += term.to_html();
    }

    this.md.innerHTML = "<textarea id='operator'></textarea><yu class='sidebar'>"+this.get_sidebar_html()+"</yu><list>"+html+"</list>";
    this.attach_listeners()
  }

  this.get_sidebar_html = function()
  {
    return this.get_terms_html()+this.get_authors_html();
  }

  this.get_authors_html = function()
  {
    var html = "";
    for(id in this.host.collector.aggregate){
      var auth = this.host.collector.aggregate[id];
      html += "<ln><a href='"+auth+"'>"+compress_dat_url(auth)+"</a></ln>"
    }
    html += "<ln><action>Add</action></ln>"
    return "<list>"+html+"</list>";
  }

  this.get_terms_html = function()
  {
    var html = "";

    for(id in this.host.collector.dict){
      var term = this.host.collector.dict[id];
      html += "<ln><a href='#"+term.name+"'>"+term.name+"</a></ln>"
    }
    html += "<ln><action>Add</action></ln>"
    return "<list>"+html+"</list>";
  }
}

invoke.vessel.seal("corpse","layout");
